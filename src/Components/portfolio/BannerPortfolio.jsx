import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PortfolioCard from "./PortfolioCard";

const BannerPortfolio = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  // Animation variants for glitch
  const glitchVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, duration: 1 },
    },
  };

  return (
    <div className="text-center h-fit py-10 overflow-x-hidden">
      {/* Animated Text */}
      <motion.div
        ref={ref}
        className="relative mt-10 w-full text-[#A055FF] font-custom1"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={glitchVariant}
      >
        {/* Glitch Animation for "CAPRA" */}
        <motion.div
          className="relative block text-9xl lg:text-[250px] 2xl:text-[250px] leading-[110px] lg:leading-[203px] glitch-text"
        >
          CAPRA
        </motion.div>

        {/* Glitch Animation for "CREATIVE" */}
        <motion.div
          className="relative block text-9xl lg:text-[250px] 2xl:text-[250px] leading-[110px] lg:leading-[203px] glitch-text"
        >
          CREATIVE
        </motion.div>

        {/* Glitch Animation for "PORTFOLIO" */}
        <motion.div
          className="relative block text-9xl lg:text-[250px] 2xl:text-[250px] leading-[110px] lg:leading-[203px] glitch-text"
        >
          PORTFOLIO
        </motion.div>
      </motion.div>

      <p className="text-[18px] text-[#DAFF00] font-custom2">
        Explore our work and discover why is the agency you’ll want on your team.
      </p>

      <PortfolioCard />
    </div>
  );
};

export default BannerPortfolio;
