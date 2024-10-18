"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';

export function TextAnimation({ text = 'Let me show you where we can go' }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <p
      ref={ref}
      className="text-[85px] lg:text-[150px] font-custom1 lg:w-[498px] leading-[70px] lg:leading-[122.01px]"
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
  );
}
