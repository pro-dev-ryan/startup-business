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
    <div className="flex flex-col md:flex-row section-plate section-gap">
      {/* Image section */}
      <div className="w-full lg:w-1/2">
        <img src={image} alt="image" />
      </div>
      {/* Text content */}
      <div className="w-full pt-2 md:w-1/2 section-plate md:flex justify-center items-center bg-[#F7F9FC]">
        <div className="text-gap mx-2 md:mx-4 lg:mx-6 xl:mx-16">
          <p className="sub-head">our skill</p>
          <h3 className="title">
            we aim to share knowledge, attract talent & startups
          </h3>
          <p className="neutral-text">
            We design & build brand, campaigns & digital projects for business
            large & small with customer experiences.
          </p>
          {/* Progress Bar */}

          <div className="text-gap">
            <div className="flex justify-between">
              <p className="neutral-text text-secondary">Business Consulting</p>
              <p className="neutral-text text-secondary">74%</p>
            </div>
            <div className="bar">
              <span className={`bar-active w-[74%]`}></span>
            </div>
          </div>
          <div className="text-gap">
            <div className="flex justify-between">
              <p className="neutral-text text-secondary">Business Startup</p>
              <p className="neutral-text text-secondary">86%</p>
            </div>
            <div className="bar">
              <span className={`bar-active w-[86%]`}></span>
            </div>
          </div>
          <div className="text-gap">
            <div className="flex justify-between">
              <p className="neutral-text text-secondary">Marketing Analysis</p>
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
  );
};

export default Progress;
