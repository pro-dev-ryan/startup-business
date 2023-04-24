import React from "react";

const Button = ({ text, show }) => {
  const btn = {
    show: show,
  };
  return (
    <button
      className={`lg:flex ${btn.show} items-center outline-none py-1 lg:py-2 px-4 lg:px-6 bg-primary text-white rounded-sm text-sm lg:text-lg font-semibold`}
    >
      {text}
      <i className="fa-solid fa-chevron-right pl-2"></i>{" "}
    </button>
  );
};

export default Button;
