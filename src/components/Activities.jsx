import React from 'react';

// Import the content.json file
import content from '../../src/data/content.json';
// Importing images (assuming they are in an images folder)
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
    <div className="w-full px-[150px] py-[200px]">
      {/* Main Title */}
      <h1 className="mb-16 text-4xl font-bold text-center font-gowun">
        {content.title}
        <span className="text-[#bbbbbb]  text-4xl font-bold font-gowun">
          · 우리의 흔적
        </span>{" "}
      </h1>

      {/* Sections */}
      <div className="space-y-[52px] font-pretend">
        {content.sections.map((section, index) => (
          <div
            key={index}
            className={`flex items-center gap-8 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="w-full">
              <img
                src={imageMap[section.image]}
                alt={section.title}
                className="object-cover w-[852px] h-[171px]"
              />
            </div>

            {/* Text Content */}
            <div className="w-1/2">
              <p className="text-lg text-gray-600 whitespace-pre-line">
                {section.description}
              </p>
              <h2 className="mb-4 text-2xl font-semibold">{section.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
