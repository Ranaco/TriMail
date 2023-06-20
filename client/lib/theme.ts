import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#D0BCFF",
      dark: "#381E72",
      light: "#EADDFF",
      "100": "#7574CC",
    },
    secondary: {
      main: "#CCC2DC",
      dark: "#242933",
      light: "#E8DEF8",
    },
    error: {
      main: "#F2B8B5",
      dark: "#601410",
      light: "#F9DEDC",
    },
    background: {
      default: "#1C1B1F",
    },
  },
});

export default theme;
