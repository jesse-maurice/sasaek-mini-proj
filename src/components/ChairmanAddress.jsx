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
    <>
      <div className="flex relative flex-col w-full px-[150px]">
        <div className="absolute z-0 right-0 top-[35px] bg-[#d0def0] h-[324px] w-[550px] rounded-l-full"></div>
        <div className="w-full relative flex items-center justify-between gap-[102px] mb-[120px]">
          <div className="w-full">
            <h1 className=" font-bold font-gowun text-4xl leading-[150%] mb-[60px]">
              {translations[language].h1Chairman}
            </h1>
            <p className=" text-[#4c4c4c w-[550px] mb-3 font-pretend text-base font-normal leading-[150%]">
              {translations[language].paragraphChairman}
            </p>
            <h2 className=" font-bold flex items-center gap-4 text-lg font-gowun text-[#111111] leading-[150%]">
              {translations[language].h2Chairman}
              <img className="w-[150px] " src={signature} alt="" />
            </h2>
            <h3 className="font-medium flex items-center text-base mt-5 font-pretend text-[#111111] leading-[100%]">
              {translations[language].h3Chairman}
              <CgChevronRight />
            </h3>
          </div>
          <div className="z-10 w-full">
            <img
              className="absolute -right-[90px] -bottom-[40px]"
              src={Chairman}
              alt=""
            />
          </div>
        </div>
        <div className="flex w-full gap-[130px] justify-center">
          {/* Avatar 1 */}
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-[#bbbbbb] flex items-center justify-center w-[200px] h-[200px] overflow-hidden">
              <img
                className="object-cover w-full h-full rounded-full"
                src={avatar1}
                alt=""
              />
            </div>
            <p className="mt-4 text-center font-bold text-2xl leading-[150%] font-gowun">
              {translations[language].chairman}
            </p>
          </div>

          {/* Avatar 2 */}
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-[#bbbbbb] flex items-center justify-center w-[200px] h-[200px] overflow-hidden">
              <img
                className="object-cover w-full h-full rounded-full"
                src={avatar2}
                alt=""
              />
            </div>
            <p className="mt-4 text-center font-bold text-2xl leading-[150%] font-gowun">
              {translations[language].advisor}
            </p>
          </div>

          {/* Avatar 3 */}
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-[#bbbbbb] flex items-center justify-center w-[200px] h-[200px] overflow-hidden">
              <img
                className="object-cover w-full h-full rounded-full"
                src={avatar3}
                alt=""
              />
            </div>
            <p className="mt-4 text-center font-bold text-2xl leading-[150%] font-gowun">
              {translations[language].advisor}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChairmanAddress