import Link from "next/link";
import React from "react";

export async function SurahList({titleOnly}) {
  const res = await fetch("https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json",
  {
    cache: "no-cache",
  });
  const allSurah = await res.json();

  return (
    <>
      {allSurah.map((surah) => (
        <Link key={surah.number_of_surah} href={`/my-quran/${surah.number_of_surah}`}
          className="block"
          >
          <div className="py-2 px-4 border rounded flex items-center gap-4 w-full bg-white/80">
            <div className="w-[50px] h-auto text-center bg-primary/10 rounded-sm p-1">
              <h4>{surah.number_of_surah}</h4>
            </div>
            <div className="flex gap-4 justify-between w-full">
              <div>
                <h3 className="text-xl">{surah.name}</h3>
                {!titleOnly ? (
                  <p className="text-xs text-gray-500">{surah.name_translations.id}</p>
                ) : null}
              </div>
              <div className="text-right">
                {!titleOnly ? (
                  <p className="text-sm text-gray-500">{surah.name_translations.ar}</p>
                ) : null}
                <small className="text-nowrap">{surah.number_of_ayah} ayat</small>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
