import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineSound } from 'react-icons/ai';

const EqualizerIcon = () => {
  return (
    <div className="flex gap-[2px]">
      {[1, 2, 3, 4].map((_, i) => (
        <motion.span
          key={i}
          className="w-[3px] h-4 bg-white rounded-sm"
          animate={{
            scaleY: [1, Math.random() * 2 + 1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.5,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
};

const FirstPartOfPortfolio = ({ first, soundStates, toggleSound, workID }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenMedia, setFullscreenMedia] = useState(null);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeFullscreen();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMediaClick = (media) => {
    setFullscreenMedia(media);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenMedia(null);
  };

  return (
    <div className="w-full relative px-3 lg:px-[25px] gap-4 mt-4">
      <div className={`grid gap-4 ${workID === '9' || workID === "10" || workID === "17" ? 'lg:grid-cols-1' : 'lg:grid-cols-2'}`}>
        {first?.map((media, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full object-cover relative"
          >
            {media && (typeof media === 'string' && media.endsWith('.mp4') ? (
              <>
                <video
                  className="w-full h-full lg:h-[60ch] 2xl:h-[100vh] object-cover rounded-[10px] transition-opacity hover:bg-black/50 hover:opacity-50 cursor-pointer"
                  autoPlay
                  playsInline
                  loop
                  muted={!soundStates[index]}
                  onClick={() => handleMediaClick(media)}
                >
                  <source src={media} type="video/mp4" />
                </video>
                <button
                  onClick={() => toggleSound(index)}
                  className="absolute bottom-2 left-1 bg-black/50 p-2 rounded-full text-white cursor-pointer"
                >
                  {soundStates[index] ? (
                    <EqualizerIcon />
                  ) : (
                    <AiOutlineSound className="w-4 h-4" />
                  )}
                </button>
              </>
            ) : (
              <img
                src={media}
                alt=""
                className="w-full h-full lg:h-[60ch] 2xl:h-[100vh] rounded-[10px] object-cover transition-opacity hover:bg-black/50 hover:opacity-50 cursor-pointer"
                onClick={() => handleMediaClick(media)}
              />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative w-full h-full">
            {typeof fullscreenMedia === 'string' && fullscreenMedia.endsWith('.mp4') ? (
              <video
                className="w-full h-full object-contain"
                autoPlay
                playsInline
                loop
                muted
              >
                <source src={fullscreenMedia} type="video/mp4" />
              </video>
            ) : (
              <img
                src={fullscreenMedia}
                alt="Fullscreen"
                className="w-full h-full object-contain"
              />
            )}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 text-white text-4xl cursor-pointer"
            >
              &times; {/* Larger Close button */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstPartOfPortfolio;
