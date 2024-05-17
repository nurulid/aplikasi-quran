"use client";

import React, { useState, useEffect } from "react";
import { SurahCard } from "./surahCard";
import { SurahSearch } from "./surahSearch";

const SurahList = ({listDisplay, titleOnly, listHeight}) => {
  const [quranData, setQuranData] = useState([]);
  const [filteredQuranData, setFilteredQuranData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json"
        );
        const data = await response.json();
        setQuranData(data);
        setFilteredQuranData(data); // Initially set filtered data to all Quran data
      } catch (error) {
        console.error("Error fetching Quran data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <SurahSearch setFilteredQuranData={setFilteredQuranData} quranData={quranData}/>
      <div className={`p-4 pt-0 ${listHeight}`}>
        <div className={`${listDisplay}`}>
          {filteredQuranData.map((surah) => (
            <SurahCard key={surah.number_of_surah} surah={surah} titleOnly={titleOnly}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default SurahList;
