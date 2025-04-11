import React, { useState } from 'react';

import {
  BsArrowLeft,
  BsArrowRight,
} from 'react-icons/bs';

import hero from '../../src/images/Mask group.png';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const [value, setValue] = useState(1);
  const { language, changeLanguage, translations } =  useLanguage(); 

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className="w-full relative z-0 px-[60px]">
        <div>
          <img className=" rounded-[40px]" src={hero} alt="" />
          <div className="absolute w-full text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <h1 className="text-[32px] leading-[150% font-gowun font-bold">
              {translations[language].h1Hero}
            </h1>
            <div className="flex my-8 w-10 h-[0.8px] rotate-45 bg-white place-self-center "></div>
            <h2 className=" font-bold font-gowun text-[45px] leading-[150%]">
              {translations[language].h2Hero}
            </h2>
            <p className="my-4 text-xl font-pretend font-normal leading-[150%] ">
              {translations[language].paragraphHero}
            </p>
          </div>
        </div>
        <div className="absolute flex items-center gap-8 bottom-[16px] right-[60px]">
          <div className="relative w-24 h-1 bg-gray-200 rounded-full">
            <div
              className={`absolute top-0 left-0 h-full bg-black rounded-full transition-all duration-300 ${
                value === "1" ? "w-1/2" : "w-full"
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
            <button className="flex text-white bg-[#111111] w-8 h-8 rounded-full justify-center items-center">
              <BsArrowLeft />
            </button>
            <button className="flex text-white bg-[#111111] w-8 h-8 rounded-full justify-center items-center">
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero