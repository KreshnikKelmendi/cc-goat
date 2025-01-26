import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Import 'X' icon
import { motion } from 'framer-motion';
import { BiPalette } from 'react-icons/bi';
import CapraIcon from './CapraIcon';

const AboutPortfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [scrollDownY, setScrollDownY] = useState(0); // Track scroll position

  const handleScroll = () => {
    setScrollDownY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setShowModal(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative">
      <CapraIcon
        className="fixed top-6 right-6 text-3xl cursor-pointer text-gray-700 hover:text-black z-50"
        onClick={() => setShowModal(true)}
      />

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="bg-white w-full h-[100vh] overflow-y-auto rounded-lg relative"
          >
            <AiOutlineClose
              className="absolute top-6 right-6 text-3xl cursor-pointer text-gray-700 hover:text-black"
              onClick={() => setShowModal(false)}
            />

            <div className="text-center px-6 py-10">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">ABOUT</h1>
              <p className="text-gray-600 text-5xl lg:w-[70%] mx-auto mb-6">
                This is the About section content. You can customize it with any information you want to display.
              </p>

              <motion.div
                className="animated-text text-gray-600 mb-6 text-2xl lg:w-[70%] mx-auto"
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: scrollDownY > 100 ? 1 : 0.3,
                  color: scrollDownY > 100 ? 'black' : 'gray',
                }}
                transition={{ duration: 1 }}
              >
                Here is the text you will send later. It will animate its opacity and color based on scroll position.
              </motion.div>

              <motion.div
                className="animated-text text-gray-600 mb-6 text-2xl lg:w-[70%] mx-auto"
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: scrollDownY > 300 ? 1 : 0.3,
                  color: scrollDownY > 300 ? 'black' : 'gray',
                }}
                transition={{ duration: 1 }}
              >
                CAPRA CREATIVE, WE ARE A DESIGN AGENCY. Our focus is on crafting innovative and visually stunning digital
                experiences. Whether you're a startup or a well-established brand, we aim to bring your vision to life
                with precision and creativity.
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPortfolio;
