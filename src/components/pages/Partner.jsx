import React from "react";
import icon from "../../assets/partners/icon.svg";
import icon2 from "../../assets/partners/icon2.svg";
import icon3 from "../../assets/partners/icon3.svg";
import icon4 from "../../assets/partners/icon4.svg";
import icon5 from "../../assets/partners/icon5.svg";
import icon6 from "../../assets/partners/icon6.svg";

const Partner = () => {
  const datas = [
    {
      icons: icon,
      name: "Google",
    },
    {
      icons: icon2,
      name: "Amazon",
    },
    {
      icons: icon3,
      name: "Airbnb",
    },
    {
      icons: icon4,
      name: "spotify",
    },
    {
      icons: icon5,
      name: "Intrax",
    },
    {
      icons: icon6,
      name: "Noxis",
    },
  ];
  return (
    <div className="section-gap">
      <div className="hidden md:flex flex-col justify-center items-center gap-10 section-plate">
        <p className="uppercase text-lg text-secondary text-medium">
          proud marketing <span className="text-primary">Partner</span> with
        </p>
        <div className="flex w-full items-center justify-between">
          {datas.map((data, i) => (
            <img key={i} src={data.icons} alt={data.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
