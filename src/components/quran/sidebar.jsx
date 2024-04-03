import React from 'react';
import SurahList from './surahList';

export async function Sidebar() {
  return (
    <aside className='p-5 border border-dashed rounded sticky w-full max-w-[360px] h-[88vh] pb-10 overflow-hidden hidden lg:block'>
      <SurahList titleOnly={true} listDisplay={"space-y-3"} listHeight={"h-[calc(100vh-200px)] overflow-scroll pr-2 pb-8"}/>
    </aside>
  )
}
