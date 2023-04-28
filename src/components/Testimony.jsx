import React from "react";

const Testimony = ({ data }) => {
  return (
    <div>
      <div className="background w-[420px] h-[275px] relative hover:text-white transition-all duration-100">
        <span className="absolute top-[8%] left-[8%] qoute w-10 h-10"></span>
        <p className="w-11/12 p-10 pt-20">{data?.comment}</p>
      </div>
      {/* client */}
      <div className="flex gap-5 items-center pl-12">
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
