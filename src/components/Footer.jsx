import React from "react";
import Logo from "../../public/logo-no-background.svg";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { LuTwitter } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
import { BiLogoLinkedin } from "react-icons/bi";


const date = new Date().getFullYear();
const Footer = () => {
  return (
    <div className=" flex items-center justify-around bg-blue-900 flex-col p-2 gap-[15px] md:flex-row">
      <div>
        <Image src={Logo} height={50} width={50} alt="logo" />
      </div>
      <div className="flex items-center text-green gap-[20px]  justify-around">
      <a href="https://github.com/Emmanuel-Olawuni" target="_blank">
            <BsGithub size={20} />
          </a>
          <a href="https://twitter.com/Dev_Emmanuel_" target="_blank">
            <LuTwitter size={20} />
          </a>
          <a href="https://www.linkedin.com/in/emmanuelolawuni/" target="_blank">
                    <BiLogoLinkedin size={20}/>
                  </a>
          <a href="mailto:emmanuelolawuni2001@gmail.com" target="_blank">
            <FiMail size={20} />
          </a>
      </div>
      <div className="text-green font-semibold text-[16px]">&copy; {date}</div>
    </div>
  );
};

export default Footer;
