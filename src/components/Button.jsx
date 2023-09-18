"use client";
import React from "react";
import { motion } from "framer-motion";

const Button = () => {
  return (
    <>
      <div className="border border-blue-500 flex  rounded-md w-[100px] bg-blue-700">
        <motion.button
          initial={{ x: "-10px", y: "-5px" }}
          whileHover={{ x: 0, y: 0 }}
          transition={{ duration: 0.9 }}
          className=" text-green font-semibold w-[100px] font-Inter rounded-md p-3 border border-blue-500 bg-blue-500 shadow-md"
        >
          <a href="https://drive.google.com/file/d/1GZqPSBjIrap8Tbl2qQMryozVqR4W7KXp/view" target="_blank">Resume</a>
        </motion.button>
      </div>
    </>
  );
};

export default Button;
