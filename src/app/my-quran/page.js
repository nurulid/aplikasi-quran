import React from 'react';
import SurahList from '@/components/quran/surahList';
import { ThemeSwitcher } from '@/components/ui/themeSwitcher';

export default function Page() {
  return (
    <>
      <div className='hidden'>
        <ThemeSwitcher />
      </div>
      <SurahList
        titleOnly={false}
        listDisplay={'grid sm:grid-cols-2 md:grid-cols-3 gap-4'}
        listHeight={'h-screen overflow-scroll'}
      />
    </>
  );
}
