import React from "react";
import Button from "../Button";
import HeroLeft from "../HeroLeft";

const Hero = () => {
  return (
    <div className="w-full bg-bgColor">
      <div className="section-plate flex flex-row items-center gap-[18px]">
        {/* hero text / left part */}
        <div className="w-full md:w-1/2">
          <p className="text-primary flex gap-[10px] hero-span pl-[3px]">
            <span className="h-[1.5px] my-auto w-[100px] bg-primary"></span> one
            of the best solutions
          </p>
          <h1 className="hero-text text-secondary pb-[35px]">
            Creating Services For Your{" "}
            <span className="text-primary">Startup</span> Business
          </h1>
          <p className="hero-sub pb-[55px]">
            We’re a Digital Marketing Agency in Bangladesh, made up of a group
            of passionate individuals.
          </p>
          <div>
            <form action="">
              <div
                className="mail-div rounded-sm w-11/12 lg:w-10/12 flex justify-between bg-white border-2 border-transparent transition-all duration-250 p-2"
              >
                <div className="flex relative w-full h-[61px]  max-h-[71px]">
                  <span className="absolute left-[30px] top-1/2 -translate-y-1/2">
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33366 1.33325H16.667C17.5837 1.33325 18.3337 2.08325 18.3337 2.99992V12.9999C18.3337 13.9166 17.5837 14.6666 16.667 14.6666H3.33366C2.41699 14.6666 1.66699 13.9166 1.66699 12.9999V2.99992C1.66699 2.08325 2.41699 1.33325 3.33366 1.33325Z"
                        stroke="#8492A7"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.3337 3L10.0003 8.83333L1.66699 3"
                        stroke="#8492A7"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="pl-[65px] w-full outline-none"
                    placeholder="Enter Your Mail"
                  />
                  <div className="absolute right-0">
                    <Button text={"Get Started"} />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* hero image / right part */}
        <div className="hidden md:block md:relative md:w-1/2 left-[100px]">
          <HeroLeft />
        </div>
      </div>
    </div>
  );
};

export default Hero;
