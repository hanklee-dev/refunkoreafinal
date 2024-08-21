// File: components/ThemeProvider.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

type Theme = "light" | "dark" | "system" | "custom";

interface CustomThemeContextType {
  customTheme: string;
  setCustomTheme: (theme: string) => void;
}

const CustomThemeContext = createContext<CustomThemeContextType | undefined>(
  undefined
);

export function useCustomTheme() {
  const context = useContext(CustomThemeContext);
  if (context === undefined) {
    throw new Error("useCustomTheme must be used within a CustomThemeProvider");
  }
  return context;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [customTheme, setCustomTheme] = useState<string>("#ffffff");

  useEffect(() => {
    const savedTheme = localStorage.getItem("customTheme");
    if (savedTheme) {
      setCustomTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("customTheme", customTheme);
    document.documentElement.style.setProperty(
      "--custom-bg-color",
      customTheme
    );
  }, [customTheme]);

  return (
    <CustomThemeContext.Provider value={{ customTheme, setCustomTheme }}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </CustomThemeContext.Provider>
  );
}
