import React from "react";
import SectionHeader from "./SectionHeader";
import Icons from "./Icons";

import { IconsList } from "@/utils/Icons";
const About = () => {
  return (
    <>
      <SectionHeader
        details={"You want to know who a React-Laravel Dev is?."}
        heading={"About Us"}
      >
        <div className=" flex flex-col justify-center items-center md:w-2/3 text-center m-auto gap-[2rem]">
          <div>
            <p className=" font-Poppins">
              I am Emmanuel Olawuni, and I am passionate about building
              exceptional web and mobile applications. With a solid foundation
              in React, Laravel, and an array of other frameworks, I bring your
              digital ideas to life. <br /> <br /> My mission is to create software
              that not only meets your needs but also leaves a lasting
              impression. I am more than a developer; <br /> <br /> I am a problem solver
              and a creative thinker. My portfolio showcases a collection of
              projects that highlight my dedication to innovation, usability,
              and performance. I am not just here to write code; I am here to
              craft experiences. Let us work together to make your next digital
              endeavor a resounding success.
              <br />
              Explore my portfolio, and let us turn your vision into reality.
            </p>
          </div>
        <Icons />
        </div>
      </SectionHeader>
    </>
  );
};

export default About;
