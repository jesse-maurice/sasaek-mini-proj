import React from 'react';

import book from '../../src/images/image 304.png';
import { useLanguage } from '../context/LanguageContext';

const Culture = () => {
  const { language, translations } = useLanguage();

  return (
    <>
      <div className="w-full px-[250px]">
        <div className="w-full gap-3 py-[200px] text-center">
          <h1 className=" font-bold text-7xl text-[#111111] leading-[130%]">
            {translations[language].h1Culture}
          </h1>
          <h2 className="font-bold flex leading-[130%] items-center justify-center gap-5 text-7xl text-[#111111]">
            {translations[language].h2Culture}{" "}
            <img className=" rounded-[60px]" src={book} alt="" />{" "}
          </h2>
          <h3 className="font-bold leading-[130%] text-7xl text-[#111111]">
            {translations[language].h3Culture}
          </h3>
          <p className=" font-normal mt-[16px] leading-[150%] text-xl text-[#111111]">
            {translations[language].paragraphCulture}
          </p>
        </div>
      </div>
    </>
  );
}

export default Culture