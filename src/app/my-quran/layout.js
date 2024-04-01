import React from "react";

export default function QuranLayout({ children }) {
  return (
    <div className="p-10 h-[95vh] overflow-scroll w-full max-w-[1440px] mx-auto">
      {children}
    </div>
  );
}
