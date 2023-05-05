import React, { useState } from "react";
import Tabs from "../Tabs";
import image from "../../assets/mission-vision/image.png";

const MissionVision = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="section-plate flex justify-between pb-[190px]">
      {/* Image-Content */}
      <div>
        <div className="w-[525px] bg-slate-500 md:relative image-bg z-10 md:top-1/2 md:-translate-y-1/2 left-[10%]">
          <img className="w-full" src={image} alt="A woman holding books" />
          <div className="absolute image-div bottom-[30px] right-[30px] flex items-center bg-[#36CD77] w-[210px] h-[84px] rounded">
            <h2 className="pl-5 pr-[10px]">25+</h2>
            <p>years of experience</p>
          </div>
        </div>
      </div>
      {/* Text-content */}
      <div className="w-full my-auto pl-4 md:w-1/2">
        <p className="sub-head pb-[10px]">Learn about us</p>
        <h2 className="title pb-[25px]">
          Brainstorming Sessions Churning Out New Ideas
        </h2>
        <p className="neutral-text pb-[40px] w-[645px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <div className="tab-container">
          <div className="bg-bgColor p-1 space-x-[2px]  lg:p-2 w-fit font-semibold rounded-sm tabs">
            <button
              onClick={() => setActive(!active)}
              className={`tab-btn ${active ? "btn-active" : ""}`}
            >
              Our Mission
            </button>
            <button
              onClick={() => setActive(!active)}
              className={`tab-btn ${!active ? "btn-active" : ""}`}
            >
              Our Vision
            </button>
          </div>
          <div className="pt-[30px] tab-panes">
            <Tabs active={active} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
