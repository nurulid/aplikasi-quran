import { notFound } from 'next/navigation';
import { ScrollProgress } from '@/components/ui/scrollProgress';
import { VerseNumberList } from '@/components/quran/verseNumberList';
import { VerseList } from '@/components/quran/verseList';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const surahNumber = +params.id;
  const surah = await getSurah(params.id);
  const surahNext = surahNumber < 114 && await getSurah(surahNumber+1);
  const surahPrev = surahNumber > 1 && await getSurah(surahNumber-1);
  const tafsirSurah = surah.tafsir.id.kemenag;

  return (
    <>
      <ScrollProgress isOverflowScroll={true} />
      <div className="mb-0 md:mb-4 p-5 text-center">
        <h3 className="text-xl md:text-2xl mb-0 md:mb-1">{surah.name}</h3>
        <p className="text-sm sm:text-base text-gray-400">
          {surah.name_translations.id}
        </p>
        <div className={[
          "flex text-sm mt-2",
          surahNumber > 1 ? "justify-between" : "justify-end"
          ].join(" ")}>
          {surahNumber > 1 && (
            <Link href={`/my-quran/${surahNumber - 1}`}>
              <ChevronLeft size={18} className='inline-block text-primary'/> <span className='text-gray-400'>Surah {surahPrev.name}</span>
            </Link>
          )}
          {surahNumber < 114 && (
            <Link href={`/my-quran/${surahNumber + 1}`}>
            <span className='text-gray-400'>Surah {surahNext.name}</span> <ChevronRight size={18} className='inline-block text-primary'/>
            </Link>
          )}
        </div>
      </div>
      <VerseNumberList verses={surah.verses} />
      <VerseList surah={surah} tafsirSurah={tafsirSurah} />
    </>
  );
}
