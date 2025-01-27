import React, { useRef, useState } from "react";
import { data } from "../Works/works";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import CapraIcon from "./CapraIcon";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const categories = ["All", ...new Set(data.map((item) => item.category))];

const MoreWork = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  const filteredData =
    activeCategory === "All" ? data : data.filter((item) => item.category === activeCategory);

  const handleCategoryClick = (category) => {
    setIsLoading(true);
    setActiveCategory(category);

    // Simulate a loader with a 2-second delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="px-5 lg:px-16 pt-12">
      {/* Category Buttons */}
      <div className="grid grid-cols-1 lg:flex  justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-3 lg:py-2 hover:rotate-3 hover:duration-500 button-shadow1 ease-out hover:shadow-md hover:scale-105 rounded-lg text-xl uppercase tracking-[0.5px] font-custom1 lg:text-3xl transition-all duration-300 ${
              activeCategory === category
                ? "bg-[#A055FF] text-white"
                : "bg-gray-200 hover:bg-[#6BECD0] hover:text-black"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Loader */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
        </div>
      ) : (
        // Filtered Items Grid
        <div className="grid gap-8 lg:gap-24 grid-cols-2 lg:grid-cols-3">
          {filteredData.map((item) => (
            <div key={item.id} className="relative group overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <TiltCard item={item} />
              </motion.div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const TiltCard = ({ item }) => {
  const ref = useRef(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isVideo = (url) => url.endsWith(".mp4");

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative overflow-hidden pt-6 lg:pt-10"
    >
      <Link onClick={handleClick} to={`/works/${item.id}`} className="block relative">
        <div className="group relative">
          {isVideo(item.main) ? (
            <>
              {isVideoLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                  <div className="loader border-t-4 border-white w-8 h-8 rounded-full animate-spin"></div>
                </div>
              )}
              <video
                src={item.main}
                alt={item.title}
                className={`object-cover rounded-3xl w-full h-[15ch] lg:h-[50vh] transition-transform duration-300 group-hover:scale-110 group-hover:rounded-none ${
                  isVideoLoading ? "opacity-0" : "opacity-100"
                }`}
                muted
                loop
                autoPlay
                playsInline
                onLoadedData={() => setIsVideoLoading(false)}
              />
            </>
          ) : (
            <img
              src={item.main}
              alt={item.title}
              className="object-cover rounded-3xl w-full h-[15ch] lg:h-[50vh] transition-transform duration-300 group-hover:scale-110 group-hover:rounded-none"
            />
          )}
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-black h-full bg-opacity-60 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-10">
          <div className="flex flex-col justify-end items-center h-full p-4">
            <div className="absolute top-3">
              <CapraIcon />
            </div>
            <p className="text-xl lg:text-3xl font-custom1 text-white">{item.title}</p>
            <p className="text-sm font-custom2 text-white">{item.category}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default MoreWork;
