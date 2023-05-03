import React, { useState } from "react";
import Minus from "../assets/FAQ/Minus";
import Plus from "../assets/FAQ/Plus";

const Faq = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`p-[35px] w-[757px] bg-white transition-all duration-100  overflow-hidden ${
        isOpen ? "h-[206px]" : "h-[99px]"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex justify-between items-center w-full`}
        >
          <h4 className="collapsed-title">{data?.title}</h4>
          <span className="inline-block">{isOpen ? <Minus /> : <Plus />}</span>
        </button>
      </div>
      <div>
        <p className="neutral-text pt-[28px]">{data?.text}</p>
      </div>
    </div>
  );
};

export default Faq;
