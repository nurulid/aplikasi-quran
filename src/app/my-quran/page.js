import React from "react";
import { SurahList } from "@/components/quran/surahList";

export default function Page() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      <SurahList titleOnly={false}/>
    </div>
  );
}
