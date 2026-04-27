import type { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: "#7c5cff",
    },
    secondary: {
      main: "#5c80ff",
    },
    background: {
      default: mode === "light" ? "#f7f8fb" : "#050a13",
      paper: mode === "light" ? "#ffffff" : "#091124",
    },
    text: {
      primary: mode === "light" ? "#111827" : "#f8fafc",
      secondary: mode === "light" ? "#4b5563" : "#a6b0cf",
    },
  },
  typography: {
    fontFamily: ["Inter", "system-ui", "sans-serif"].join(","),
    h1: {
      fontSize: "3rem",
      fontWeight: 800,
      letterSpacing: "-0.04em",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 800,
    },
    h4: {
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: mode === "light" ? "#eef2ff" : "#050a13",
          color: mode === "light" ? "#111827" : "#f8fafc",
          transition: "background-color 0.3s ease, color 0.3s ease",
        },
      },
    },
  },
});

export const lightTheme = createTheme(getDesignTokens("light"));
export const darkTheme = createTheme(getDesignTokens("dark"));
