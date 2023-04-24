import React from "react";
import Image from "../assets/Hero/image.png";
import outer from "../assets/Hero/big-circle.svg";
import inner from "../assets/Hero/small-circle.svg";
const HeroLeft = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative z-10 ">
        {/* outer circle */}
        <span className="absolute w-11/12 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10">
          <img src={outer} alt="big-circle" className="" />
        </span>
        {/* outer circle  end*/}
        {/* inner circle */}
        <span className="absolute w-9/12 xl:top-40 md:top-16 lg:top-28 left-1/2 -translate-x-1/2 -z-10">
          <img src={inner} alt="small-circle" />
        </span>
        {/* inner circle end */}

        <img
          className="relative md:w-10/12 lg:w-11/12 md:-right-3 lg:right-8 xl:right-11 -bottom-0"
          src={Image}
          alt="business-man"
        />
      </div>
    </div>
  );
};

export default HeroLeft;
