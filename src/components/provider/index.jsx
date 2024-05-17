"use client"

import { ThemeProvider } from "@/context/themeContext";

export const Provider = ({children}) => {
  return (
    <ThemeProvider>{children}</ThemeProvider>
  )
}
