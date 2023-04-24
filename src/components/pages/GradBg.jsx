import React from "react";
import laptop from "../../assets/bgGrad/laptop.png";
import Button from "../Button";
const GradBg = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center bg-[#f7f9fc] md:g section-plate">
      <div className="w-full md:w-1/2 space-y-5 mx-6">
        <h3 className="text-xl lg:text-3xl xl:text-4xl text-secondary font-semibold">
          Bestkit Develope Creative Solutions for Companies of All Niches
        </h3>
        <p className="text-sm lg:text-lg text-neutral font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <Button text={"Get Started Now"} />
      </div>
      <div className="md:w-1/2 md:relative grad">
        <img src={laptop} alt="laptop-user" />
      </div>
    </div>
  );
};

export default GradBg;
