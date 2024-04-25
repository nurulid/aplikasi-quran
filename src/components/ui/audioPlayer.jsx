import React from 'react';

export const AudioPlayer = ({ url }) => {
  return (
    <div className='absolute -bottom-2 lg:-bottom-5 left-10 lg:left-0 right-0'>
      <audio src={url} controls className='w-full'></audio>
    </div>
  );
};
