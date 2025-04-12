import React from 'react';

import { CgChevronRight } from 'react-icons/cg';

import { useLanguage } from '../context/LanguageContext';
import avatar1 from '../images/image 344.png';
import avatar3 from '../images/image 347.png';
import avatar2 from '../images/image 348.png';
import Chairman from '../images/Mask group (1).png';
import signature from '../images/Mask group (2).png';

const ChairmanAddress = () => {
  const { language, translations } = useLanguage();

  return (
    <div className="relative flex flex-col w-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:pl-64">
      {/* Text and Image Section */}
      <div className="w-full relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-[102px] mb-12 sm:mb-16 md:mb-20 lg:mb-[120px]">
        {/* Text Section */}
        <div className="w-full max-w-full lg:max-w-[550px] relative z-10">
          <h1 className="font-bold font-gowun text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[150%] mb-6 sm:mb-8 md:mb-10 lg:mb-[60px] text-center lg:text-left">
            {translations[language].h1Chairman}
          </h1>
          <p className="text-[#4c4c4c] mb-3 font-pretend text-sm sm:text-base md:text-lg font-normal leading-[150%] text-center lg:text-left">
            {translations[language].paragraphChairman}
          </p>
          <h2 className="font-bold flex items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 text-base sm:text-lg md:text-xl font-gowun text-[#111111] leading-[150%]">
            {translations[language].h2Chairman}
            <img
              className="w-24 sm:w-32 md:w-36 lg:w-[150px]"
              src={signature}
              alt="Signature"
              loading="lazy"
            />
          </h2>
          <h3 className="font-medium flex items-center justify-center lg:justify-start text-xs sm:text-sm md:text-base mt-3 sm:mt-4 md:mt-5 font-pretend text-[#111111] leading-[100%]">
            {translations[language].h3Chairman}
            <CgChevronRight />
          </h3>
        </div>

        {/* Image Section with Background */}
        <div className="relative w-full">
          <div className="absolute z-0 right-0 top-0 lg:top-4 sm:top-6 md:top-9 bg-[#d0def0] h-40 sm:h-48 md:h-56 lg:h-[324px] w-48 sm:w-64 md:w-80 lg:w-[550px] rounded-l-full"></div>
          <img
            className="relative w-48 sm:w-64 md:w-80 lg:w-96 z-10 mx-auto lg:mx-0 lg:absolute lg:sm:-right-8 lg:md:-right-12 lg:-right-[10px] lg:sm:-bottom-8 lg:md:-bottom-10 lg:-bottom-[340px]"
            src={Chairman}
            alt="Chairman"
            loading="lazy"
          />
        </div>
      </div>

      {/* Avatars Section */}
      <div className="flex flex-col lg:flex-row w-full gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-[130px] justify-center items-center">
        {/* Avatar 1 */}
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[#bbbbbb] flex items-center justify-center w-32 sm:w-40 md:w-48 lg:w-[200px] h-32 sm:h-40 md:h-48 lg:h-[200px] overflow-hidden">
            <img
              className="object-cover w-full h-full rounded-full"
              src={avatar1}
              alt="Chairman"
              loading="lazy"
            />
          </div>
          <p className="mt-3 sm:mt-4 text-center font-bold text-lg sm:text-xl md:text-2xl leading-[150%] font-gowun">
            {translations[language].chairman}
          </p>
        </div>

        {/* Avatar 2 */}
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[#bbbbbb] flex items-center justify-center w-32 sm:w-40 md:w-48 lg:w-[200px] h-32 sm:h-40 md:h-48 lg:h-[200px] overflow-hidden">
            <img
              className="object-cover w-full h-full rounded-full"
              src={avatar2}
              alt="Advisor"
              loading="lazy"
            />
          </div>
          <p className="mt-3 sm:mt-4 text-center font-bold text-lg sm:text-xl md:text-2xl leading-[150%] font-gowun">
            {translations[language].advisor}
          </p>
        </div>

        {/* Avatar 3 */}
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[#bbbbbb] flex items-center justify-center w-32 sm:w-40 md:w-48 lg:w-[200px] h-32 sm:h-40 md:h-48 lg:h-[200px] overflow-hidden">
            <img
              className="object-cover w-full h-full rounded-full"
              src={avatar3}
              alt="Advisor"
              loading="lazy"
            />
          </div>
          <p className="mt-3 sm:mt-4 text-center font-bold text-lg sm:text-xl md:text-2xl leading-[150%] font-gowun">
            {translations[language].advisor}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChairmanAddress;
