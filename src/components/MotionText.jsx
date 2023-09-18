'use client'
import React from 'react'
import {motion} from 'framer-motion'



const MotionText = ({ children }) => {
  const TextVar = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.9,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: "5vh" }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
          },
        }}
      
      >
        <div className=" overflow-hidden">
          <motion.div
            variants={TextVar}
            initial="initial"
            animate="animate"
            className=""
          >
            {children}
          </motion.div>
        </div>
      </motion.h2>
    </>
  );
};

export default MotionText