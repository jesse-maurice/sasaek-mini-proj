import React from 'react';

import { BsArrowRight } from 'react-icons/bs';

import { useLanguage } from '../context/LanguageContext';
import logo from '../images/Group.png';

const Footer = () => {
  const { language, translations } = useLanguage();

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-10 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-64 bg-[#222222] py-24 sm:py-12 md:py-36 lg:py-20 xl:py-[120px]">
      {/* Left Section */}
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-center gap-2 lg:justify-start">
          <img
            className="w-6 sm:w-8 md:w-[30.94px] h-8 sm:h-10 md:h-[42px] brightness-0 invert opacity-50"
            src={logo}
            alt={translations[language].logoAlt || "Logo"}
            loading="lazy"
          />
          <p className="text-[#ffffff] text-opacity-[50%] text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {translations[language].paragraphHeader}
          </p>
        </div>
        <div className="w-full mt-6 mb-4 sm:mt-8 md:mt-10 lg:mt-16 sm:mb-6 md:mb-8">
          <ul className="flex flex-wrap items-center justify-center gap-2 lg:justify-start sm:gap-3 md:gap-4">
            <li className="font-semibold text-xs sm:text-sm md:text-base leading-[150%] font-pretend text-[#ffffff]">
              {translations[language].l1}
            </li>
            <li className="font-semibold text-xs sm:text-sm md:text-base leading-[150%] font-pretend text-[#ffffff]">
              {translations[language].l2}
            </li>
            <li className="font-normal text-xs sm:text-sm md:text-base leading-[150%] font-pretend text-[#7c7c7c]">
              {translations[language].l3}
            </li>
          </ul>
        </div>
        <div className="w-full">
          <ul className="flex flex-wrap items-center justify-center gap-2 lg:justify-start sm:gap-3 md:gap-4">
            <li className="font-normal text-[10px] sm:text-xs md:text-sm leading-[150%] font-pretend text-[#ffffff]">
              {translations[language].l4}
            </li>
            <li className="font-normal text-[10px] sm:text-xs md:text-sm leading-[150%] font-pretend text-[#ffffff]">
              <span className="font-normal text-[10px] sm:text-xs md:text-sm leading-[150%] font-pretend mr-1 sm:mr-[5px] text-[#7c7c7c]">
                {translations[language].spanl5}
              </span>
              {translations[language].l5}
            </li>
            <li className="font-normal text-[10px] sm:text-xs md:text-sm leading-[150%] font-pretend text-[#ffffff]">
              <span className="font-normal mr-1 sm:mr-[5px] text-[10px] sm:text-xs md:text-sm leading-[150%] font-pretend text-[#7c7c7c]">
                {translations[language].spanl6}
              </span>
              {translations[language].l6}
            </li>
          </ul>
        </div>
        <div className="w-full mt-1 mb-1 sm:mt-2 sm:mb-2">
          <ul className="flex flex-wrap items-center justify-center gap-2 lg:justify-start sm:gap-3 md:gap-4">
            <li className="font-normal text-[10px] sm:text-xs md:text-sm leading-[150%] font-pretend text-[#ffffff]">
              <span className="font-normal mr-1 sm:mr-[5px] text-[10px] sm:text-xs md:text-sm leading-[150%] font-pretend text-[#7c7c7c]">
                {translations[language].spanl7}
              </span>
              {translations[language].l7}
            </li>
            <li className="font-normal text-[10px] sm:text-xs md:text-sm leading-[150%] font-pretend text-[#ffffff]">
              <span className="font-normal mr-1 sm:mr-[5px] text-[10px] sm:text-xs md:text-sm leading-[150%] font-pretend text-[#7c7c7c]">
                {translations[language].spanl8}
              </span>
              {translations[language].l8}
            </li>
            <li className="font-normal text-[10px] sm:text-xs md:text-sm leading-[150%] font-pretend text-[#ffffff]">
              <span className="font-normal mr-1 sm:mr-[5px] text-[10px] sm:text-xs md:text-sm leading-[150%] font-pretend text-[#7c7c7c]">
                {translations[language].spanl9}
              </span>
              {translations[language].l9}
            </li>
            <li className="font-normal text-[10px] sm:text-xs md:text-sm leading-[150%] font-pretend text-[#ffffff]">
              <span className="font-normal mr-1 sm:mr-[5px] text-[10px] sm:text-xs md:text-sm leading-[150%] font-pretend text-[#7c7c7c]">
                {translations[language].spanl10}
              </span>
              {translations[language].l10}
            </li>
          </ul>
        </div>
        <p className="font-normal text-[10px] sm:text-xs md:text-sm leading-[150%] font-pretend text-[#ffffff] text-center lg:text-left">
          {translations[language].paragraphFooter}
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-[400px] lg:w-[400px] mt-6 sm:mt-0">
        <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[150%] font-pretend text-[#ffffff] text-center lg:text-left">
          {translations[language].h1Footer}
        </h1>
        <h2 className="mt-2 sm:mt-3 mb-4 sm:mb-6 md:mb-8 font-normal text-xs sm:text-sm md:text-base leading-[150%] font-pretend text-[#ffffff] text-center lg:text-left">
          {translations[language].h2Footer}
        </h2>
        <div className="w-full">
          <button className="flex w-full font-pretend items-center justify-between group border-[1px] py-3 sm:py-4 md:py-[19px] font-medium text-sm sm:text-base md:text-lg leading-[100%] px-4 sm:px-5 md:px-6 gap-1 sm:gap-2 border-white rounded-full cursor-pointer hover:bg-[#3f3e3e] text-white">
            {translations[language].buttonFooter}
            <BsArrowRight className="text-lg sm:text-xl md:text-2xl group-hover:brightness-0 group-hover:invert" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
