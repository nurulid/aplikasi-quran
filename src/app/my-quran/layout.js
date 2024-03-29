import React from "react";

export default function QuranLayout({ children }) {
  return (
    <div className="bg-[#F2F1E4]/70 p-10 h-[95vh] overflow-scroll w-full max-w-[1440px] mx-auto">
      {children}
    </div>
  );
}
