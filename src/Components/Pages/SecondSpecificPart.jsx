import React from 'react';
import { motion } from 'framer-motion';
import { AiFillSound, AiOutlineSound } from 'react-icons/ai';

const SecondSpecificPart = ({ secondSpecific, soundStates, toggleSound }) => {
    return (
        <div className="w-full relative px-3 lg:px-[25px] gap-4">
            <div className="grid gap-4 grid-cols-1">
                {secondSpecific?.map((media, index) => (
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
                                    className="w-full h-[449px] object-cover rounded-[10px]"
                                    autoPlay
                                    playsInline
                                    loop
                                    muted={!soundStates[index]}
                                >
                                    <source src={media} type="video/mp4" />
                                </video>
                                <button onClick={() => toggleSound(index)} className="absolute bottom-2 left-1 text-white">
                                    {soundStates[index] ? (
                                        <AiFillSound className="w-6 h-6" />
                                    ) : (
                                        <AiOutlineSound className="w-6 h-6" />
                                    )}
                                </button>
                            </>
                        ) : (
                            <img src={media} alt="" className="w-full h-[449px] rounded-[10px] object-cover" />
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SecondSpecificPart;
