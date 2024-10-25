import React from 'react';
import { data } from './works';
import { Link } from 'react-router-dom';

const Work = () => {

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

  return (
    <div className="grid lg:grid-cols-2 gap-4 gap-y-16 lg:gap-y-8 lg:px-[25px] px-5 py-5 lg:py-0">
      {data.map((item) => (
        <div key={item.id} className="relative">
          {/* Image with Hover Effect */}
          <div className="relative group">
          <Link to={`/work/${item.id}`} onClick={handleClick}>

            <img 
              src={item.main} 
              alt={item.title} 
              className="w-full h-[420px] object-cover cursor-pointer rounded-[10px]"
            />

            {/* "See More" Button */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[10px]">

              <button className="font-custom1 text-black text-[26px] px-4 py-2 rounded-[5px]">
                See More
              </button>
              
            </div>
            </Link>
          </div>

          {/* Title */}
          <p className="text-[36px] mt-2">{item.title}</p>

          {/* Category */}
          <p className="text-[16px] text-[#A055FF]">{item.category}</p>

          {/* Description */}
          <p className="text-[16px] lg:pr-10 text-justify leading-[19.2px] tracking-tight text-[#181919] mt-2">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Work;
