'use client';

import { BookOpen, PlayCircle, Settings2 } from 'lucide-react';
import SurahList from './surahList';
import { ThemeSwitcher } from '../ui/themeSwitcher';

const Navigation = () => {
  return (
    <div className="btm-nav bg-base-100 z-[10] h-14 max-w-4xl w-full mx-auto fixed bottom-0 sm:bottom-4 shadow-md">
      <button className="text-primary group">
        <input id="my-drawer" type="checkbox" className="drawer-toggle " />
        <label
          htmlFor="my-drawer"
          className="drawer-button btn bg-transparent border-none hover:bg-transparent group-hover:text-primary w-full py-2 flex-nowrap"
        >
          <BookOpen />
        <span className="btm-nav-label text-xs">Surah</span>
        </label>
      </button>
      <button className="text-primary group" disabled>
        <PlayCircle />
        {/* <span className="btm-nav-label text-xs">Audio</span> */}
      </button>
      <button className="text-primary group">
        <input id="setting" type="checkbox" className="drawer-toggle " />
        <label
          htmlFor="setting"
          className="drawer-button btn bg-transparent border-none hover:bg-transparent group-hover:text-primary w-full py-2 flex-nowrap"
        >
          <Settings2 />
          <span className="btm-nav-label text-xs">Pengaturan</span>
        </label>
      </button>
    </div>
  );
};

export async function Sidebar() {

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
          <div className="menu w-80 min-h-full bg-base-100 relative p-0">
            {/* Sidebar content here */}
            <SurahList
              titleOnly={true}
              listDisplay={'space-y-3'}
              listHeight={'overflow-scroll pb-16'}
            />
          </div>
        </div>
      </div>

      <div className="drawer z-10">
        <input id="setting" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="setting"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu w-80 h-full bg-base-100 relative p-4">
            {/* Sidebar content here */}
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
    </>
  );
}
