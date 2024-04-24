'use client';

import React, { useState } from 'react';
import { SquareMenu } from 'lucide-react';
import SurahList from './surahList';

export async function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <span
        onClick={toggleMenu}
        className="block lg:hidden fixed bottom-4 left-4 bg-white p-1 z-[10] rounded-md border"
      >
        <SquareMenu size={30} className="" />
      </span>
      <aside className="p-5 pb-0 border border-dashed rounded  left-0 bottom-16 lg:sticky z-[10] lg:top-0 w-full lg:max-w-[360px] h-[92vh] overflow-hidden hidden lg:block bg-lemonade">
        <SurahList
          titleOnly={true}
          listDisplay={'space-y-3'}
          listHeight={'h-[calc(100vh-200px)] overflow-scroll pr-2 pb-8'}
        />
      </aside>
      {isOpen && (
        <aside className="p-5 pb-0 border border-dashed rounded absolute left-0 bottom-16 lg:sticky z-[10] lg:top-0 w-full lg:max-w-[360px] h-[92vh] overflow-hidden block bg-lemonade">
          <SurahList
            titleOnly={true}
            listDisplay={'space-y-3'}
            listHeight={'h-[calc(100vh-200px)] overflow-scroll pr-2 pb-8'}
          />
        </aside>
      )}
    </>
  );
}
