import React from "react";

import Dribble from "../assets/footer/Dribble.jsx";
import Fb from "../assets/footer/Fb.jsx";
import Github from "../assets/footer/Github.jsx";
import Twitter from "../assets/footer/Twitter.jsx";

const Footer = () => {
  const menus = [
    "Services",
    "Pricing",
    "Contact",
    "Careers",
    "Works",
    "Resources",
    "News",
    "Privacy Policy"
  ];
  return (
    <div className="bg-secondary">
      <div className="section-plate">
        <div className="flex items-center justify-between gap-40 py-36">
          <div>
            <h2 className="font-semibold text-[32px] text-white leading-[38.41px] mb-7">
              Best<span className="text-primary">kit</span>
            </h2>
            <p className="neutral-text">
              Bring a best development experience to designers and developers by
              offer the tools needed for having a quicks and most web projects.
            </p>
          </div>
          <div>
            <h2 className="footer-titles w-full">about company</h2>
            <div style={{ columnCount: 2 }}>
              <ul className="whitespace-nowrap">
                {menus.map((m, i) => (
                  <li key={i}>
                    <a className="neutral-text hover:text-white" href="/">{m}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h2 className="footer-titles">Account</h2>
            <ul className="flex flex-col neutral-text">
              <a className="neutral-text hover:text-white" href="/">Profile</a>
              <a className="neutral-text hover:text-white" href="/">Setting</a>
              <a className="neutral-text hover:text-white" href="/">Billing</a>
              <a className="neutral-text hover:text-white" href="/">Notifications</a>
            </ul>
          </div>
          <div>
            <h2 className="footer-titles">Get In Touch</h2>
            <ul className="neutral-text">
              <p>Sun-Fri: 9:00-5:00</p>
              <p>info@example.com</p>
              <p>0834 3849 9200</p>
              <p className="w-44">16/A New York, USA</p>
            </ul>
          </div>
        </div>
        <div className="w-full h-[2px] bg-white bg-opacity-20 divide-solid"></div>
        <div className="flex justify-between items-center">
          <div className="flex gap-5 items-center py-5">
            <a href="/" className="text-grayText hover:text-primary">
              <Fb />
            </a>
            <a href="/" className="text-grayText hover:text-primary">
              <Dribble />
            </a>
            <a href="/" className="text-grayText hover:text-primary">
              <Github />
            </a>
            <a href="/" className="text-grayText hover:text-primary">
              <Twitter />
            </a>
          </div>
          <p className="neutral-text"> &copy; bestkit. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
