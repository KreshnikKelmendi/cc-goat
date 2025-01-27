import React from 'react';
import { motion } from 'framer-motion';
import { AiFillSound, AiOutlineSound } from 'react-icons/ai';

const FirstPartOfPortfolio = ({ first, soundStates, toggleSound, workID }) => {
    // Determine if we should use a 2-column layout based on workID
    // const isTwoColumnLayout = workID === '2' || workID === '5' || workID === '6';

    return (
        <div className="w-full relative px-3 lg:px-[25px] gap-4 mt-12">
            <div  className={`grid gap-4 ${
                workID === '9' ? 'lg:grid-cols-1' : 'lg:grid-cols-2'
            }`}>
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
                                    className="w-full h-full lg:h-[60ch] object-cover rounded-[10px]"
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
                            <img src={media} alt="" className="w-full h-full lg:h-[60ch] rounded-[10px] object-cover" />
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FirstPartOfPortfolio;
