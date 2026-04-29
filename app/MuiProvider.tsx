"use client";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { ColorModeContext } from "./ThemeContext";

export default function MuiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: mode === "light" ? "#1a1a1a" : "#e8e3db" },
          background: {
            default: mode === "light" ? "#f0ede8" : "#0d0c0b",
            paper: mode === "light" ? "#ffffff" : "#1c1b19",
          },
        },
        typography: { fontFamily: "inherit" },
        shape: { borderRadius: 4 },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
