'use client';

import { useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';

const themeColors = ['lemonade', 'forest', 'dim', 'lofi'];

export const ThemeSwitcher = () => {
  const { changeTheme } = useTheme();

  const toggleTheme = (theme) => {
    changeTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    const themeActive = localStorage.getItem('theme');
    if (themeActive) {
      toggleTheme(themeActive);
    }
  }, []);

  return (
    <>
    <h3 className='mb-3 text-lg'>Ganti Tema:</h3>
    <div className='flex gap-3'>
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
    </>
  );
};
