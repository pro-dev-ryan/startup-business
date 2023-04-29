import React from "react";

const ProfileCard = ({ data }) => {
  return (
    <div className="border-0 py-5  md:py-10 md:border-r last:justify-end last:border-r-0 border-lightBorder w-full rounded lg:h-1/2 my-auto flex flex-col md:flex-row items-center text-center gap-5 justify-center  first:justify-start shadow-sm shadow-neutral md:shadow-none">
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
