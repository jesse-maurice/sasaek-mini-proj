import React from 'react';

import content from '../../src/data/content.json';
import concertImage from '../images/Activity Image Container (1).png';
import festivalImage from '../images/Activity Image Container.png';
import heartImage from '../images/image (1).png';
import marketImage from '../images/image (2).png';

// Mapping images to the JSON data
const imageMap = {
  "concert.jpg": concertImage,
  "festival.jpg": festivalImage,
  "market.jpg": marketImage,
  "heart.jpg": heartImage,
};

const Activities = () => {
  return (
    <div className="w-full px-4 py-24 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-64 sm:py-16 md:py-36 lg:py-24 xl:py-[240px]">
      {/* Main Title */}
      <h1 className="mb-8 text-2xl font-bold text-center sm:mb-10 md:mb-12 lg:mb-16 sm:text-3xl md:text-4xl lg:text-5xl font-gowun">
        {content.title}
        <span className="text-[#bbbbbb] font-bold font-gowun">
          · 우리의 흔적
        </span>
      </h1>

      {/* Sections */}
      <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-[52px] font-pretend">
        {content.sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="w-full">
              <img
                src={imageMap[section.image]}
                alt={section.title}
                className="object-cover w-full h-32 sm:h-40 md:h-48 lg:h-[171px]"
                loading="lazy"
              />
            </div>

            {/* Text Content */}
            <div className="w-full text-center lg:w-1/2 lg:text-left">
              <h2 className="mb-2 text-lg font-semibold sm:mb-3 md:mb-4 sm:text-xl md:text-2xl lg:text-3xl">
                {section.title}
              </h2>
              <p className="text-sm text-gray-600 whitespace-pre-line sm:text-base md:text-lg lg:text-xl">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
