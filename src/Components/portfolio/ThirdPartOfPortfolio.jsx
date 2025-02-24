import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiFillSound, AiOutlineSound } from 'react-icons/ai';
import { FaExpand } from 'react-icons/fa';

const ThirdPartOfPortfolio = ({ third, soundStates, toggleSound, workID }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [fullscreenMedia, setFullscreenMedia] = useState(null);

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
            <div
                className={`grid gap-4 ${
                    workID === '6' ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
                }`}
            >
                {third?.map((media, index) => (
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
                                    className="w-full h-[70vh] object-cover rounded-[10px]"
                                    autoPlay
                                    playsInline
                                    loop
                                    muted={!soundStates[index]}
                                >
                                    <source src={media} type="video/mp4" />
                                </video>
                                <button
                                    onClick={() => toggleSound(index)}
                                    className="absolute bottom-2 left-1 text-white"
                                >
                                    {soundStates[index] ? (
                                        <AiFillSound className="w-6 h-6" />
                                    ) : (
                                        <AiOutlineSound className="w-6 h-6" />
                                    )}
                                </button>
                                <button
                                    onClick={() => handleMediaClick(media)}
                                    className="absolute top-2 right-2 text-white bg-black/50 p-2 rounded-full"
                                >
                                    <FaExpand className="w-5 h-5" />
                                </button>
                            </>
                        ) : (
                            <>
                                <img
                                    src={media}
                                    alt=""
                                    className="w-full lg:h-[449px] 2xl:h-[70vh] rounded-[10px] object-cover"
                                />
                                <button
                                    onClick={() => handleMediaClick(media)}
                                    className="absolute bottom-2 right-2 text-white bg-black/50 p-2 rounded-full"
                                >
                                    <FaExpand className="w-4 h-4" />
                                </button>
                            </>
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
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ThirdPartOfPortfolio;
