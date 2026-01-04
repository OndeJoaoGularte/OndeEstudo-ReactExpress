import { createTheme, type ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    text: {
      primary: "#ffffff",
    },
    primary: {
      main: "#7F00FF",
    },
    secondary: {
      main: "#FFFF7F",
    },
    background: {
      default: "#121212",
      paper: "#121212",
    },
    error: {
      main: "#ff1000",
    },
    warning: {
      main: "#FF7F00",
    },
    info: {
      main: "#007FFF",
    },
    success: {
      main: "#00FF7F",
    },
    divider: "rgba(255,255,255,0.12)",
  },
  typography: {
    fontFamily: '"Source Sans 3", sans-serif',
    fontWeightBold: 700,
    htmlFontSize: 16,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightLight: 300,
    fontSize: 14,
    h1: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: "6rem",
      fontWeight: 300,
      lineHeight: 1.167,
    },
    h2: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: "3.75rem",
      fontWeight: 300,
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: "3rem",
      fontWeight: 400,
      lineHeight: 1.167,
    },
  },
};

export const theme = createTheme(themeOptions);
