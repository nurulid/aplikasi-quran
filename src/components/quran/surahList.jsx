import React from "react";
import { CardSurah } from "./cardSurah";

export async function SurahList({ titleOnly }) {
  const res = await fetch(
    "https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json",
    {
      cache: "no-cache",
    }
  );
  const allSurah = await res.json();

  return (
    <>
      {allSurah.map((surah) => (
        <CardSurah
          key={surah.number_of_surah}
          surah={surah}
          titleOnly={titleOnly}
        />
      ))}
    </>
  );
}
