import React from 'react';
import { Sidebar } from '@/components/quran/sidebar';

export default function SurahLayout({ children }) {
  return (
    <div className="h-full block lg:flex gap-5 justify-between">
      <Sidebar />
      <div className="h-full w-full lg:w-[calc(100%-360px)] relative">
        {children}
      </div>
    </div>
  );
}
