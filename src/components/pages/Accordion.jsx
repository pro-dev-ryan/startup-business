import React from "react";
import Button from "../Button";
import Faq from "../Faq";

const Accordion = () => {
  const datas = [
    {
      title: "Professional & Experienced Team Member",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters opposed to using",
    },
    {
      title: "Our Main Goal How To Success In IT Business",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters opposed to using",
    },
    {
      title: "Our Main Goal How To Success In IT Business",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters opposed to using,",
    },
    {
      title: "Our Main Goal How To Success In IT Business",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters opposed to using",
    },
  ];
  return (
    <div className="bg-[#F7F9FC] py-[140px] section-div">
      <div className="flex items-center first:items-start lg:gap-28 section-plate">
        <div className="">
          <p className="sub-head pb-[10px]">answer to</p>
          <h3 className="title pb-[25px]">frequently Asked questions</h3>
          <p className="neutral-text pb-[40px]">
            There are many variation of passage of lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
          <Button text={"Contact Us"} />
        </div>
        <div className="flex flex-col gap-[30px]">
          {datas.map((data, i) => (
            <Faq key={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
