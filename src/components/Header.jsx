import React from "react";
import Logo from "../../public/high-resolution-logo.png";
import Image from "next/image";
import {BiLogoLinkedin} from 'react-icons/bi'
import { BsGithub } from "react-icons/bs";
import { LuTwitter } from "react-icons/lu";
import { FiMail } from "react-icons/fi";


import SideBar from "./SideBar";




const Header = () => {
  return (
    <>
      <div className="flex justify-around items-center p-3">
        <div className=" flex items-center gap-[10px]">
          <Image
            src={Logo}
            alt="Logo"
            width={50}
            height={50}
            className=" object-contain"
          />
        </div>
        <div className="w-[200px] socialicons flex gap-[10px] items-center justify-around text-blue-500">
          <a href="https://github.com/Emmanuel-Olawuni" target="_blank">
            <BsGithub size={20} />
          </a>
          <a href="https://twitter.com/Dev_Emmanuel_" target="_blank">
            <LuTwitter size={20} />
          </a>
          <a href="https://www.linkedin.com/in/emmanuelolawuni/" target="_blank">
                    <BiLogoLinkedin size={20} />
                  </a>
          <a href="mailto:emmanuelolawuni2001@gmail.com" target="_blank">
            <FiMail size={20} />
          </a>
        </div>
       
       <SideBar/> 
    
      </div>
    </>
  );
};

export default Header;
