import React from "react";

const Speciality = () => {
  return (
    <div className="bg-[#F7F9FC]">
      <div className="section-plate">
        <p className="text-sm lg:text-lg text-primary font-medium">
          Our core values & principles
        </p>
        <h3 className="text-xl lg:text-3xl xl:text-4xl font-semibold text-secondary">
          What Makes Us Unique From Others
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card Plate style */}
          <div className="p-16 flex flex-col gap-4 md:gap-5 lg:gap-10 justify-start items-center">
            <div>
              <img src="" alt="" />
            </div>
            <h4 className="font-semibold text-lg md:text-xl lg:text-2xl text-secondary">
              Clean & Elegant Design
            </h4>
            <p className="text-neutral text-sm lg:text-lg">
              Lorem ipsum dolor sit amet, consectetu adipiscing elit eque dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
