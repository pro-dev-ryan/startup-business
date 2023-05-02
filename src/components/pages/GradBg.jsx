import React from "react";
import Button from "../Button";
const GradBg = () => {
  return (
    <div className="section-div g">
      <div className="section-plate py-[140px]">
        <div className="w-1/2">
          <h2 className="title pb-[25px]">
            Bestkit Develope Creative Solutions for Companies of All Niches
          </h2>
          <p className="neutral-text pb-[50px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <Button text={"Get Started Now"} />
        </div>
        <div className="md:w-1/2"></div>
      </div>
    </div>
  );
};

export default GradBg;
