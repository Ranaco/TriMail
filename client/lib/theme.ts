import { createTheme } from "@mui/material";
import { M_PLUS_Rounded_1c } from "next/font/google";

export const mplus = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"],
  fallback: ["Helvetica", "Sans Serrif"],
  preload: true,
  display: "auto",
});

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
      dark: "#332D41",
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
  typography: {
    fontFamily: mplus.style.fontFamily,
  },
});

export default theme;
