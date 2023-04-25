import React from "react";
import Button from "../Button";
import icon from "../../assets/services/icon.svg";
import icon2 from "../../assets/services/icon2.svg";
import icon3 from "../../assets/services/icon3.svg";
import icon4 from "../../assets/services/icon4.svg";

const Services = () => {
  return (
    <div className="bg-[#E5E5E5]">
      <div className="section-plate">
        <div>
          <p className="text-primary text-sm lg:text-base xl:text-lg font-semibold">
            HOW CAN WE HELP
          </p>
          <div className="flex justify-between">
            <h2 className="text-secondary text-xl md:text-2xl lg:text-3xl font-semibold ">
              special outstanding services for startups business
            </h2>
            <Button text={"View all Services"} />
          </div>
          {/* service card */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 lg:gap-7">
          <div className="bg-white shadow p-12 space-y-5">
            <img src={icon} alt="" />
            <h4 className="font-semibold text-xl text-secondary">
              Eneterpreneurs
            </h4>
            <p className="text-neutral font-medium text-lg">
              Lorem Ipsum is simply for dummy text of the print and type setting
              industry.
            </p>
            <button className="text-lg font-medium">
              Learn More <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
