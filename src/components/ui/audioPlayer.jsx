import React from 'react';

export const AudioPlayer = ({ url,autoPlay }) => {
  return (
    <div className='absolute -bottom-2 lg:-bottom-5 left-10 lg:left-0 right-0'>
      <audio src={url} controls autoPlay={autoPlay} className='w-full'></audio>
    </div>
  );
};
