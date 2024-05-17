'use client';

import { useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';

const themeColors = ['lemonade', 'forest', 'dim', 'lofi'];
const arabFonts = [
  { name: 'Noto Sans Arabic', value: 'font-arabic' },
  { name: 'IBM Plex Sans Arabic', value: 'fontIbm' },
  { name: 'Noto Kufi Arabic', value: 'fontKufi' },
]

export const ThemeSwitcher = () => {
  const { changeTheme, changeFont } = useTheme();

  const toggleTheme = (theme) => {
    changeTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  const toggleFont = (font) => {
    changeFont(font);
    localStorage.setItem('font', font);
  };

  useEffect(() => {
    const themeActive = localStorage.getItem('theme');
    const fontActive = localStorage.getItem('font');

    if (themeActive) {
      toggleTheme(themeActive);
    }

    if (fontActive) {
      toggleFont(fontActive)
    }
  }, []);

  return (
    <>
      <h3 className="mb-3 text-lg">Ganti Tema:</h3>
      <div className="flex gap-3 mb-8">
        {themeColors.map((theme) => (
          <button
            className="p-2 border hover:opacity-85 transition-all rounded capitalize"
            key={theme}
            onClick={() => toggleTheme(theme)}
            data-theme={theme}
          >
            {theme}
          </button>
        ))}
      </div>

      <h3 className="mb-3 text-lg">Ganti Font Arab:</h3>
      <div className="flex flex-col gap-2 mb-8">
        {arabFonts.map(({ name, value }, i) => (
          <button
            className="p-2 border hover:opacity-85 transition-all rounded capitalize"
            key={i}
            onClick={() => toggleFont(value)}
          >
            {name}
          </button>
        ))}
      </div>
    </>
  );
};
