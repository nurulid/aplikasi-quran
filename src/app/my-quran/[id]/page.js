import { numberToArabic } from 'number-to-arabic';
import { notFound } from 'next/navigation';
import { ScrollProgress } from '@/components/quran/scrollProgress';

export const dynamicParams = true;

export async function getStaticParams() {
  const res = await fetch(
    'https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${id}.json'
  );
  const allSurah = await res.json();

  return allSurah.map((surah) => {
    id: surah.id;
  });
}

async function getSurah(id) {
  const res = await fetch(
    `https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${id}.json`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function Page({ params }) {
  const surah = await getSurah(params.id);

  return (
    <div>
      <ScrollProgress />
      <div className="border-b border-black">
        <div className="mb-10 text-center">
          <div>
            <h3 className="text-4xl mb-2">{surah.name}</h3>
            <p className="text-gray-500">{surah.name_translations.id}</p>
          </div>
        </div>
        <h3 className="text-center mb-4 text-xl">Ayat</h3>
        <ul className="flex gap-2 overflow-scroll scroll-smooth py-2 border-t border-dashed border-black">
          {surah.verses.map((verse) => (
            <li key={verse.number} className="px-4 py-2">
              <a href={`#${verse.number}`}>{verse.number}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="ayat-list absolute h-[calc(100%-214px)] w-full overflow-scroll px-5 scroll-smooth">
        {surah.verses.map((verse) => (
          <div
            key={verse.number}
            id={verse.number}
            className="py-5 mb-5 border-b border-gray-100"
          >
            <p className="font-arabic mb-6 relative">
              <span className="pl-8">{verse.text}</span>
              <span className="text-base sm:text-xl h-[30px] w-[30px] text-center leading-[30px] border border-gray-400 rounded-full absolute bottom-3 left-0">
                {numberToArabic(verse.number)}
              </span>
            </p>
            <p className="text-gray-500 leading-7">{verse.translation_id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
