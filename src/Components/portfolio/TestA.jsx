import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { data } from "../Works/works";

export const TestA = () => {
  return (
    <section className="relative grid py-16 lg:py-16 2xl:py-36 w-full place-content-center overflow-hidden">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px] font-custom1">
        CAPRA CREATIVE<span className="text-[#DAFF00] text-7xl">.</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { triggerOnce: true, margin: "0px 0px -50px 0px" });

  return (
    <motion.div 
      ref={containerRef} 
      className="absolute inset-0 z-10 flex items-center justify-center pt-6 lg:pt-0"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {data?.map((item, index) => (
        <Card
          key={index}
          containerRef={containerRef}
          src={item.cover}
          alt="Example image"
          rotate={index % 2 === 0 ? "-6deg" : "8deg"}
          index={index}
          className="absolute w-36 h-52 lg:w-fit lg:h-60 2xl:h-72 object-cover"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </motion.div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className, index }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(window.getComputedStyle(el).getPropertyValue("z-index"));
      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{ top, left, rotate, zIndex }}
      className={twMerge("drag-elements absolute w-48 bg-neutral-200 p-1 pb-4", className)}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
    />
  );
};
