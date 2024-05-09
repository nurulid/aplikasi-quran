'use client';

import { motion } from 'framer-motion';
import { numberToArabic } from 'number-to-arabic';
import { useState } from 'react';
import { wrapInParagraphs } from '@/lib/utils';
import { Modal } from '@/components/ui/modal';
import { AudioPlayer } from '../ui/audioPlayer';

const TafsirHeader = ({ surah, ayah, source }) => {
  return (
    <>
      <h3 className="text-lg font-semibold mb-2">
        Tafsir dari surah {surah} : ayat {ayah}
      </h3>
      <p className="text-gray-500 text-xs">Sumber tafsir: {source}</p>
    </>
  );
};

export const VerseList = ({ surah, tafsirSurah }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVerse, setSelectedVerse] = useState(null);
  const [audio, setAudio] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  const surahRecitations = surah.recitations;
  const surahAudio = surah.recitations[audio].audio_url;

  const handleModal = (verse) => {
    setSelectedVerse(verse);
    setModalOpen(true);
  };

  const handleSurahAudio = (id) => {
    setAudio(id);
    setAutoPlay(true)
  };
 
  return (
    <>
      <div className="flex flex-wrap justify-center py-2 gap-x-2 gap-y-1 text-xs">
        {surahRecitations.map((item, id) => (
          <span
            key={id}
            onClick={() => handleSurahAudio(id)}
            className={[
              audio === id && 'bg-primary/30 text-black',
              'px-3 py-1 rounded cursor-pointer text-nowrap',
              'border border-gray-300 bg-black text-white',
            ].join(' ')}
          >
            {item.name}
          </span>
        ))}
      </div>
      <motion.div
        className="scroll-progress-target absolute h-[calc(100%-204px)] w-full overflow-scroll scroll-smooth p-5 md:p-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {surah.verses.map((verse) => (
          <div
            key={verse.number}
            id={verse.number}
            className="py-5 mb-5 border-b border-primary/10"
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
            <button
              className="btn btn-outline btn-sm"
              onClick={() => handleModal(verse)}
            >
              Tafsir
            </button>
          </div>
        ))}
      </motion.div>

      <AudioPlayer url={surahAudio} autoPlay={autoPlay}/>

      {modalOpen && (
        <Modal
          content={wrapInParagraphs(tafsirSurah.text[selectedVerse?.number])}
          innerHTML={true}
          modalOpen={modalOpen}
          closeModal={() => setModalOpen(false)}
          modalHeader={
            <TafsirHeader
              surah={surah.name}
              ayah={selectedVerse.number}
              source={tafsirSurah.source}
            />
          }
        />
      )}
    </>
  );
};
