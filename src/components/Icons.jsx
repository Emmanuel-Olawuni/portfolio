"use client";
import React from "react";
import { IconsList } from "@/utils/Icons";
import { motion } from "framer-motion";
const Icons = () => {
  return (
    <>
      <div className=" flex gap-[10px] flex-wrap overflow-hidden items-center justify-center">
        {IconsList.map((x) => (
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0, transition: { duration: 0.9 } }}
            transition={{ duration: 0.9, delay: (0.02 * x.id) / 8 }}
            whileHover={{ scale: 1.1 }}
            className=" p-3 flex  justify-center items-center bg-blue-900 text-green rounded-[5px] gap-[6px] shadow-md shadow-green"
            key={x.id}
          >
            <x.icon color={x.color} size={30} />
            <p className=" font-normal text-[14px]">{x.title}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Icons;
