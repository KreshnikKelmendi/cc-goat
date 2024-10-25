"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';

export function TextAnimation({ text = 'CAPRA CREATIVE' }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
    <p>Explore our work and discover why </p>
    <p
      ref={ref}
      className="text-[85px] 2xl:text-[300px] font-custom1 leading-[70px] lg:leading-[122.01px]"
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </p>
    </>
  );
}
