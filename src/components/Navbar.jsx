import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [hide, setHide] = useState(false);
  const menus = (
    <ul
      className={`flex gap-10 flex-col lg:flex-row bg-secondary lg:bg-transparent w-full lg:w-fit h-fit py-5 lg:py-0 text-lg absolute lg:static top-14 md:top-16 text-white lg:text-secondary lg:text- text-center left-1/2 -translate-x-1/2 lg:translate-x-0`}
    >
      <li>
        <a href="#" className="link-style">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="link-style">
          About
        </a>
      </li>
      <li>
        <a href="#" className="link-style">
          Services
        </a>
      </li>
      <li>
        <a href="#" className="link-style">
          Case Study
        </a>
      </li>
      <li>
        <a href="#" className="link-style">
          Blog
        </a>
      </li>
    </ul>
  );

  return (
    <div className="bg-bgColor sticky top-0 z-[999]">
      <nav className="flex items-center justify-between md:py-5 lg:py-5 section-plate">
        <div>
          <a href="#" className="text-[32px] text-[#222D39] font-bold">
            Best<span className="text-[#008AFF]">kit</span>
          </a>
        </div>
        <div className={`${hide ? "flex flex-col" : "hidden"}`}>{menus}</div>
        <div className="hidden lg:flex gap-10">{menus}</div>
        <Button text={"Contact Us"} show={"hidden"} />
        <button className="lg:hidden" onClick={() => setHide(!hide)}>
          <i className="fa-solid fa-bars text-3xl"></i>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
