import React from "react";
import { SurahList } from "@/components/quran/surahList";

export default function Page() {
  return (
    <div className="grid grid-cols-3 gap-5">
      <SurahList />
    </div>
  );
}
