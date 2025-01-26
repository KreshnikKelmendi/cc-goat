import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { data } from '../Works/works';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

// Breakpoints për carousel
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

// Tilt effect constants
const ROTATION_RANGE = 34.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

// Custom Left Arrow Component
const CustomLeftArrow = ({ onClick }) => (
  <button
    className="absolute flex justify-center items-center left-2 lg:left-5 button-shadow top-1/2 transform -translate-y-1/2 w-8 h-8 lg:w-12 lg:h-12 bg-[#6BECD0] border border-[#181919] text-white rounded-full shadow-md"
    onClick={onClick}
  >
    <svg className='lg:w-[19px] w-4 h-4 lg:h-[28px]' viewBox="0 0 19 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3L5 14L16 25" stroke="#181919" strokeWidth="6" />
    </svg>
  </button>
);

// Custom Right Arrow Component
const CustomRightArrow = ({ onClick }) => (
  <button
    className="absolute flex justify-center items-center right-2 lg:right-5 top-1/2 transform button-shadow -translate-y-1/2 w-8 h-8 lg:w-12 lg:h-12 bg-[#6BECD0] border border-[#181919] text-white rounded-full shadow-md"
    onClick={onClick}
  >
    <svg className='lg:w-[19px] w-4 h-4 lg:h-[28px]' viewBox="0 0 19 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3L14 14L3 25" stroke="#181919" strokeWidth="6" />
    </svg>
  </button>
);

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const PortfolioCard = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Kartela e parë është gjithmonë aktive

  const handleChange = (nextIndex) => {
    setActiveIndex(nextIndex); // Ndryshon indeksi i kartelës aktive
  };

  // Mouse tracking për tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!e.currentTarget) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="w-full mt-10 px-5 lg:px-0 text-center">
      {/* Carousel me mapped data */}
      <Carousel
        responsive={responsive}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        itemClass="lg:px-[35px] 2xl:px-[50px]"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        beforeChange={(_, nextIndex) => handleChange(nextIndex)}
      >
        {data?.map((item, index) => (
          <motion.div
            key={item.id}
            className={`text-center ${index === activeIndex ? 'active-card' : ''}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transformStyle: 'preserve-3d',
              transform: index === activeIndex ? 'none' : transform, // Kartela aktive nuk do të ketë tilt
            }}
          >
            {/* Imágenes */}
            <Link to={`/work/${item.id}`} onClick={handleClick}>
              <img
                src={item.main}
                alt={item.altText}
                className="w-full h-96 lg:h-[50vh] 2xl:h-[55ch] object-cover rounded-[12px]"
              />
              {/* Titulli */}
              <p className="py-5 mx-auto transition duration-300 font-custom2 font-extrabold flex justify-center items-center text-sm lg:text-[32px] text-[#FCF5F2]">
                {item.category}
              </p>
            </Link>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default PortfolioCard;
