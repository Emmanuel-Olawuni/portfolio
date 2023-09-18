'use client'
import React from "react";
import { portfolioDetails } from "@/utils/portfolio";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
const PortfolioCard = () => {
  return (
    <>
      <div className=" flex flex-col gap-[20px]">
        {portfolioDetails.map((x, index) => (
          <motion.div
          initial={{opacity: 0, scale: 0}}
          
          whileInView={{opacity: 1, scale: 1}}
          viewport ='once'
          transition={{type: 'tween' ,ease: 'easeOut' , easings: 0.3 , delay: 0.05, duration: 0.2}}
            key={x.id}
            className={`relative flex w-2/3 m-auto justify-center items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            } flex-col-reverse  gap-[10px]`}
          >
            <div className=" bg-blue-900 relative  px-3 py-5 rounded-md shadow-2xl flex flex-col gap-[10px] justify-around h-auto w-auto md:h-[250px]  md:w-[700px]">
              <h4 className=" text-white font-normal font-Poppins text-[16px] underline underline-offset-4 text-opacity-50">
                Featured Project
              </h4>
              <h3 className=" font-bold text-white font-Inter  text-[18px] opacity-80">
                {x.title}
              </h3>
              <p className=" text-white opacity-70  text-[14px] font-medium font-Poppins">
                {x.desc}
              </p>
              <div className=" flex gap-[8px] flex-wrap">
                {x.tag.map((y, i) => (
                  <div
                    key={i}
                    className=" border border-green rounded-[5px] font-Poppins shadow-md shadow-green text-white text-opacity-90 px-2 py-1 hover:bg-green hover:text-white hover:rounded-md hover:shadow-none hover:scale-[1.1] transition-all duration-75 ease-in"
                  >
                    {y}
                  </div>
                ))}
              </div>
              <div className=" absolute right-3 top-3">
                <a href={x.link} target="_blank">
                  {" "}
                  <BiLinkExternal color="white" size={20} />
                </a>
              </div>
            </div>
            <div className=" object-contain hover:grayscale">
              <Image src={x.image} priority height={500} width={600} alt={x.title} />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default PortfolioCard;
