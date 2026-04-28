"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1a1a1a",
    },
    background: {
      default: "#f5f5f0",
    },
  },
  typography: {
    fontFamily: "inherit",
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;
