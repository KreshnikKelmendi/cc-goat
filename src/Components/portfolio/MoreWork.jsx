import React, { useRef, useState } from "react";
import { data } from "../Works/works";
import { motion, useMotionTemplate, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const categories = ["All", ...new Set(data.map((item) => item.category))];

const MoreWork = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const filteredData =
    activeCategory === "All" ? data : data.filter((item) => item.category === activeCategory);

  const handleCategoryClick = (category) => {
    setIsLoading(true);
    setActiveCategory(category);
    setShowCategories(false); // Hide dropdown when a category is selected

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="px-5 lg:px-16 pt-12">
      {/* Category Selection for Mobile */}
      <div className="lg:hidden mb-6">
        <p className="text-white text-left pb-2 font-custom2 text-[12px] ml-[2px]">Select Category</p>
        <button
          onClick={() => setShowCategories(!showCategories)}
          className="px-4 py-3 w-full bg-[#A055FF] text-white rounded-[18px] font-custom flex justify-between items-center text-lg"
        >
          {activeCategory} {/* This will display the selected category */}
          {showCategories ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        <AnimatePresence>
          {showCategories && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 bg-gray-200 rounded-lg shadow-md overflow-hidden"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`w-full text-left px-4 py-3 transition-all duration-300 text-black text-lg font-medium ${activeCategory === category ? "bg-[#6BECD0]" : "hover:bg-gray-300"
                    }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Category Buttons for Large Devices */}
      <div className="hidden lg:flex justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 lg:w-[230px] lg:hover:rotate-3 hover:duration-500 ease-out hover:shadow-md hover:scale-105 rounded-[18px] text-xl uppercase tracking-[0.5px] font-custom1 lg:text-2xl 2xl:text-3xl transition-all duration-300 ${activeCategory === category
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
        <div className="grid gap-x-8 gap-y-0 lg:gap-x-24 lg:gap-y-8 grid-cols-2 lg:grid-cols-3">
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
                className={`object-cover rounded-3xl w-full h-[17ch] lg:h-[50vh] transition-transform duration-300 group-hover:scale-100 group-hover:rounded-[3xl] ${isVideoLoading ? "opacity-0" : "opacity-100"
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
              className="object-cover rounded-3xl w-full h-[17ch] lg:h-[50vh] transition-all duration-300 group-hover:w-[100%] group-hover:rounded-[3xl]"
            />
          )}
        </div>
        <div className="mt-2 lg:mt-4 px-2 pb-4 text-white">
          <p className="text-xl lg:text-4xl font-custom1 tracking-[0.6px] text-left">{item.title}</p>
          <p className="text-sm font-custom2 text-left">{item.category}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default MoreWork;
