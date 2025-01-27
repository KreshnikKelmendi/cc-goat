import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ColorCard = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const colorArray = [
    "001219", "005f73", "0a9396", "94d2bd", "e9d8a6", "ee9b00", "ca6702", "bb3e03", "ae2012", "9b2226"
  ];
  
  const extendedColorArray = [
    { name: "Design", hex: "001219" },
    { name: "Creative", hex: "005f73" },
    { name: "Illustration", hex: "0a9396" },
    { name: "Social Media", hex: "94d2bd" },
    { name: "Animation", hex: "e9d8a6" },
    { name: "3D Design", hex: "ee9b00" },
    { name: "Web Design", hex: "ca6702" },
    { name: "Web Development", hex: "bb3e03" },
    { name: "Photography", hex: "ae2012" },
    { name: "Advertising", hex: "9b2226" },
  ];

  const spacerX = 16;

  const updateMousePos = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePos);
    return () => window.removeEventListener("mousemove", updateMousePos);
  }, []);

  return (
    <div className="flex items-center justify-start overflow-x-auto py-20 px-16">
      {colorArray.map((color, index) => {
        const deltaX = mousePos.x - index * spacerX;
        const value = Math.hypot(deltaX, 0); // Calculate distance for smooth transition
        const y = value < 160 ? (value / 160) * 50 : 0; // Adjust Y position based on distance
        const opacity = Math.min(1, (1 - value / 160) * 0.8);

        return (
          <motion.div
            key={index}
            className={`relative p-2 rounded-t-2xl shadow-lg text-white w-56 h-[22vh] group cursor-pointer`}
            whileHover={{
              scale: 1.1, // Increase size on hover
              opacity: 1,
              y: [-10, 0, 10], // Smooth wave movement
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            style={{
              marginLeft: index === 0 ? 0 : "-18px",
              transformOrigin: "center", // Ensure the center for scaling
              y: y, // Apply Y position based on mouse distance
              opacity: 1, // Apply opacity based on distance
              backgroundColor: `#${color}`, // Apply the background color always
            }}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <motion.p
                className="text-xl font-bold opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300 ease-in-out"
                style={{ transition: "opacity 0.5s ease-out" }}
              >
                {extendedColorArray[index].name}
              </motion.p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ColorCard;
