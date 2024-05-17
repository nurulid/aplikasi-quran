"use client"

import { useTheme } from "@/hooks/useTheme";

export default function QuranLayout({ children }) {
  const { theme } = useTheme();

  return (
    <main data-theme={theme} className="h-full cw-full max-w-[1440px] mx-auto">
      {children}
    </main>
  );
}
