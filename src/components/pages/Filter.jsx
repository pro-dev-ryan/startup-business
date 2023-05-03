import React from "react";
import Button from "../Button";
import image from "../../assets/portfolio/Image.png";
import image1 from "../../assets/portfolio/Image 1.png";
import image2 from "../../assets/portfolio/Image 2.png";
import image3 from "../../assets/portfolio/Image 3.png";
import Portfolio from "../Portfolio";

const Filter = () => {
  const datas = [
    {
      id: "01",
      category: "developement",
      image: image,
      name: "Quillow Learning Platform Dashboard",
      title: "Web Development",
    },
    {
      id: "02",
      category: "developement",
      image: image1,
      name: "Database Product Platform Dashboard",
      title: "Web Development",
    },
    {
      id: "03",
      category: "design",
      image: image2,
      name: "Beskit Website Design",
      title: "design",
    },
    {
      id: "04",
      category: "branding",
      image: image3,
      name: "Bestkit Software Solutions",
      title: "Web Development",
    },
  ];
  return (
    <div className="section-plate pt-[140px]">
      <p className="sub-head text-center pb-[10px]">portfolio works</p>
      <h3 className="title text-center pb-[70px]">
        Some of My Latest Projects
      </h3>
      <div className="flex items-center justify-between">
        <div className="md:flex gap-2 md:gap-3 lg:gap-5 xl:gap-7">
          <p className="neutral-text text-secondary font-semibold">
            Filter by:
          </p>
          <ul className="flex gap-2 md:gap-3 lg:gap-5 xl:gap-[30px]">
            <li>
              <button className="portfolio-btn">All</button>
            </li>
            <li>
              <button className="portfolio-btn">Development</button>
            </li>
            <li>
              <button className="portfolio-btn">Design</button>
            </li>
            <li>
              <button className="portfolio-btn">Branding</button>
            </li>
          </ul>
        </div>
        <Button text={"See More Work"} />
      </div>
      <div className="grid grid-cols-2 md:gap-3 lg:gap-5 xl:gap-[70px] pt-[55px] justify-items-stretch">
        {datas.map((data) => (
          <Portfolio key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
