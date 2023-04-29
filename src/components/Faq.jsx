import React, { useState } from "react";

const Faq = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`p-9 text-gap bg-white transition-all duration-100 ${
        isOpen ? "h-[190px]" : "h-[99px]"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <h4 className="collapsed-title">{data?.title}</h4>
        <span className="flex justify-center items-center lg:mt-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={` ${
              isOpen
                ? "w-[14px] h-[14px] collapsed"
                : "w-[20px] h-[20px] non-collapsed"
            }`}
          ></button>
        </span>
      </div>
      <div>
        <p className={`${!isOpen ? "invisible" : "visible"} neutral-text`}>
          {data?.text}
        </p>
      </div>
    </div>
  );
};

export default Faq;
