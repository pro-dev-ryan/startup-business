import React from "react";
import image from "../../assets/skills/Image.png";
import ProgressBar from "@ramonak/react-progress-bar";
const Progress = () => {
  const datas = [
    {
      name: "Business Consulting",
      percentage: "74%",
      percent: 74,
    },
    {
      name: "Business Startup",
      percentage: "86%",
      percent: 86,
    },
    {
      name: "Marketing Analysis",
      percentage: "48%",
      percent: 48,
    },
  ];
  return (
    <div className="pt-[140px]">
      <div className="flex bg-[#F7F9FC]">
        {/* Image section */}
        <div className="w-full relative lg:w-1/2">
          <img src={image} alt="Happy Team" />
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

            {datas.map((data, i) => (
              <div className="pb-[30px]" key={i}>
                <div className="flex justify-between space-y-[10px]">
                  <p className="neutral-text text-secondary">{data?.name}</p>
                  <p className="neutral-text text-secondary">
                    {data?.percentage}
                  </p>
                </div>
                <div className="bar">
                  <ProgressBar
                    completed={data?.percent}
                    animateOnRender={true}
                    height="4px"
                    isLabelVisible={false}
                    bgColor="#008AFF"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
