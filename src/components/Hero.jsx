import React, { useState } from 'react';

import {
  BsArrowLeft,
  BsArrowRight,
} from 'react-icons/bs';

import hero from '../../src/images/Mask group.png';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const [value, setValue] = useState(1);
  const { language, translations } = useLanguage();

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="relative z-0 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="relative">
        <img
          className="w-full h-auto rounded-2xl sm:rounded-3xl md:rounded-[40px]"
          src={hero}
          alt="Hero background"
          loading="lazy"
        />
        <div className="absolute w-full px-4 text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-[150%] font-gowun font-bold">
            {translations[language].h1Hero}
          </h1>
          <div className="flex my-4 sm:my-6 md:my-8 w-8 sm:w-10 h-[0.8px] rotate-45 bg-white place-self-center"></div>
          <h2 className="font-bold font-gowun text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-[150%]">
            {translations[language].h2Hero}
          </h2>
          <p className="my-2 sm:my-3 md:my-4 text-sm sm:text-base md:text-lg lg:text-xl font-pretend font-normal leading-[150%]">
            {translations[language].paragraphHero}
          </p>
        </div>
      </div>
      <div className="absolute hidden md:inline-flex lg:inline-flex xl:inline-flex 2xl:inline-flex items-center gap-4 sm:gap-6 md:gap-5 lg:gap-8 bottom-4 sm:bottom-6 md:bottom-[6px] right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16">
        <div className="relative w-16 h-1 bg-gray-200 rounded-full sm:w-20 md:w-14 lg:w-24">
          <div
            className={`absolute top-0 left-0 h-full bg-black rounded-full transition-all duration-300 ${
              value === "1" ? "w-1/2" : "w-1/2"
            }`}
          ></div>
          <input
            type="range"
            min="1"
            max="2"
            step="1"
            value={value}
            onChange={handleSliderChange}
            className="w-full h-full opacity-0 cursor-pointer"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex text-white bg-[#111111] w-6 h-6 sm:w-7 sm:h-7 md:w-5 md:h-5 lg:w-8 lg:h-8 rounded-full justify-center items-center">
            <BsArrowLeft />
          </button>
          <button className="flex text-white bg-[#111111] w-6 h-6 sm:w-7 sm:h-7 md:w-5 md:h-5 lg:w-8 lg:h-8 rounded-full justify-center items-center">
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
