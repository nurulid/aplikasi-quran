import { useState, useEffect } from 'react';

export const SurahSearch = ({ quranData, setFilteredQuranData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredData = quranData.filter((surah) => {
      const searchLower = searchTerm.toLowerCase();

      // search in surah name
      const nameMatch = surah.name.toLowerCase().includes(searchLower);

      // search in surah number
      // convert number to string for comparison
      const numberMatch = surah.number_of_surah.toString().includes(searchTerm);

      // search in translations of surah name
      const translationMatch = Object.values(
        surah.name_translations || {}
      ).some((translation) => translation.toLowerCase().includes(searchLower));

      return nameMatch || numberMatch || translationMatch;
    });

    setFilteredQuranData(filteredData);
  }, [searchTerm, quranData]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="sticky top-0 p-4 z-[11] bg-base-100 shadow-sm">
      <input
        className="p-4 block w-full border border-neutral bg-base-100 rounded"
        type="text"
        placeholder="Cari dengan nama atau nomor Surah"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};
