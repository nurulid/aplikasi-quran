'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';
import { Github } from 'lucide-react';

const themeColors = ['lemonade', 'forest', 'dim', 'lofi'];
const arabFonts = [
  { name: 'Noto Sans Arabic', value: 'font-arabic' },
  { name: 'IBM Plex Sans Arabic', value: 'fontIbm' },
  { name: 'Noto Kufi Arabic', value: 'fontKufi' },
];

export const ThemeSwitcher = () => {
  const { changeTheme, changeFont } = useTheme();
  const [activeTheme, setActiveTheme] = useState('lemonade');
  const [activeFont, setActiveFont] = useState('font-arabic');

  const toggleTheme = (theme) => {
    changeTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    setActiveTheme(theme);
  };

  const toggleFont = (font) => {
    changeFont(font);
    localStorage.setItem('font', font);
    setActiveFont(font);
  };

  useEffect(() => {
    const themeActive = localStorage.getItem('theme');
    const fontActive = localStorage.getItem('font');

    if (themeActive) {
      toggleTheme(themeActive);
      setActiveFont(themeActive);
    }

    if (fontActive) {
      toggleFont(fontActive);
      setActiveFont(fontActive);
    }
  }, []);

  return (
    <div className="space-y-8 flex flex-col h-full">
      <div className="space-y-3">
        <h3 className="text-lg">Ganti Warna Tema:</h3>
        <div className="flex gap-3">
          {themeColors.map((theme) => (
            <button
              className={[
                'p-2 border hover:opacity-85 transition-all rounded capitalize',
                activeTheme === theme ? 'border-green-400' : '',
              ].join(' ')}
              key={theme}
              onClick={() => toggleTheme(theme)}
              data-theme={theme}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg">Ganti Huruf Arab:</h3>
        <div className="flex flex-col gap-2">
          {arabFonts.map(({ name, value }, i) => (
            <button
              className={[
                'p-2 border hover:opacity-85 transition-all rounded capitalize',
                activeFont === value ? 'border-green-400' : '',
              ].join(' ')}
              key={i}
              onClick={() => toggleFont(value)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      <div className="h-8" />
      <div className="text-center text-xs">
        <Link
          href="https://github.com/nurulid/aplikasi-quran"
          target="_blank"
          className="underline text-primary"
        >
          <Github className="inline-block mr-1" size={14} /> Source code
        </Link>
      </div>
    </div>
  );
};
