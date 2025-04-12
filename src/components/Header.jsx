import React, { useState } from 'react';

import { CgChevronDown } from 'react-icons/cg';

import {
  useLanguage,
} from '../context/LanguageContext'; // Import useLanguage hook
import logo from '../images/Group.png';

const Header = () => {
  const { language, changeLanguage, translations } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between w-full px-4 py-6 bg-white shadow-md font-pretend sm:px-6 md:px-8 lg:px-12 xl:px-16 sm:py-8 md:py-10">
      {/* Logo and Title */}
      <div className="flex items-center gap-2">
        <img
          className="w-6 sm:w-8 md:w-[30.94px] h-8 sm:h-10 md:h-[42px]"
          src={logo}
          alt="Logo"
          loading="lazy"
        />
        <p className="text-[#4d342c] text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold">
          {translations[language].paragraphHeader}
        </p>
      </div>

      {/* Desktop Menu and Language Dropdown */}
      <div className="items-center hidden gap-4 md:flex">
        <ul className="flex items-center gap-3 lg:gap-4 xl:gap-6 font-pretend text-base sm:text-lg md:text-xl leading-[150%] font-semibold">
          <li className="hover:text-[#4d342c]">
            {translations[language].introduction}
          </li>
          <li className="hover:text-[#4d342c]">
            {translations[language].sosodamdamAPP}
          </li>
          <li className="hover:text-[#4d342c]">
            {translations[language].activity}
          </li>
        </ul>

        {/* Language Dropdown */}
        <div className="relative">
          <button
            className="bg-[#4C4C4C] text-xs sm:text-sm md:text-base flex items-center rounded-3xl px-2 sm:px-3 py-1 gap-1 text-white"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {language === "KOR" ? "KOR" : "ENG"} <CgChevronDown />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 z-10 w-16 mt-2 text-white bg-gray-800 rounded-lg shadow-lg sm:w-20">
              <button
                className="w-full px-3 py-1 text-xs text-left sm:px-4 sm:py-2 sm:text-sm hover:bg-gray-600 hover:rounded-t-lg"
                onClick={() => {
                  changeLanguage("ENG");
                  setIsDropdownOpen(false);
                }}
              >
                ENG
              </button>
              <button
                className="w-full px-3 py-1 text-xs text-left sm:px-4 sm:py-2 sm:text-sm hover:bg-gray-600 hover:rounded-b-lg"
                onClick={() => {
                  changeLanguage("KOR");
                  setIsDropdownOpen(false);
                }}
              >
                KOR
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 z-10 w-full bg-white shadow-md md:hidden top-16">
          <ul className="flex flex-col items-center gap-4 font-pretend text-lg leading-[150%] font-semibold py-4">
            <li className="hover:text-[#4d342c]">
              {translations[language].introduction}
            </li>
            <li className="hover:text-[#4d342c]">
              {translations[language].sosodamdamAPP}
            </li>
            <li className="hover:text-[#4d342c]">
              {translations[language].activity}
            </li>
            <div className="relative">
              <button
                className="bg-[#4C4C4C] text-sm flex items-center rounded-3xl px-3 py-1 gap-1 text-white"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {language === "KOR" ? "KOR" : "ENG"} <CgChevronDown />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 z-10 w-20 mt-2 text-white bg-gray-800 rounded-lg shadow-lg">
                  <button
                    className="w-full px-4 py-2 text-sm text-left hover:bg-gray-600 hover:rounded-t-lg"
                    onClick={() => {
                      changeLanguage("ENG");
                      setIsDropdownOpen(false);
                    }}
                  >
                    ENG
                  </button>
                  <button
                    className="w-full px-4 py-2 text-sm text-left hover:bg-gray-600 hover:rounded-b-lg"
                    onClick={() => {
                      changeLanguage("KOR");
                      setIsDropdownOpen(false);
                    }}
                  >
                    KOR
                  </button>
                </div>
              )}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
