import React, { createContext, useContext, useState } from 'react';

export const SurahContext = createContext();

export const SurahProvider = ({ children }) => {
  const [surah, setSurah] = useState(null);

  async function getSurah(id) {
    try {
      const response = await fetch(
        `https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${id}.json`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setSurah(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <SurahContext.Provider value={{ surah, getSurah }}>
      {children}
    </SurahContext.Provider>
  );
};

export const useSurah = () => {
  const context = useContext(SurahContext);

  if (context === undefined) {
    throw new Error("useSurah() must be used within a SurahProvider");
  }

  return context;
}
