'use client';

import React, { useEffect } from 'react';
import { scroll } from 'framer-motion/dom';

export const ScrollProgress = ({ isOverflowScroll }) => {
  useEffect(() => {
    const progressWheel = document.querySelector('.progress');

    {
      if (isOverflowScroll) {
        scroll(
          (progress) => {
            progressWheel.style.strokeDasharray = `${progress}, 1`;
          },
          {
            source: document.querySelector('.scroll-progress-target'), // if isOverflowScroll add scroll-progress-target class to the container content
          }
        );
      } else {
        scroll((progress) => {
          progressWheel.style.strokeDasharray = `${progress}, 1`;
        });
      }
    }
  }, []);
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 100 100"
      className={`progress-wheel ${isOverflowScroll ? "absolute top-0 left-0" : "fixed top-[20px] left-[20px]"}`}
    >
      <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
      <circle cx="50" cy="50" r="30" pathLength="1" className="progress" />
    </svg>
  );
};
