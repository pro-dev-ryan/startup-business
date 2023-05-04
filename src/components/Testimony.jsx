import React from "react";
import Background from "../assets/testimonials/Background";

const Testimony = ({ data }) => {
  return (
    <div>
      <div className="h-[266px] relative z-[11] hover:text-white">
        <div className="absolute text-[#F7F9FC] hover:text-primary z-[-5]">
          <Background />
        </div>
        <span className="absolute top-[8%] left-[8%] qoute w-10 h-10"></span>
        <p className="w-11/12 p-10 pt-[95px]">{data?.comment}</p>
      </div>
      {/* client */}
      <div className="flex gap-5 items-center pl-12 pt-5">
        <div className="w-12">
          <img src={data?.image} className="w-full" alt="avatar" />
        </div>
        <div>
          <h4 className="text-2xl text-secondary font-semibold">
            {data?.clientName}
          </h4>
          <p className="text-lg text-primary font-medium leading-none">
            {data?.occupation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
