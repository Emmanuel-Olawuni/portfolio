"use client";
import React from "react";
import { motion } from "framer-motion";

const Name = () => {
  const PathVar = {
    initial: {
      pathLength: 0,
      opacity: 0
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeIn'
      }
    },
  
  };
  const SvgVar = {
    initial: {
        opacity: 0
    },
    animate:{
        opacity: 1
    },
    transition:{
        duration: 2,
    
    }
  }
  return (
    <>
      <motion.svg
      variants={SvgVar}
      initial='initial'
      animate='animate'
      
        viewBox="0 0 740 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className='h-[102px] w-[250px] md:h-[102px] md:w-[740px]'
      >
        <mask
          id="path-1-outside-1_1_6"
          maskUnits="userSpaceOnUse"
          x="0.0909119"
          y="0.909088"
          width="740"
          height="101"
          fill="black"
        >
          <rect
            fill="white"
            x="0.0909119"
            y="0.909088"
            width="740"
            height="101"
          />
          <motion.path  variants={PathVar} initial='initial' animate='animate'  d="M3.09091 97V3.90909H65.8182V20.1364H22.7727V42.3182H62.5909V58.5455H22.7727V80.7727H66V97H3.09091Z" />
          <motion.path variants={PathVar} initial='initial' animate='animate'  d="M81.4659 3.90909H105.739L131.375 66.4545H132.466L158.102 3.90909H182.375V97H163.284V36.4091H162.511L138.42 96.5455H125.42L101.33 36.1818H100.557V97H81.4659V3.90909Z" />
          <motion.path variants={PathVar} initial='initial' animate='animate' d="M198.591 3.90909H222.864L248.5 66.4545H249.591L275.227 3.90909H299.5V97H280.409V36.4091H279.636L255.545 96.5455H242.545L218.455 36.1818H217.682V97H198.591V3.90909Z" />
          <motion.path variants={PathVar} initial='initial' animate='animate' d="M331.761 97H310.67L342.807 3.90909H368.17L400.261 97H379.17L355.852 25.1818H355.125L331.761 97ZM330.443 60.4091H380.261V75.7727H330.443V60.4091Z" />
          <motion.path variants={PathVar} initial='initial' animate='animate' d="M489.33 3.90909V97H472.33L431.83 38.4091H431.148V97H411.466V3.90909H428.739L468.92 62.4545H469.739V3.90909H489.33Z" />
          <motion.path variants={PathVar} initial='initial' animate='animate' d="M563.091 3.90909H582.773V64.3636C582.773 71.1515 581.152 77.0909 577.909 82.1818C574.697 87.2727 570.197 91.2424 564.409 94.0909C558.621 96.9091 551.879 98.3182 544.182 98.3182C536.455 98.3182 529.697 96.9091 523.909 94.0909C518.121 91.2424 513.621 87.2727 510.409 82.1818C507.197 77.0909 505.591 71.1515 505.591 64.3636V3.90909H525.273V62.6818C525.273 66.2273 526.045 69.3788 527.591 72.1364C529.167 74.8939 531.379 77.0606 534.227 78.6364C537.076 80.2121 540.394 81 544.182 81C548 81 551.318 80.2121 554.136 78.6364C556.985 77.0606 559.182 74.8939 560.727 72.1364C562.303 69.3788 563.091 66.2273 563.091 62.6818V3.90909Z" />
          <motion.path variants={PathVar} initial='initial' animate='animate' d="M598.966 97V3.90909H661.693V20.1364H618.648V42.3182H658.466V58.5455H618.648V80.7727H661.875V97H598.966Z" />
          <motion.path variants={PathVar} initial='initial' animate='animate' d="M677.341 97V3.90909H697.023V80.7727H736.932V97H677.341Z" />
        </mask>
        <motion.path variants={PathVar} initial='initial' animate='animate'
          d="M3.09091 97V3.90909H65.8182V20.1364H22.7727V42.3182H62.5909V58.5455H22.7727V80.7727H66V97H3.09091Z"
          stroke="#001F3F"
          stroke-width="6"
          mask="url(#path-1-outside-1_1_6)"
        />
        <motion.path variants={PathVar} initial='initial' animate='animate'
          d="M81.4659 3.90909H105.739L131.375 66.4545H132.466L158.102 3.90909H182.375V97H163.284V36.4091H162.511L138.42 96.5455H125.42L101.33 36.1818H100.557V97H81.4659V3.90909Z"
          stroke="#001F3F"
          stroke-width="6"
          mask="url(#path-1-outside-1_1_6)"
        />
        <motion.path variants={PathVar} initial='initial' animate='animate'
          d="M198.591 3.90909H222.864L248.5 66.4545H249.591L275.227 3.90909H299.5V97H280.409V36.4091H279.636L255.545 96.5455H242.545L218.455 36.1818H217.682V97H198.591V3.90909Z"
          stroke="#001F3F"
          stroke-width="6"
          mask="url(#path-1-outside-1_1_6)"
        />
        <motion.path variants={PathVar} initial='initial' animate='animate'
          d="M331.761 97H310.67L342.807 3.90909H368.17L400.261 97H379.17L355.852 25.1818H355.125L331.761 97ZM330.443 60.4091H380.261V75.7727H330.443V60.4091Z"
          stroke="#001F3F"
          stroke-width="6"
          mask="url(#path-1-outside-1_1_6)"
        />
        <motion.path variants={PathVar} initial='initial' animate='animate'
          d="M489.33 3.90909V97H472.33L431.83 38.4091H431.148V97H411.466V3.90909H428.739L468.92 62.4545H469.739V3.90909H489.33Z"
          stroke="#001F3F"
          stroke-width="6"
          mask="url(#path-1-outside-1_1_6)"
        />
        <motion.path variants={PathVar} initial='initial' animate='animate'
          d="M563.091 3.90909H582.773V64.3636C582.773 71.1515 581.152 77.0909 577.909 82.1818C574.697 87.2727 570.197 91.2424 564.409 94.0909C558.621 96.9091 551.879 98.3182 544.182 98.3182C536.455 98.3182 529.697 96.9091 523.909 94.0909C518.121 91.2424 513.621 87.2727 510.409 82.1818C507.197 77.0909 505.591 71.1515 505.591 64.3636V3.90909H525.273V62.6818C525.273 66.2273 526.045 69.3788 527.591 72.1364C529.167 74.8939 531.379 77.0606 534.227 78.6364C537.076 80.2121 540.394 81 544.182 81C548 81 551.318 80.2121 554.136 78.6364C556.985 77.0606 559.182 74.8939 560.727 72.1364C562.303 69.3788 563.091 66.2273 563.091 62.6818V3.90909Z"
          stroke="#001F3F"
          stroke-width="6"
          mask="url(#path-1-outside-1_1_6)"
        />
        <motion.path variants={PathVar} initial='initial' animate='animate'
          d="M598.966 97V3.90909H661.693V20.1364H618.648V42.3182H658.466V58.5455H618.648V80.7727H661.875V97H598.966Z"
          stroke="#001F3F"
          stroke-width="6"
          mask="url(#path-1-outside-1_1_6)"
        />
        <motion.path variants={PathVar} initial='initial' animate='animate'
          d="M677.341 97V3.90909H697.023V80.7727H736.932V97H677.341Z"
          stroke="#001F3F"
          stroke-width="6"
          mask="url(#path-1-outside-1_1_6)"
        />
      </motion.svg>
    </>
  );
};

export default Name;
