import { notFound } from 'next/navigation';
import { ScrollProgress } from '@/components/quran/scrollProgress';
import { AyatList } from '@/components/quran/ayatList';
import { SingleSurah } from '@/components/quran/singleSurah';

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
  // console.log(surah.tafsir.id.kemenag.text)

  return (
    <div>
      <ScrollProgress isOverflowScroll={true} />
      <div className="">
        <div className="mb-10 text-center">
          <div>
            <h3 className="text-4xl mb-2">{surah.name}</h3>
            <p className="text-gray-500">{surah.name_translations.id}</p>
          </div>
        </div>

        <audio src={surah.recitations[1].audio_url} controls></audio>
        <h3 className="text-center mb-4 text-xl">Ayat</h3>
        <AyatList verses={surah.verses} />
      </div>
      <SingleSurah surah={surah} tafsirSurah={tafsirSurah}/>
    </div>
  );
}
