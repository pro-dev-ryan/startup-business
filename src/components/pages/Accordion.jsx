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
    <div className="bg-[#F7F9FC]">
      <div className="flex items-center first:items-start section-gap lg:gap-28 section-plate">
        <div className="">
          <p className="sub-head">answer to</p>
          <h3 className="title mb-5">frequently Asked questions</h3>
          <p className="neutral-text mb-5">
            There are many variation of passage of lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
          <Button text={"Contact Us"} />
        </div>
        <div className="flex flex-col gap-9">
          {datas.map((data, i) => (
            <Faq key={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
