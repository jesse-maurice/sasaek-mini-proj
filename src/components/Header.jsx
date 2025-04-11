import React, { useState } from 'react';

import { CgChevronDown } from 'react-icons/cg';

import {
  useLanguage,
} from '../context/LanguageContext'; // Import useLanguage hook
import logo from '../images/Group.png';

const Header = () => {
  const { language, changeLanguage, translations } =  useLanguage(); 

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full font-pretend items-center justify-between flex px-[60px] py-[47px]">
      <div className="flex items-center gap-2">
        <img className=" w-[30.94px] h-[42px]" src={logo} alt="" />
        <p className=" text-[#4d342c] text-3xl">
          {translations[language].paragraphHeader}
        </p>
      </div>
      <div className="flex gap-4">
        <ul className="flex items-center gap-4 font-pretend text-xl leading-[150%] font-semibold ">
          <li className="hover:text-[#4d342c] ">
            {translations[language].introduction}
          </li>
          <li className="hover:text-[#4d342c]">
            {translations[language].sosodamdamAPP}
          </li>
          <li className="hover:text-[#4d342c]">
            {translations[language].activity}
          </li>
        </ul>
        <div className="relative">
          <button
            className="bg-[#4C4C4C] text-sm flex items-center rounded-3xl px-2 py-1 gap-1 text-white"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
          >
            {language === "KOR" ? "KOR" : "ENG"} <CgChevronDown />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 z-10 w-20 mt-2 text-white bg-gray-800 rounded-lg shadow-lg">
              <button
                className="w-full px-4 py-2 text-xs text-left hover:bg-gray-600 hover:rounded-t-lg"
                onClick={() => changeLanguage("ENG")} // Change to English
              >
                ENG
              </button>
              <button
                className="w-full px-4 py-2 text-xs text-left hover:bg-gray-600 hover:rounded-b-lg"
                onClick={() => changeLanguage("KOR")} // Change to Korean
              >
                KOR
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
