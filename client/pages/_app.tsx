import * as React from "react";
import { AppProps } from "next/app";
import { EmotionCache, ThemeProvider } from "@emotion/react";
import theme from "../lib/theme";
import { CssBaseline } from "@mui/material";
import createEmotionCache from "../lib/createEmotionCache";
import Layout from "../components/layout/main";
import ParticleService from "../lib/utils/particle-service";
import { AppContextState, AppContextValue, User } from "../lib/types";
import { PolybaseProvider, usePolybase } from "@polybase/react";
import triMailDB from "../lib/utils/polybase-init";
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
    user: undefined,
  };
  const [state, setState] = React.useState<AppContextState>(initState);
  React.useEffect(() => {
    setupLogin();
  }, []);

  const setupLogin = async () => {
    address = await particleService.login();
    const data = await triMailDB
      .collection("UserSBT")
      .where("owner", "==", "waste")
      .get();
    const user: User = data.data[0].data;
    if (address) {
      updateState(address);
    } else {
      setState(initState);
      router.push("/");
    }
  };

  const updateState = async (address: string) => {
    const web3 = new Web3(state.provider);
    const userSBT: Contract<any> = loadContract(web3);
    setState((val) => ({ ...val, userSBT, address }));
    if (address) {
      const isRegistered = await userSBT.methods.userExists(address).call();
      const fetch = await triMailDB
        .collection("UserSBT")
        .where("owner", "==", address)
        .get();
      const userExists = fetch.data[0];
      if (isRegistered && userExists) {
        const user: User = fetch.data[0].data;
        setState((val) => ({ ...val, user }));
        if (user.interests.length !== 0) {
          router.replace("/home");
        } else {
          router.replace("/interests");
        }
      } else {
        router.replace("/auth/signup");
      }
    } else if (state.provider) {
      router.replace("/");
    }
  };

  //Layout fix
  const getLayout = Component.getLayout;

  return state.provider ? (
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
