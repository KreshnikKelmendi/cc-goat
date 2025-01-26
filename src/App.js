import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BiPalette } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Components/Footer/Footer";
import PortfolioPage from "./Components/Pages/PortfolioPage";
import WorkPage from "./Components/Pages/WorkPage";
import SingleCategory from "./Components/portfolio/SingleCategory";
import SingleWorkPortfolio from "./Components/portfolio/SingleWorkPortfolio";
import AboutPortfolio from "./Components/portfolio/AboutPortfolio";

function App() {
  const [showPalette, setShowPalette] = useState(false);
  const colors = [
    { hex: "#181919" }, // Red
    { hex: "#4d79ff" }, // Blue
    { hex: "#4dff88" }, // Green
    { hex: "#ffd34d" }, // Yellow
    { hex: "#8b4dff" }, // Purple
  ];

  const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color; // Change background
    setShowPalette(false); // Close palette
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:workID" element={<SingleCategory />} />
          <Route path="/workito/:workID" element={<SingleWorkPortfolio />} />
        </Routes>
        <Footer />

        {/* AboutPortfolio Component */}
        <div className="fixed top-3 right-3 z-50">
          <AboutPortfolio />
        </div>

        {/* Color Palette */}
        <div className="fixed right-6 bottom-6 z-50 flex flex-col items-center gap-2">
          {/* Colors */}
          <AnimatePresence>
            {showPalette && (
              <motion.div
                className="flex flex-col items-center gap-2"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
              >
                {colors.map((color) => (
                  <motion.div
                    key={color.hex}
                    className="w-4 h-4 hover:w-5 hover:h-5 duration-300 ease-in-out rounded-full cursor-pointer shadow"
                    style={{ backgroundColor: color.hex }}
                    onClick={() => changeBackgroundColor(color.hex)}
                    variants={itemVariants}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Palette Icon */}
          <div
            className="p-2 bg-gray-950 text-white rounded-full shadow cursor-pointer hover:bg-gray-700"
            onClick={() => setShowPalette(!showPalette)}
          >
            <BiPalette size={28} />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
