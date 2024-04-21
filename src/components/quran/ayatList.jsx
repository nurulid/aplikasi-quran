'use client';

import React, { useState } from 'react';
import { LinkAyat } from './linkAyat';

export const AyatList = ({ verses }) => {
  const [selected, setSelected] = useState('');

  return (
    <ul className="list-ayat flex gap-2 overflow-x-scroll scroll-smooth py-3 border-t border-dashed border-gray-300 shadow-md -ml-5 sm:ml-0 -mr-5 sm:mr-0">
      {verses?.map((verse) => (
        <li key={verse.number}>
          <LinkAyat
            verse={verse}
            selected={selected}
            setSelected={setSelected}
          />
        </li>
      ))}
    </ul>
  );
};
