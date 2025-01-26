import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

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

const CustomLeftArrow = ({ onClick }) => (
  <button
    className="absolute flex justify-center items-center left-5 button-shadow top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#6BECD0] border border-[#181919] text-white rounded-full shadow-md"
    onClick={onClick}
  >
    <svg width="19" height="28" viewBox="0 0 19 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3L5 14L16 25" stroke="#181919" strokeWidth="6" />
    </svg>
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    className="absolute flex justify-center items-center right-5 top-1/2 transform button-shadow -translate-y-1/2 w-12 h-12 bg-[#6BECD0] border border-[#181919] text-white rounded-full shadow-md"
    onClick={onClick}
  >
    <svg width="19" height="28" viewBox="0 0 19 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3L14 14L3 25" stroke="#181919" strokeWidth="6" />
    </svg>
  </button>
);

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const CategoryCard = ({ data }) => {
  const isFewItems = data?.length <= 3; // Adjust for fewer items

  return (
    <div className={`w-full mt-10 mx-auto ${isFewItems ? 'flex justify-center' : ''}`}>
      {isFewItems ? (
        // Center items for fewer data
        <div className="flex flex-col lg:flex-row px-4 lg:px-0 justify-center gap-x-8">
          {data.map((item) => (
            <div key={item.id} className="text-center">
              <Link to={`/workito/${item.id}`} onClick={handleClick}>
                <p
                  className="py-5 mx-auto transition duration-300 font-custom2 font-extrabold flex justify-center items-center text-sm lg:text-[32px] text-[#FCF5F2]"
                >
                  {item.title}
                </p>
                <img
                  src={item.main}
                  alt={item.altText}
                  className="w-[100%] h-80 lg:h-[55vh] 2xl:h-[45ch] object-cover rounded-[12px]"
                />
                <p className="h-[36px] mt-4 w-[158px] mx-auto hover:bg-[#6BECD0] transition duration-300 font-custom flex justify-center items-center text-sm lg:text-[18px] bg-[#DAFF00] rounded-[18px]">
                  Show More
                </p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        // Use carousel for more items
        <Carousel
          responsive={responsive}
          showDots={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          itemClass="px-[6px]"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {data?.map((item) => (
            <div key={item.id} className="text-center">
              <Link to={`/workito/${item.id}`} onClick={handleClick}>
                <p
                  className="py-5 mx-auto transition duration-300 font-custom2 font-extrabold flex justify-center items-center text-sm lg:text-[32px] text-[#FCF5F2]"
                >
                  {item.title}
                </p>
                <img
                  src={item.main}
                  alt={item.altText}
                  className="w-full h-80 lg:h-[45vh] 2xl:h-[45ch] object-cover rounded-[12px]"
                />
                <p className="h-[36px] mt-4 w-[158px] mx-auto hover:bg-[#6BECD0] transition duration-300 font-custom flex justify-center items-center text-sm lg:text-[18px] bg-[#DAFF00] rounded-[18px]">
                  Show More
                </p>
              </Link>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default CategoryCard;
