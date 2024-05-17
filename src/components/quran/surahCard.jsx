"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const SurahCard = ({ surah, titleOnly }) => {
  return (
    <Link
      href={`/my-quran/${surah.number_of_surah}`}
      className="block"
    >
      <div
        className="py-2 px-4 border border-neutral rounded flex items-center gap-4 w-full bg-base-100 group hover:border-secondary"
      >
        <div className="w-[50px] h-auto text-center bg-primary/10 rounded-sm p-1">
          <h4>{surah.number_of_surah}</h4>
        </div>
        <div className="flex gap-4 justify-between w-full">
          <div>
            <h3 className={`${!titleOnly ? "font-semibold" : "font-normal"}`}>
              {surah.name}
            </h3>
            {!titleOnly ? (
              <p className="text-xs text-gray-400 group-hover:text-primary">
                {surah.name_translations.id}
              </p>
            ) : null}
          </div>
          <div className="text-right">
            {!titleOnly ? (
              <p className="text-sm text-gray-400">
                {surah.name_translations.ar}
              </p>
            ) : null}
            <small className="text-nowrap group-hover:text-primary">
              {surah.number_of_ayah} ayat
            </small>
          </div>
        </div>
      </div>
    </Link>
  );
};
