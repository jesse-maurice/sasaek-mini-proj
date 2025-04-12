import React from 'react';

import { useLanguage } from '../context/LanguageContext';
import handshake from '../images/heart-handshake.png';

const Donation = () => {
  const { language, translations } = useLanguage();

  return (
    <div className="w-full py-24 sm:py-16 md:py-36 lg:py-24 xl:py-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-64 bg-[#f8f4f3] text-center flex flex-col">
      <h1 className="font-gowun font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[150%]">
        {translations[language].h1Donation}
      </h1>
      <h2 className="mt-4 sm:mt-6 md:mt-8 mb-1 sm:mb-2 font-gowun font-bold text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%]">
        {translations[language].h2Donation}
      </h2>
      <p className="font-gowun font-bold text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%]">
        {translations[language].paragraphDonation}
      </p>
      <div className="flex w-full font-pretend items-center justify-center flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 md:mt-10 lg:mt-[52px]">
        <button className="group border-2 py-3 sm:py-4 md:py-[19px] font-medium text-sm sm:text-base md:text-lg leading-[100%] flex items-center px-4 sm:px-5 md:px-6 gap-1 sm:gap-2 border-[#111111] rounded-full cursor-pointer hover:bg-[#4d342c] hover:text-white">
          <img
            className="w-5 h-5 sm:w-6 sm:h-6 group-hover:brightness-0 group-hover:invert"
            src={handshake}
            alt="Handshake"
          />
          {translations[language].button1}
        </button>
        <button className="border-2 py-3 sm:py-4 md:py-[19px] font-medium text-sm sm:text-base md:text-lg leading-[100%] flex items-center px-4 sm:px-5 md:px-6 border-[#111111] rounded-full cursor-pointer hover:bg-[#4d342c] hover:text-white">
          {translations[language].button2}
        </button>
      </div>
    </div>
  );
};

export default Donation;
