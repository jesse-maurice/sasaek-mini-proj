import React from 'react';

import book from '../../src/images/image 304.png';
import { useLanguage } from '../context/LanguageContext';

const Culture = () => {
  const { language, translations } = useLanguage();

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-64">
      <div className="w-full py-24 text-center sm:py-16 md:py-36 lg:py-32 xl:py-[240px]">
        <h1 className="w-full font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111111] leading-[130%]">
          {translations[language].h1Culture}
        </h1>
        <h2 className="font-bold flex flex-col sm:flex-row my-2 sm:my-3 md:my-4 items-center justify-center gap-3 sm:gap-4 md:gap-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111111] leading-[130%]">
          {translations[language].h2Culture}
          <img
            className="w-32 sm:w-40 md:w-48 lg:w-[240px] h-12 sm:h-14 md:h-16 lg:h-[84px] rounded-3xl sm:rounded-[50px] md:rounded-[100px]"
            src={book}
            alt="Book"
          />
        </h2>
        <h3 className="font-bold leading-[130%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111111]">
          {translations[language].h3Culture}
        </h3>
        <p className="font-normal mt-4 sm:mt-6 md:mt-7 lg:mt-[28px] leading-[150%] text-sm sm:text-base md:text-lg lg:text-xl text-[#111111]">
          {translations[language].paragraphCulture}
        </p>
      </div>
    </div>
  );
};

export default Culture;
