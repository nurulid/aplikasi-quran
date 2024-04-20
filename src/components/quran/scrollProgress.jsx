"use client"

import React, { useEffect } from 'react';
import { scroll } from 'framer-motion/dom';

export const ScrollProgress = () => {
  useEffect(() => {
    const progressWheel = document.querySelector('.progress');

    scroll(
      (progress) => {
        progressWheel.style.strokeDasharray = `${progress}, 1`;
      },
      {
        source: document.querySelector(".ayat-list"),
      }
    );
  }, []);
  return (
    <svg width="50" height="50" viewBox="0 0 100 100" className="progress-wheel">
      <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
      <circle cx="50" cy="50" r="30" pathLength="1" className="progress" />
    </svg>
  );
};
