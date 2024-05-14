import { useState, useEffect } from 'react';

export const SurahSearch = ({ quranData, setFilteredQuranData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Filter the Quran data based on the search term
    const filteredData = quranData.filter((surah) =>
      surah.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredQuranData(filteredData);
  }, [searchTerm, quranData]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='sticky top-0 p-4 z-[11] bg-lemonade'>
      <input
        className="p-4 block w-full border"
        type="text"
        placeholder="Cari dengan nama Surah"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};
