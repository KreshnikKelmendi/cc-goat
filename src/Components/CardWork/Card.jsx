import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import project1 from "../Assets/data-1.png";

// Example data for the carousel
const carouselData = [
  {
    id: 1,
    imageUrl: project1,
    altText: 'Project 1',
    title: 'Title for Project 1',
  },
  {
    id: 2,
    imageUrl: project1,
    altText: 'Project 2',
    title: 'Title for Project 2',
  },
  {
    id: 3,
    imageUrl: project1,
    altText: 'Project 3',
    title: 'Title for Project 3',
  },
  {
    id: 3,
    imageUrl: project1,
    altText: 'Project 3',
    title: 'Title for Project 3',
  },
  {
    id: 3,
    imageUrl: project1,
    altText: 'Project 3',
    title: 'Title for Project 3',
  },
  
];

// Responsive breakpoints for the carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// Custom Left Arrow Component
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      className="absolute flex justify-center border border-[#181919] items-center left-[20px] top-1/2 transform -translate-y-1/2 w-[52px] h-[52px] bg-[#6BECD0] button-shadow text-white rounded-full"
      onClick={onClick}
    >
      <svg width="19" height="28" viewBox="0 0 19 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3L5 14L16 25" stroke="#181919" stroke-width="6"/>
</svg>

    </button>
  );
};

// Custom Right Arrow Component
const CustomRightArrow = ({ onClick }) => {
  return (
    <button
    className="absolute flex justify-center border border-[#181919] items-center right-[20px] top-1/2 transform -translate-y-1/2 w-[52px] h-[52px] bg-[#6BECD0] button-shadow text-white rounded-full"
    onClick={onClick}
    >
      <svg width="19" height="28" viewBox="0 0 19 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3L14 14L3 25" stroke="#181919" stroke-width="6"/>
</svg>

    </button>
  );
};

const Card = () => {
  return (
    <div className="w-full mt-8 text-center">
      <p className="font-custom1 uppercase text-center lg:text-[100px]">Stuff we worked</p>

      {/* Carousel with mapped data */}
      <Carousel
        responsive={responsive}
        showDots={false}
        infinite={true}
        autoPlay={true}
      
        itemClass="carousel-item mx-6" // Add margin between items
        dotListClass="custom-dot-list-style" // Move dots lower with margin
        customLeftArrow={<CustomLeftArrow />} // Custom left arrow
        customRightArrow={<CustomRightArrow />} // Custom right arrow
      >
        {carouselData.map((item) => (
          <div key={item.id} className="text-center w-full lg:w-[276px]">
            {/* Image */}
            <img src={item.imageUrl} alt={item.altText} className=" lg:h-[358px] w-full lg:w-[276px] rounded-t-[10px]" />

            {/* Title */}
            <p className="h-[51px] hover:bg-[#6BECD0] hover:duration-300 font-custom flex justify-center rounded-b-[12px] items-center text-lg font-semibold border border-[#181919]">
              {item.title}
            </p>
          </div>
        ))}
      </Carousel>

      <div className='mt-10 flex justify-center items-center'>
        <button className='bg-[#DAFF00] button-shadow font-custom w-[158px] rounded-[18px] h-[36px] flex justify-center items-center border-[2px] border-[#181919]'>View More</button>
      </div>
    </div>
  );
};

export default Card;
