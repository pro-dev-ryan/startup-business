import React from "react";

const Portfolio = ({ data }) => {
  return (
    <div>
      <div>
        <img className="w-full" src={data?.image} alt="image" />
      </div>
      <p className="neutral-text pt-[25px] pb-[5px]">{data?.title}</p>
      <a
        href="/"
        className="text-2xl font-semibold leading-[36px] text-secondary hover:text-primary"
      >
        {data?.name}
      </a>
    </div>
  );
};

export default Portfolio;
