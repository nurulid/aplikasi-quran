import React from 'react';
import { Sidebar } from '@/components/quran/sidebar';

export default function SurahLayout({ children }) {
  return (
    <>
      <Sidebar />
      <div className="h-[calc(100vh-150px)] sm:h-[calc(100vh-80px)] w-full relative">
        {children}
      </div>
    </>
  );
}
