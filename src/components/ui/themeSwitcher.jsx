'use client';

import { useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';

const themeColors = ['lemonade', 'forest', 'dim', 'lofi'];
const arabFonts = ['font-arabic', 'fontIbm', 'fontKufi'];

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
      <div className="flex gap-3 mb-6">
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
      <div className="flex gap-3 mb-6">
        {arabFonts.map((font) => (
          <button
            className="p-2 border hover:opacity-85 transition-all rounded capitalize"
            key={font}
            onClick={() => toggleFont(font)}
          >
            {font}
          </button>
        ))}
      </div>
    </>
  );
};
