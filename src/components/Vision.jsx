import React from 'react';

import { FiDownload } from 'react-icons/fi';

import { useLanguage } from '../context/LanguageContext';
import appscreen from '../images/app screen.png';
import icon from '../images/Group 1000002216.png';
import cutout from '../images/Intersect.png';

const Vision = () => {
  const { language, translations } = useLanguage();

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-[100px] px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-64 py-24 sm:py-16 md:py-36 lg:py-24 xl:py-[252.5px]">
      {/* Text Section */}
      <div className="flex flex-col w-full lg:w-[649px]">
        <div className="relative w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 flex items-center justify-center rounded-2xl sm:rounded-[20px] bg-[#4d342c] mx-auto lg:mx-0">
          <img src={icon} alt="Icon" loading="lazy" />
          <img
            className="absolute w-8 sm:w-10 md:w-[52px] h-8 sm:h-10 md:h-[52px] top-7 sm:top-9 md:top-11 left-7 sm:left-9 md:left-11"
            src={cutout}
            alt="Cutout"
            loading="lazy"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 sm:mt-7 md:mt-9 mb-8 sm:mb-10 md:mb-12 lg:mb-16 font-bold leading-[150%] font-gowun text-[#111111] text-center lg:text-left">
          {translations[language].h1Vision}
        </h1>
        <h2 className="font-pretend font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-[150%] text-[#4c4c4c] text-center lg:text-left">
          {translations[language].h2Vision}
        </h2>
        <h3 className="font-pretend font-normal mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-[150%] text-[#4c4c4c] text-center lg:text-left">
          {translations[language].h3Vision}
        </h3>
        <p className="font-gowun my-8 sm:my-10 md:my-12 lg:my-14 font-bold text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%] text-[#111111] text-center lg:text-left">
          {translations[language].paragraphVision}{" "}
          <span className="ml-1 font-gowun font-bold text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%] text-[#8c5947]">
            {translations[language].spanVision}
          </span>
        </p>
        <div className="flex justify-center w-full lg:justify-start">
          <button className="flex font-pretend items-center justify-center group border-2 py-3 sm:py-4 md:py-[19px] font-medium text-sm sm:text-base md:text-lg leading-[100%] px-4 sm:px-5 md:px-6 gap-1 sm:gap-2 border-[#111111] rounded-full cursor-pointer hover:bg-[#4d342c] hover:text-white">
            {translations[language].buttonVision}
            <FiDownload className="text-lg sm:text-xl md:text-2xl group-hover:brightness-0 group-hover:invert" />
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-[551px] flex items-center lg:items-end justify-center lg:justify-end">
        <img
          className="w-48 sm:w-64 md:w-80 lg:w-[360px] h-auto"
          src={appscreen}
          alt="App Screen"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Vision;
