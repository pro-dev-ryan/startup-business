import React from "react";

const Button = ({ text, show }) => {
  const btn = {
    show: show,
  };
  return (
    <button
      className={`lg:flex ${btn.show} items-center outline-none pt-[18px] pb-[15px] px-[30px] 
       bg-primary text-white rounded text-sm lg:text-lg font-semibold hover:bg-[#0072d6]`}
    >
      {text}
      <i className="fa-solid fa-chevron-right pl-[15px]"></i>{" "}
    </button>
  );
};

export default Button;
