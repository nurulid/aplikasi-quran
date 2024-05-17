import { notFound } from 'next/navigation';
import { ScrollProgress } from '@/components/quran/scrollProgress';
import { VerseNumberList } from '@/components/quran/verseNumberList';
import { VerseList } from '@/components/quran/verseList';

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
      next: {
        revalidate: 30,
      },
    }
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function Page({ params }) {
  const surah = await getSurah(params.id);
  const tafsirSurah = surah.tafsir.id.kemenag;

  return (
    <>
      <ScrollProgress isOverflowScroll={true} />
      <div className="mb-2 md:mb-4 p-5 text-center">
        <h3 className="text-xl md:text-2xl mb-0 md:mb-1">{surah.name}</h3>
        <p className="text-sm sm:text-base text-gray-400">{surah.name_translations.id}</p>
      </div>
      <VerseNumberList verses={surah.verses} />
      <VerseList surah={surah} tafsirSurah={tafsirSurah} />
    </>
  );
}
