import React from "react";
import icon from "../../assets/cards-icon/icon1.svg";
import icon2 from "../../assets/cards-icon/icon2.svg";
import icon3 from "../../assets/cards-icon/icon3.svg";
import icon4 from "../../assets/cards-icon/icon4.svg";
import icon5 from "../../assets/cards-icon/icon5.svg";
import icon6 from "../../assets/cards-icon/icon6.svg";
import bg from "../../assets/cards-icon/bg.svg";
import Button from "../Button";

const Speciality = () => {
  const datas = [
    {
      icon: icon,
      title: "Clean & Elegent Design",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetu adipiscing elit eque dolor.",
    },
    {
      icon: icon2,
      title: "100% Responsive Layout",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetu adipiscing elit eque dolor.",
    },
    {
      icon: icon3,
      title: "Awsome Line Icon",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetu adipiscing elit eque dolor.",
    },
    {
      icon: icon4,
      title: "Unlimited Component Library",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetu adipiscing elit eque dolor.",
    },
    {
      icon: icon5,
      title: "Smooth UI Interaction",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetu adipiscing elit eque dolor.",
    },
    {
      icon: icon6,
      title: "24/7 Customer Support",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetu adipiscing elit eque dolor.",
    },
  ];
  return (
    <div className="bg-[#F7F9FC] py-[140px]">
      <div className="text-center section-plate">
        <p className="sub-head text-center pb-[10px]">
          Our core values & principles
        </p>
        <h3 className="text-xl lg:text-3xl xl:text-4xl font-semibold text-secondary pb-[70px]">
          What Makes Us Unique From Others
        </h3>
        <div className="grid grid-cols-1 gap-2 lg:gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {/* Card Plate style */}
          {datas.map((data, i) => (
            <div
              key={i}
              className="p-[50px] bg-white flex flex-col justify-start text-left"
            >
              <div className="w-full relative pb-[30px]">
                <img className="absolute z-10" src={bg} alt="circle" />
                <img
                  className="relative z-20 top-[25%] left-[5%]"
                  src={data.icon}
                  alt="icon"
                />
              </div>
              <h5 className="font-semibold text-xl lg:text-2xl pb-[15px] text-left text-secondary leading-[36px]">
                {data.title}
              </h5>
              <p className="text-neutral text-sm lg:text-base xl:text-lg">
                {data.subTitle}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center pt-[55px]">
          <Button text={"Get In Touch"} />
        </div>
      </div>
    </div>
  );
};

export default Speciality;
