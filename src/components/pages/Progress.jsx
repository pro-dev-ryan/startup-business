import React from "react";
import image from "../../assets/skills/Image.png";
const Progress = () => {
  const datas = [
    {
      name: "Business Consulting",
      percentage: "74%",
    },
    {
      name: "Business Startup",
      percentage: "86%",
    },
    {
      name: "Marketing Analysis",
      percentage: "48%",
    },
  ];
  return (
    <div className="pt-[140px]">
      <div className="flex bg-[#F7F9FC]">
        {/* Image section */}
        <div className="w-full relative lg:w-1/2">
          <img src={image} alt="image" />
        </div>
        {/* Text content */}
        <div className="w-full pt-[137px] pb-[137px] xl:w-1/2 md:flex items-center">
          <div className="ml-[100px] w-[560px]">
            <p className="sub-head">our skill</p>
            <h3 className="title w-[532px] pb-[25px]">
              we aim to share knowledge, attract talent & startups
            </h3>
            <p className="neutral-text pb-[50px]">
              We design & build brand, campaigns & digital projects for business
              large & small with customer experiences.
            </p>
            {/* Progress Bar */}

            <div className="pb-[30px]">
              <div className="flex justify-between space-y-[10px]">
                <p className="neutral-text text-secondary">
                  Business Consulting
                </p>
                <p className="neutral-text text-secondary">74%</p>
              </div>
              <div className="bar">
                <span className={`bar-active w-[74%]`}></span>
              </div>
            </div>
            <div className="pb-[30px]">
              <div className="flex justify-between space-y-[10px]">
                <p className="neutral-text text-secondary">Business Startup</p>
                <p className="neutral-text text-secondary">86%</p>
              </div>
              <div className="bar">
                <span className={`bar-active w-[86%]`}></span>
              </div>
            </div>
            <div className="pb-[30px]">
              <div className="flex justify-between space-y-[10px]">
                <p className="neutral-text text-secondary">
                  Marketing Analysis
                </p>
                <p className="neutral-text text-secondary">48%</p>
              </div>
              <div className="bar">
                <span
                  className={`bar-active w-[48%] border-r border-primary`}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
