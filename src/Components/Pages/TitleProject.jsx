import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { data } from '../Works/works';

const TitleProject = () => {
  const [hoveredTitle, setHoveredTitle] = useState(null);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-[0px] bg-gray-50 pb-16">
          <p className='text-center pb-6 font-custom text-xl'>PROJECTS</p>
      {data.map((item) => (
        <motion.div 
          key={item.id} 
          className="group cursor-pointer"
          onMouseEnter={() => setHoveredTitle(item.id)} 
          onMouseLeave={() => setHoveredTitle(null)}
        >
          {/* Title Block - Block List Style */}
          <div className="text-center relative">
            <Link onClick={handleClick} to={`/workito/${item.id}`}>
              <h3 
                className={`text-7xl lg:text-9xl font-custom1 text-[#333] block leading-[65px] lg:leading-[100px] transition-opacity duration-300 ease-out ${hoveredTitle && hoveredTitle !== item.id ? 'opacity-50' : ''}`}
              >
                {item.title}
              </h3>
            </Link>

            {/* Hover Section - Images appear closer with smooth transition */}
            <motion.div 
              className="absolute left-0 right-0 top-full space-x-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
            >
              <motion.img 
                src={item.first} 
                alt="image-1" 
                className="w-40 h-40 object-cover absolute lg:left-52 z-50 transition-all duration-500 ease-out" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <motion.img 
                src={item.second} 
                alt="image-2" 
                className="w-40 h-40 object-cover absolute top-[100px] left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <motion.img 
                src={item.third} 
                alt="image-3" 
                className="w-40 h-40 object-cover absolute right-32 top-[-10px] z-50 transition-all duration-500 ease-out" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TitleProject;
