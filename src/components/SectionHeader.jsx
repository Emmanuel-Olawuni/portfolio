"use client";
import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
    
      duration: 0.4,
    },
  },
};
const SectionHeader = ({ children, details, heading }) => {
  return (
    <motion.div variants={sectionVariants} initial="hidden" whileInView="open" viewport='once'>
      <motion.div className=" bg-[#d2d2d2] relative md:p-4 overflow-hidden mt-2 font-Inter ">
        <motion.h3
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", mass: 4, stiffness: 100, duration: 2 }}
          className="uppercase section-text  font-extrabold text-transparent font-Inter opacity-30"
        >
          {heading}
        </motion.h3>
        <motion.p
         
          className="hidden md:block capitalize font-light font-Poppins text-blue-500 text-center relative md:absolute  top-1/2 right-2/3 translate-x-1/2 -translate-y-1/2 text-[18px] md:text-2xl underline underline-offset-2 w-full"
        >
          {details}
        </motion.p>
      </motion.div>

      <div className="mt-3 px-4 py-2">{children}</div>
    </motion.div>
  );
};

export default SectionHeader;
