import React from "react";

const Button = ({ text, show }) => {
  const btn = {
    show: show,
  };
  return (
    <button
      className={`lg:flex ${btn.show} items-center gap-3 outline-none py-2 px-6 bg-primary text-white rounded-sm`}
    >
      {text}
      <i className="fa-solid fa-chevron-right"></i>{" "}
    </button>
  );
};

export default Button;
