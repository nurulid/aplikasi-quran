import React from 'react';
import SurahList from '@/components/quran/surahList';

export default function Page() {
  return (
    <>
      <SurahList
        titleOnly={false}
        listDisplay={'grid sm:grid-cols-2 md:grid-cols-3 gap-4'}
        listHeight={'h-screen overflow-scroll pr-2'}
      />
    </>
  );
}
