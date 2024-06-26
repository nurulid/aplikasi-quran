import React from 'react';

export const AudioPlayer = ({ url,autoPlay }) => {
  return (
    <div className='fixed bottom-14 sm:bottom-[70px] w-full sm:w-1/2 left-1/2 -translate-x-1/2'>
      <audio src={url} controls autoPlay={autoPlay} className='w-full opacity-80 hover:opacity-100 transition-all'></audio>
    </div>
  );
};
