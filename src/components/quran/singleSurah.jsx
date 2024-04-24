'use client';

import { motion } from 'framer-motion';
import { numberToArabic } from 'number-to-arabic';
import { Moodal } from '@/components/ui/modal';

const ModalHeader = ({ surah, ayah, source }) => {
  return (
    <>
      <h3 className="text-lg font-semibold mb-2">
        Tafsir dari surah {surah} : ayat {ayah}
      </h3>
      <p className="text-gray-500 text-xs">Sumber tafsir: {source}</p>
    </>
  );
};

export const SingleSurah = ({ surah, tafsirSurah }) => {
  return (
    <motion.div
      className="scroll-progress-target absolute h-[calc(100%-204px)] w-full overflow-scroll px-0 sm:px-5 scroll-smooth"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {surah.verses.map((verse) => (
        <div
          key={verse.number}
          id={verse.number}
          className="py-5 mb-5 border-b border-gray-100"
        >
          <p className="font-arabic mb-6 relative pl-5">
            <span className="pl-2 inline">{verse.text}</span>
            <span className="text-base sm:text-xl size-[30px] text-center leading-[30px] border border-gray-400 rounded-full inline-block">
              {numberToArabic(verse.number)}
            </span>
          </p>
          <p className="text-gray-500 leading-7 mb-3">
            <span className="text-sm text-gray-400 -translate-y-[1px] inline-block mr-1">
              {verse.number}.
            </span>
            {verse.translation_id}
          </p>

          <Moodal
            modalId={verse.number}
            modalContent={tafsirSurah.text[verse.number]}
            btnTitle={'Tafsir'}
            modalHeader={
              <ModalHeader
                surah={surah.name}
                ayah={verse.number}
                source={tafsirSurah.source}
              />
            }
          />
        </div>
      ))}
    </motion.div>
  );
};
