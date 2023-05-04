import React from "react";
import NumberCounter from "number-counter";

const ProfileCard = ({ data }) => {
  return (
    <div className="profiles">
      <div className="border-0 pt-[62px] pb-[59px] my-auto flex flex-col md:flex-row items-center text-center gap-5 justify-center shadow-sm shadow-neutral md:shadow-none w-[276px]">
        <img src={data?.image} alt={data?.alt} />
        <div>
          <NumberCounter
            end={data?.number}
            delay={4}
            className="font-semibold text-secondary text-2xl lg:text-3xl xl:text-4xl increment"
          >
            {data?.number}
          </NumberCounter>
          <div className="text-sm lg:text-lg text-neutral">{data?.name}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
