'use client';

import React, { useState } from 'react';
import { LinkAyat } from './linkAyat';

export const AyatList = ({ verses }) => {
  const [selected, setSelected] = useState('');

  return (
    <ul className="list-ayat flex gap-2 overflow-x-scroll scroll-smooth py-3 border-t border-dashed border-gray-300 shadow-md">
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
