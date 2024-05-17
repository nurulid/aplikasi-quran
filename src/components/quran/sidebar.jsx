'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  PlaySquareIcon,
  Settings2,
} from 'lucide-react';
import SurahList from './surahList';
import { ThemeSwitcher } from '../ui/themeSwitcher';

const Navigation = () => {
  return (
    <div className="btm-nav bg-base-100 z-[10] h-12 max-w-4xl w-full mx-auto fixed bottom-0 sm:bottom-4 shadow-md">
      <button className="text-primary group">
        <input id="my-drawer" type="checkbox" className="drawer-toggle " />
        <label htmlFor="my-drawer" className="drawer-button btn bg-transparent border-none hover:bg-transparent group-hover:text-primary w-full">
          <BookOpen />
        </label>
      </button>
      <button className="text-primary" disabled>
        <PlaySquareIcon />
      </button>
      <button className="text-primary" disabled>
        <Settings2 />
      </button>
    </div>
  );
};

const MobileSidebar = () => {
  return (
    <aside
      className={[
        'p-5 pb-0 border border-dashed rounded bg-lemonade',
        'absolute left-0 top-0 z-[9]',
        'w-full h-[calc(100vh-80px)]',
      ].join(' ')}
    >
      <SurahList
        titleOnly={true}
        listDisplay={'space-y-3'}
        listHeight={'h-full overflow-scroll pr-2 pb-8'}
      />
    </aside>
  );
};

export async function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="drawer z-10 ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu w-80 min-h-full bg-base-200 text-base-content relative p-0">
            <ThemeSwitcher />
            {/* Sidebar content here */}
            <SurahList
              titleOnly={true}
              listDisplay={'space-y-3'}
              listHeight={'overflow-scroll pb-16'}
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
    </>
  );
}
