import React from "react";

import Dribble from "../assets/footer/Dribble.jsx";
import Fb from "../assets/footer/Fb.jsx";
import Github from "../assets/footer/Github.jsx";
import Twitter from "../assets/footer/Twitter.jsx";

const Footer = () => {
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
          <div className="w-1/2">
            <h2 className="footer-titles w-full">about company</h2>
            <div className="flex justify-between gap-5">
              <ul className="flex flex-col neutral-text">
                <a href="/">Services</a>
                <a href="/">Pricing</a>
                <a href="/">Contact</a>
                <a href="/">Careers</a>
              </ul>
              <ul className="flex flex-col neutral-text">
                <a href="/">Works</a>
                <a href="/">Resources</a>
                <a href="/">News</a>
                <a href="/">Privacy Policy</a>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="footer-titles">Account</h2>
            <ul className="flex flex-col neutral-text">
              <a href="/">Profile</a>
              <a href="/">Setting</a>
              <a href="/">Billing</a>
              <a href="/">Notifications</a>
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
            <a href="/" className="text-grayText hover:text-primary bg-primary">
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
