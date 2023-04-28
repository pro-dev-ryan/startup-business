import React from "react";
import Tabs from "../Tabs";
import image from "../../assets/mission-vision/image.png";

const MissionVision = () => {
  return (
    <div className="section-plate flex flex-col gap-2 md:flex-row section-gap">
      {/* Image-Content */}
      <div className="w-full md:w-1/2">
        <div className="w-full md:w-[80%] lg:w-[80%] bg-slate-500 md:relative image-bg z-10 md:top-1/2 md:-translate-y-1/2 left-[10%]">
          <img className="w-full" src={image} alt="image" />
        </div>
      </div>
      {/* Text-content */}
      <div className="w-full  md:w-1/2 text-gap">
        <p className="sub-head">Learn about us</p>
        <h2 className="title">Brainstorming Sessions Churning Out New Ideas</h2>
        <p className="neutral-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <div className="bg-bgColor p-1 lg:p-2 w-fit font-semibold rounded-sm">
          <button className="tab-btn">Our Mission</button>
          <button className="tab-btn">Our Vision</button>
        </div>
        <Tabs />
      </div>
    </div>
  );
};

export default MissionVision;
