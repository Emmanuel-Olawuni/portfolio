"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ children }) => {
  const [cursor, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorvariant] = useState("default");

  const mousemove = (e) =>
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });

  useEffect(() => {
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);
  const variants = {
    default: {
      x: cursor.x - 10,
      y: cursor.y - 10,
      height: 20,
      width: 20,
      backgroundColor: "#001f3f",
      mixBlendMode: "screen",
    },
    text: {
      height: 90,
      width: 90,
      x: cursor.x - 45,
      y: cursor.y - 45,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
  };
  const textEnter = () => {
    setCursorvariant("text");
  };
  const textLeave = () => {
    setCursorvariant("default");
  };
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
        delay: 0.2,
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
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        
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
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className="cursor rounded-full fixed top-0 left-0 pointer-events-none z-50  mix-blend-difference"
      ></motion.div>
    </>
  );
};

export default AnimatedText;
