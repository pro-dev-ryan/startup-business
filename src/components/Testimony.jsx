import React from "react";

const Testimony = ({ data }) => {
  return (
    <div>
      <div className="background w-[456px] h-[300px] relative hover:text-white transition-all duration-100">
        <span className="absolute top-[8%] left-[8%] qoute w-10 h-10"></span>
        <p className="w-11/12 p-10 pt-20">{data?.comment}</p>
      </div>
      {/* client */}
      <div>
        <div>
          <img src={data?.image} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Testimony;
