import React from "react";

export default function QuranLayout({ children }) {
  return (
    <main className="h-full cw-full max-w-[1440px] mx-auto">
      {children}
    </main>
  );
}
