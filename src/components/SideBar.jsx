"use client";
import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { BsGithub, BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { LuTwitter } from "react-icons/lu";
import { MenuContext } from "@/utils/MenuContext";
import { BiLogoLinkedin } from "react-icons/bi";

const Navlinks = [
  {
    id: 1,
    title: "About",
    link: "#about",
  },
  {
    id: 2,
    title: "Portfolio",
    link: "#portfolio",
  },
  {
    id: 3,
    title: "Contact",
    link: "#contact",
  },
  {
    id: 4,
    title: "Resume",
    link: "https://drive.google.com/file/d/1GZqPSBjIrap8Tbl2qQMryozVqR4W7KXp/view",
  },
];
const menuVar = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.4,
      ease: [0.52, 0, 0.9, 0.5],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      ease: [0.82, 1, 0.36, 1],
      delay: 0.05,
    },
  },
};
const linkVar = {
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
      ease: [0, 0.55, 0.45, 1],
    },
  },
};
const containerVar = {
  initial: {
    transition: {
      staggerChildren: 0.9,
      staggerDirection: -1,
    },
  },
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0,
      staggerDirection: 1,
    },
  },
};
const SideBar = () => {
  const { Open, setOpen } = useContext(MenuContext);
  return (
    <>
      <div
        className=" border border-green rounded-[5px] p-1.5 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <HiMenuAlt3 size={20} />
      </div>
      <AnimatePresence>
        {Open && (
          <motion.div
            variants={menuVar}
            initial="initial"
            animate="animate"
            exit="exit"
            className="modal w-full md:w-2/3 h-full right-0 fixed top-0  z-50 origin-top bg-blue-900 "
          >
            <div className="relative h-[100%] flex flex-col md:flex-row justify-around items-center">
              <div
                className="absolute right-[4rem] top-[4rem] cursor-pointer "
                onClick={() => setOpen(false)}
              >
                <RxCross1 color="white" strokeWidth={3} />
              </div>

              <motion.div
                transition={{
                  delayChildren: 0.3,
                  staggerChildren: 0.09,
                }}
              >
                <motion.ul
                  variants={containerVar}
                  initial="initial"
                  animate="animate"
                  exit="initial"
                  className=" flex flex-col items-center justify-center gap-[20px]  text-green text-[30px] uppercase font-bold"
                >
                  {Navlinks.map((x) => (
                    <div className=" overflow-hidden" key={x.id}>
                      <motion.li
                        key={x.id}
                        variants={linkVar}
                        transition={{
                          delay: 0.05 * x.id,
                        }}
                        
                        whileHover={{
                          backgroundColor: "#3d9970",
                          padding: "2px",
                          color: "#001f3f",
                        }}
                      
                      >
                        <a href={`${x.link}`} onClick={()=>setOpen(false)}>{x.title}</a>
                      </motion.li>
                    </div>
                  ))}
                </motion.ul>
              </motion.div>

              <div className=" flex  flex-col justify-center gap-[20px] items-center">
                <div className=" flex">
                  <BsTelephone size={20} color="white" />{" "}
                  <p className="text-white text-[16px]">: +234164109066</p>
                </div>
                <div className="flex gap-[20px] items-center">
                  <a href="https://github.com/Emmanuel-Olawuni" target="_blank">
                    <BsGithub size={20} className=" text-green" />
                  </a>
                  <a href="https://twitter.com/Dev_Emmanuel_" target="_blank">
                    <LuTwitter size={20} className=" text-green"/>
                  </a>
                  <a href="https://www.linkedin.com/in/emmanuelolawuni/" target="_blank">
                    <BiLogoLinkedin size={20} className=" text-green"/>
                  </a>
                  <a
                    href="mailto:emmanuelolawuni2001@gmail.com"
                    target="_blank"
                  >
                    <FiMail size={20} className=" text-green"/>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;
