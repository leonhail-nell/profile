"use client";
import { createContext, useContext } from "react";

export const ColorModeContext = createContext({
  mode: "light" as "light" | "dark",
  toggleColorMode: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);
