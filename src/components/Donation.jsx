import React from 'react';

import { useLanguage } from '../context/LanguageContext';
import handshake from '../images/heart-handshake.png';

const Donation = () => {
  const { language, translations } = useLanguage(); 
  
  return (
    <>
      <div className="w-full h-[428px] py-20 px-[280px] bg-[#f8f4f3] text-center flex flex-col ">
        <h1 className=" font-gowun font-bold text-[40px] leading-[150%]">
          {translations[language].h1Donation}
        </h1>
        <h2 className="mt-8 mb-2 font-gowun font-bold text-xl leading-[150%]">
          {translations[language].h2Donation}
        </h2>
        <p className=" font-gowun font-bold text-xl leading-[150%]">
          {translations[language].paragraphDonation}
        </p>
        <div className="flex w-full font-pretend items-center justify-center gap-3 mt-[52px]">
          <button className=" border-2 py-[19px] font-medium text-lg leading-[100%] flex items-center px-6 gap-2 border-[#111111] rounded-full cursor-pointer">
            <img className="w-6 h-6 " src={handshake} alt="" />
            {translations[language].button1}
          </button>
          <button className=" border-2 py-[19px] font-medium text-lg leading-[100%] flex items-center px-6 border-[#111111] rounded-full cursor-pointer">
            {translations[language].button2}
          </button>
        </div>
      </div>
    </>
  );
}

export default Donation