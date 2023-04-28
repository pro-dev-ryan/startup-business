import React from "react";
import checkbox from "../assets/mission-vision/checkbox.svg";

const Tabs = () => {
  return (
    <div className="text-gap neutral-text">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet velit
        amet at suscipit accumsan orci. Luctus dolor vestibulum id duis dolor
        luctus dui ac pretium. Sed donec posuere porta tortor posuere enim ut.
      </p>
      <ul className="text-gap text-secondary">
        <li className="flex gap-2">
          <img src={checkbox} alt="checkbox" /> Pixel perfect & crafted to meet
          standards
        </li>
        <li className="flex gap-2">
          <img src={checkbox} alt="checkbox" /> We love what we do & who we do
          it for
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
