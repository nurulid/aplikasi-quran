'use client';

import Link from 'next/link';

export const LinkAyat = ({ verse, selected, setSelected }) => {
  // const color = selected === verse.number ? "green" : "red";

  const getLinkRef = () => {
    setSelected(verse.number);
  };

  return (
    <Link
      href={`#${verse.number}`}
      // style={{ marginTop: "10px", backgroundColor: `${color}` }}
      onClick={getLinkRef}
      className={`py-4 px-5 ${selected === verse.number ? 'active text-primary bg-primary/10' : ''}`}
    >
      {verse.number}
    </Link>
  );
};
