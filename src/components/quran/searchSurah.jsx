import { useState, useEffect } from "react";

export const SearchSurah = ({ quranData, setFilteredQuranData }) => {
  const [searchTerm, setSearchTerm] = useState("");

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
    <input
      className="p-4 mb-4 block w-full"
      type="text"
      placeholder="Search by surah name"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};
