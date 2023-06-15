import * as React from "react";
import { AppProps } from "next/app";
import { EmotionCache, ThemeProvider } from "@emotion/react";
import theme from "../lib/theme";
import { CssBaseline } from "@mui/material";
import createEmotionCache from "../lib/createEmotionCache";
import Layout from "../components/layout/main";
import ParticleService from "../lib/utils/particle-service";
import { AppContextState, AppContextValue } from "../lib/types";
import { PolybaseProvider } from "@polybase/react";
import { triMailDB } from "../lib/utils/polybase-service";
import Web3 from "web3";
import { Contract } from "web3";
import loadContract from "../lib/loadContract";
import LoadingPage from "../components/loading-page";

//App context
export const AppState = React.createContext<AppContextValue | undefined>(
  undefined
);
//-----

//Emotion Cache
const clientEmotionCache = createEmotionCache();

interface EmotionAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
//------
const App: React.FC<EmotionAppProps> = ({
  Component,
  pageProps,
  router,
  emotionCache = clientEmotionCache,
}) => {
  const particleService: ParticleService = new ParticleService(router);
  let address: any;

  //App State
  const initState: AppContextState = {
    address: "",
    provider: particleService.particleProvider,
    particleService: new ParticleService(router),
    userSBT: undefined,
  };
  const [state, setState] = React.useState<AppContextState>(initState);
  React.useEffect(() => {
    setupLogin();
  }, []);

  const setupLogin = async () => {
    address = await particleService.login();
    if (address) {
      updateState(address);
    } else {
      setState(initState);
      router.push("/auth/login");
    }
  };

  const updateState = async (address: string) => {
    if (state.provider) {
      const web3 = new Web3(state.provider);
      const userSBT: Contract<any> = loadContract(web3);
      setState((val) => ({ ...val, address, userSBT }));
      const isRegistered = await userSBT.methods.userExists(address).call();
      console.log(isRegistered);
      if (isRegistered) {
        router.replace("/home");
      } else {
        router.replace("/auth/signup");
      }
    }
  };

  //Layout fix
  const getLayout = Component.getLayout;

  return state.address ? (
    getLayout ? (
      getLayout(
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <PolybaseProvider polybase={triMailDB}>
            <AppState.Provider value={{ state, setState }}>
              <Component {...pageProps} />
            </AppState.Provider>
          </PolybaseProvider>
        </ThemeProvider>
      )
    ) : (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PolybaseProvider polybase={triMailDB}>
          <AppState.Provider value={{ state, setState }}>
            <Layout router={router}>
              <Component {...pageProps} />
            </Layout>
          </AppState.Provider>
        </PolybaseProvider>
      </ThemeProvider>
    )
  ) : (
    <LoadingPage />
  );
};

export default App;
