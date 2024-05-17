'use client';

import React, { useState } from 'react';
import { VerseNumberLink } from './verseNumberLink';

export const VerseNumberList = ({ verses }) => {
  const [selected, setSelected] = useState(1);

  return (
    <ul className="list-ayat flex gap-2 overflow-x-scroll scroll-smooth border-t border-dashed border-gray-300 shadow-md">
      <li className="py-2 px-4 text-primary z-[2] sticky left-0 bg-base-100">Ayat:</li>
      {verses?.map((verse) => (
        <li key={verse.number}>
          <VerseNumberLink
            verse={verse}
            selected={selected}
            setSelected={setSelected}
          />
        </li>
      ))}
    </ul>
  );
};
