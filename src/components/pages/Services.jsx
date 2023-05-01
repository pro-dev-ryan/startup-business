import React from "react";
import Button from "../Button";
import icon from "../../assets/services/icon.svg";
import icon2 from "../../assets/services/icon2.svg";
import icon3 from "../../assets/services/icon3.svg";
import icon4 from "../../assets/services/icon4.svg";

const Services = () => {
  const datas = [
    {
      id: 1,
      icons: icon,
      title: "Eneterpreneurs",
      subtitle:
        "Lorem Ipsum is simply for dummy text of the print and type setting industry.",
    },
    {
      id: 2,
      icons: icon2,
      title: "Business Plan",
      subtitle:
        "Lorem Ipsum is simply for dummy text of the print and type setting industry.",
    },
    {
      id: 3,
      icons: icon3,
      title: "Capital Markets",
      subtitle:
        "Lorem Ipsum is simply for dummy text of the print and type setting industry.",
    },
    {
      id: 4,
      icons: icon4,
      title: "Startups",
      subtitle:
        "Lorem Ipsum is simply for dummy text of the print and type setting industry.",
    },
  ];
  return (
    <div className="bg-[#e5e5e500]">
      <div className="section-plate lg:space-y-7 section-gap">
        <div className="">
          <p className="sub-head">HOW CAN WE HELP</p>
          <div className="flex flex-col items-center lg:items-start gap-5 lg:gap-0 lg:flex-row justify-between">
            <h3 className="title w-full text-center md:text-left lg:w-[36%]">
              special outstanding services for startups business
            </h3>
            <div className="flex lg:items-end">
              <Button text={"View all Services"} />
            </div>
          </div>
          {/* service card */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 lg:gap-8 py-16">
          {datas.map((data, key) => (
            <div
              key={key}
              className={`bg-[#ffffff] ${
                data.id % 2 != 0 ? "" : "md:relative md:-top-10"
              } shadow-xl shadow-[#D2D9E059]  p-12 space-y-5 border-4 border-transparent transition-border duration-200 hover:border-b-primary hover:border-b-4 rounded-sm`}
            >
              <img src={data?.icons} alt="" />
              <h4 className="font-semibold text-xl text-secondary">
                {data?.title}
              </h4>
              <p className="text-neutral font-medium text-lg">
                {data?.subtitle}
              </p>
              <button className="text-lg font-medium">
                Learn More <i class="fa-sharp fa-solid fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
