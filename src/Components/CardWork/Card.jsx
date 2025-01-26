import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { data } from '../Works/works';

// Responsive breakpoints for the carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1440 },
    items: 4,
    partialVisibilityGutter: 30,
  },
  desktop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 4,
    partialVisibilityGutter: 20,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    partialVisibilityGutter: 15,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    partialVisibilityGutter: 10,
  },
};

// Custom Left Arrow Component
const CustomLeftArrow = ({ onClick }) => (
  <button
    className="absolute flex justify-center items-center left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#6BECD0] border border-[#181919] text-white rounded-full shadow-md"
    onClick={onClick}
  >
    <svg width="19" height="28" viewBox="0 0 19 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3L5 14L16 25" stroke="#181919" strokeWidth="6" />
    </svg>
  </button>
);

// Custom Right Arrow Component
const CustomRightArrow = ({ onClick }) => (
  <button
    className="absolute flex justify-center items-center right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#6BECD0] border border-[#181919] text-white rounded-full shadow-md"
    onClick={onClick}
  >
    <svg width="19" height="28" viewBox="0 0 19 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3L14 14L3 25" stroke="#181919" strokeWidth="6" />
    </svg>
  </button>
);

const Card = () => {
  return (
    <div className="w-full mt-8 text-center px-4 lg:px-8">
      <p className="font-custom1 uppercase text-center text-[28px] lg:text-[36px] xl:text-[48px] 2xl:text-[64px]">
        Stuff We Worked On
      </p>

      {/* Carousel with mapped data */}
      <Carousel
        responsive={responsive}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        itemClass="px-4"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {data?.map((item) => (
          <div key={item.id} className="text-center">
            {/* Image */}
            <img
              src={item.main}
              alt={item.altText}
              className="w-full h-52 md:h-64 lg:h-80 xl:h-[55vh] object-cover rounded-t-lg"
            />

            {/* Title */}
            <p className="h-12 hover:bg-[#6BECD0] transition duration-300 font-custom flex justify-center items-center text-sm lg:text-lg font-semibold border border-[#181919] rounded-b-lg">
              {item.title}
            </p>
          </div>
        ))}
      </Carousel>

      <div className="mt-10 flex justify-center items-center">
        <button className="bg-[#DAFF00] shadow-md font-custom px-6 py-2 text-sm lg:text-base rounded-lg border-2 border-[#181919]">
          View More
        </button>
      </div>
    </div>
  );
};

export default Card;
