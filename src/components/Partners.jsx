import 'swiper/css';

import React from 'react';

import {
  BsArrowLeft,
  BsArrowRight,
} from 'react-icons/bs';
import {
  Autoplay,
  Navigation,
} from 'swiper/modules';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import { useLanguage } from '../context/LanguageContext';
import icon1 from '../images/image 272.png';
import icon4 from '../images/image 273 (1).png';
import icon2 from '../images/image 274.png';
import icon3 from '../images/image 292.png';

const Partners = () => {
  const { language, translations } = useLanguage();

  const slides = [
    {
      icon: (
        <img
          src={icon1}
          alt="Partner 1"
          className="w-12 sm:w-16 md:w-20 lg:w-[80px] h-auto"
          loading="lazy"
        />
      ),
      h1: translations[language].h1Icon1,
      h2: translations[language].h2Icon1,
    },
    {
      icon: (
        <img
          src={icon4}
          alt="Partner 2"
          className="w-16 sm:w-20 md:w-24 lg:w-[104px] h-auto"
          loading="lazy"
        />
      ),
      h1: translations[language].h1Icon4,
      h2: translations[language].h1Icon4,
    },
    {
      icon: (
        <img
          src={icon2}
          alt="Partner 3"
          className="w-20 sm:w-24 md:w-32 lg:w-[160px] h-auto"
          loading="lazy"
        />
      ),
      h1: translations[language].h1Icon2,
      h2: translations[language].h1Icon2,
    },
    {
      icon: (
        <img
          src={icon3}
          alt="Partner 4"
          className="w-24 sm:w-32 md:w-40 lg:w-[220px] h-auto"
          loading="lazy"
        />
      ),
      h1: translations[language].h1Icon4,
      h2: translations[language].h1Icon4,
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-64">
      <div className="flex flex-col lg:flex-row items-center overflow-visible gap-4 sm:gap-6 md:gap-8 lg:gap-[10px] pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-[240px] w-full">
        {/* Text Section */}
        <div className="w-full lg:w-[245px] flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-[100px] justify-between items-center lg:items-start">
          <h1 className="font-gowun pr-0 lg:pr-[30px] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[150%] text-[#111111] text-center lg:text-left">
            {translations[language].h1Partners}
          </h1>
          <div className="flex gap-2">
            <button
              className="swiper-prev flex text-white bg-[#111111] w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 rounded-full justify-center items-center hover:bg-[#4d342c]"
              aria-label="Previous slide"
            >
              <BsArrowLeft />
            </button>
            <button
              className="swiper-next flex text-white bg-[#111111] w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 rounded-full justify-center items-center hover:bg-[#4d342c]"
              aria-label="Next slide"
            >
              <BsArrowRight />
            </button>
          </div>
        </div>

        {/* Swiper Section */}
        <div className="w-full lg:w-[835px] flex items-center">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={2}
            breakpoints={{
              1536: { slidesPerView: 3 }, // Show 3 slides on ultrawide screens
            }}
            spaceBetween={8}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            loop={true}
            className="w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center w-[150px] sm:w-[180px] md:w-[200px] lg:w-[250px] h-56 sm:h-64 md:h-72 lg:h-[330px]">
                  <div className="flex items-center mb-4 sm:mb-6 md:mb-8 justify-center w-full h-24 sm:h-32 md:h-40 lg:h-[200px]">
                    {slide.icon}
                  </div>
                  <h1 className="font-gowun font-bold mb-1 sm:mb-2 text-base sm:text-lg md:text-xl lg:text-2xl text-[#111111] text-center">
                    {slide.h1}
                  </h1>
                  <h2 className="font-gowun font-medium text-xs sm:text-sm md:text-base lg:text-lg text-[#666666] text-center">
                    {slide.h2}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partners;
