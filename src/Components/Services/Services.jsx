import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// Sample data for services
const servicesData = [
  {
    title: "Branding",
    description: "Where creativity meets precision, and bold ideas become unforgettable brands. We’re not just another agency—we’re your partners in crafting stories that resonate, designs that captivate, and brands that roar with personality (or should we say... bleat?). ",
    backgroundColor: "#A055FF",
  },
  {
    title: "Web Design",
    description: "Where creativity meets precision, and bold ideas become unforgettable brands. We’re not just another agency—we’re your partners in crafting stories that resonate, designs that captivate, and brands that roar with personality (or should we say... bleat?). ",
    backgroundColor: "#FCF5F2",
  },
  {
    title: "3D Design",
    description: "Where creativity meets precision, and bold ideas become unforgettable brands. We’re not just another agency—we’re your partners in crafting stories that resonate, designs that captivate, and brands that roar with personality (or should we say... bleat?). ",
    backgroundColor: "#A055FF",
  },
  {
    title: "Campaign",
    description: "Where creativity meets precision, and bold ideas become unforgettable brands. We’re not just another agency—we’re your partners in crafting stories that resonate, designs that captivate, and brands that roar with personality (or should we say... bleat?). ",
    backgroundColor: "#FCF5F2",
  },
  {
    title: "Animation",
    description: "Where creativity meets precision, and bold ideas become unforgettable brands. We’re not just another agency—we’re your partners in crafting stories that resonate, designs that captivate, and brands that roar with personality (or should we say... bleat?). ",
    backgroundColor: "#FCF5F2",
  },
  {
    title: "Illustration",
    description: "Where creativity meets precision, and bold ideas become unforgettable brands. We’re not just another agency—we’re your partners in crafting stories that resonate, designs that captivate, and brands that roar with personality (or should we say... bleat?). ",
    backgroundColor: "#6BECD0",
  },
  {
    title: "Development",
    description: "Where creativity meets precision, and bold ideas become unforgettable brands. We’re not just another agency—we’re your partners in crafting stories that resonate, designs that captivate, and brands that roar with personality (or should we say... bleat?). ",
    backgroundColor: "#FCF5F2",
  },
  {
    title: "TV ADS",
    description: "Where creativity meets precision, and bold ideas become unforgettable brands. We’re not just another agency—we’re your partners in crafting stories that resonate, designs that captivate, and brands that roar with personality (or should we say... bleat?). ",
    backgroundColor: "#6BECD0",
  },
];

// ServiceItem component to handle each service card
const ServiceItem = ({ service, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: index % 2 === 0 ? -50 : 50, // Alternate animation direction
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1, // Staggered delay based on index
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="p-4 border-[1px] border-black border-t-0 border-b-0 py-12"
      style={{ backgroundColor: service.backgroundColor }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      <p className="font-custom1 text-[36px] mb-2">{service.title}</p>
      <p className="font-custom2 text-[12px] leading-[14.4px] text-[#181919]">{service.description}</p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="w-full mt-32 lg:px-[60px]">
      <div className="w-full text-center lg:text-[100px] font-custom1 mb-10">
        OUR SERVICES
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {servicesData.map((service, index) => (
          <ServiceItem key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
