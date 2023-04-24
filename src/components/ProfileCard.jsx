import React from "react";

const ProfileCard = ({ data }) => {
  return (
    <div className="lg:border-r border-lightBorder w-full border py-10 rounded lg:h-1/2 my-auto flex items-center gap-5 justify-center shadow-sm shadow-secondary md:shadow-none">
      <img src={data?.image} alt={data?.alt} />
      <div>
        <h4 className="font-semibold text-secondary text-2xl lg:text-3xl xl:text-4xl ">
          {data?.number}
        </h4>
        <p className="text-sm lg:text-lg text-neutral">{data?.name}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
