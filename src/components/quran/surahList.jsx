import Link from "next/link";
import React from "react";

export async function SurahList() {
  const res = await fetch("https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json",
  {
    cache: "no-cache",
  });
  const allSurah = await res.json();

  return (
    <>
      {allSurah.map((surah) => (
        <Link href={`/my-quran/${surah.number_of_surah}`}
          className="block"
          >
          <div key={surah.number_of_surah} className="py-2 px-4 border border-gray-300 rounded bg-white">
            <h4>{surah.number_of_surah}</h4>
            <h3 className="text-xl">{surah.name}</h3>
            <p className="text-sm text-gray-500">{surah.name_translations.id}</p>
            <small>{surah.number_of_ayah} ayat</small>
          </div>
        </Link>
      ))}
    </>
  );
}
