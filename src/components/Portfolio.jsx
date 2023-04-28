import React from "react";

const Portfolio = ({ data }) => {
  return (
    <div>
      <div>
        <img className="w-full" src={data?.image} alt="image" />
      </div>
      <p className="neutral-text">{data?.title}</p>
      <a
        href="/"
        className="text-2xl font-semibold text-secondary hover:text-primary"
      >
        {data?.name}
      </a>
    </div>
  );
};

export default Portfolio;
