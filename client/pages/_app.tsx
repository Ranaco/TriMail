import * as React from "react";
import { AppProps } from "next/app";
import { EmotionCache, ThemeProvider } from "@emotion/react";
import theme from "../lib/theme";
import { CssBaseline } from "@mui/material";
import createEmotionCache from "../lib/createEmotionCache";
import Layout from "../components/layout/main";
import ParticleService from "../lib/hooks/particle-hook";
import { AppContextState, AppContextValue } from "../lib/types";

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
  const particleService: ParticleService = new ParticleService();

  //App State
  const initState: AppContextState = {
    address: "",
    particle: particleService.particle,
    particleAuth: particleService.particleAuth,
  };
  const [state, setState] = React.useState<AppContextState>(initState);
  React.useEffect(() => {}, []);

  //Layout fix
  const getLayout = Component.getLayout;

  return getLayout ? (
    getLayout(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppState.Provider value={{ state, setState }}>
          <Component {...pageProps} />
        </AppState.Provider>
      </ThemeProvider>
    )
  ) : (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppState.Provider value={{ state, setState }}>
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
      </AppState.Provider>
    </ThemeProvider>
  );
};

export default App;
