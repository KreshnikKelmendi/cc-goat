import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TitleProject from '../Pages/TitleProject';

const PageAbout = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isAboutVisible, setIsAboutVisible] = useState(true); // Controls visibility of the About section

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate dynamic opacity and scale
  const opacity = Math.min(scrollY / 300 + 0.3, 1); // Starts at 0.3 and goes to 1
  const scale = 1 + Math.min(scrollY / 1000, 0.1); // Adds a subtle scaling effect

  // Close about section and navigate to homepage
  const handleCloseAbout = () => {
    setIsAboutVisible(false); // Hide the About section
    window.location.href = '/'; // Redirect to the homepage
  };

  return (
    <>
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 py-16 space-y-20">
      {/* Close Icon */}
      {isAboutVisible && (
        <motion.div
          className="fixed top-4 right-4 cursor-pointer"
          onClick={handleCloseAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-600 hover:text-black transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </motion.div>
      )}

      {/* About Section Content */}
      {isAboutVisible && (
        <>
          {/* Big "ABOUT" Text */}
          <motion.h1
            className="text-9xl font-custom1 font-extrabold text-gray-900"
            style={{
              opacity: opacity, // Dynamic opacity
              transform: `scale(${scale})`, // Subtle scale effect
            }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            ABOUT
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-3xl md:text-3xl text-center max-w-4xl font-custom1 text-gray-900"
            style={{
              opacity: opacity, // Dynamic opacity
              transform: `scale(${scale})`, // Subtle scale effect
            }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            We are Capra Creative Design Agency, dedicated to crafting innovative designs that inspire and captivate.
          </motion.p>

          {/* Additional Description */}
          <motion.div
            className="text-xl md:text-4xl font-custom1 text-center max-w-4xl px-5 leading-relaxed text-black"
            style={{
              opacity: opacity, // Dynamic opacity
              transform: `scale(${scale})`, // Subtle scale effect
            }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              At Capra Creative, we believe in the power of visual storytelling. With a team of skilled designers, developers, 
              and strategists, we transform ideas into compelling digital experiences. Our mission is to help brands stand out 
              in the competitive market by delivering creative solutions tailored to their unique needs.
            </p>
            <p className="mt-6">
              Whether you're looking for a new website, a branding overhaul, or a complete digital transformation, we’re here 
              to guide you every step of the way. Let’s build something extraordinary together.
            </p>
          </motion.div>

          {/* Framer Motion Horizontal Line */}
          <motion.div
            className="mt-12 w-48 h-1 bg-gray-300 rounded"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
          />

          {/* Call-to-Action */}
         
        </>
      )}
    </div>
    <TitleProject />
    </>
  );
};

export default PageAbout;
