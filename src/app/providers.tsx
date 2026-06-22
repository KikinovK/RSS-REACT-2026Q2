"use client";

import { type Theme, ThemeProvider } from "../context/ThemeContext";

interface ProvidersProps {
  children: React.ReactNode;
  initialTheme: Theme;
}

export const Providers = ({ children, initialTheme }: ProvidersProps) => {

  return (
    <ThemeProvider initialTheme={initialTheme}>
      {children}
    </ThemeProvider>
  );
}
