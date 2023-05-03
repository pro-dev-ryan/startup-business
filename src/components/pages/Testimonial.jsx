import React from "react";
import Testimony from "../Testimony";
import avatar from "../../assets/testimonials/images/Avatar.png";
import avatar2 from "../../assets/testimonials/images/Avatar 1.png";
import avatar3 from "../../assets/testimonials/images/Avatar 2.png";
import Left from "../../assets/testimonials/Left";

const Testimonial = () => {
  const datas = [
    {
      clientName: "Jhon Smith",
      occupation: "UI/UX",
      image: avatar,
      comment:
        "Lorem Ipsum is a simply dummy text of an the printing and type settings for has been the industry's standard dumy text the ever since unknown printer.",
    },
    {
      clientName: "Md Shamim Hossain",
      occupation: "Web Developer",
      image: avatar2,
      comment:
        "Lorem Ipsum is a simply dummy text of an the printing and type settings for has been the industry's standard dumy text the ever since unknown printer.",
    },
    {
      clientName: "Jessica Lerona",
      occupation: "Product Manager",
      image: avatar3,
      comment:
        "Lorem Ipsum is a simply dummy text of an the printing and type settings for has been the industry's standard dummy text the ever since unknown printer.",
    },
  ];
  return (
    <div className="section-plate py-[140px]">
      <div className="flex justify-between items-end pb-[64px]">
        <div className="">
          <p className="sub-head pb-[10px]">testimonial</p>
          <h3 className="title lg:w-[60%]">
            See what others have to say about us
          </h3>
        </div>
        <div className="flex gap-2 md:gap-3 xl:gap-5 items-center">
          <button
            href="/"
            className="hover:text-white text-primary bg-[#EBF6FF] hover:bg-primary w-12 h-12 rounded-sm transition-all duration-200"
          >
            <Left />
          </button>
          <button className="arrow-right w-12 h-12 rounded-sm transition-all duration-200"></button>
        </div>
      </div>
      <div className="flex justify-between">
        {datas.map((data, i) => (
          <Testimony data={data} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
