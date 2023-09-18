'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
    transition={{ease: 'easeIn'}}
    
      className={`w-8 h-8 bg-blue-500 rounded-full absolute pointer-events-none z-50 mix-blend-difference`}
      style={{ top: `${mousePosition.y - 5}px`, left: `${mousePosition.x -5 }px` }}
    ></motion.div>
  );
};

export default CustomCursor;
