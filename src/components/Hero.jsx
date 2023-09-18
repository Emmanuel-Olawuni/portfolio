import React from "react";
import MotionText from "./MotionText";
import Name from "./Name";
import Button from "./Button";



const Hero = () => {
  return (
    <div className="h-[40vh] md:h-[80vh] relative flex hero justify-center md:mt-10  items-center w-full p-4 ">
      <div className="flex flex-col gap-[30px] md:gap-[2em]">
        <div className=" ">
          <Name />
        </div>
        <div>
          <MotionText>
            <p className=" typing text-[20px] font-bold text-blue-500 font-Poppins">
              Full Stack Web Developer
            </p>
          </MotionText>
        </div>

        <div >
          <Button />
        </div>

   
      </div>

    </div>
  );
};

export default Hero;
