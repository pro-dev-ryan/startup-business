import React from "react";
import icon1 from "../../assets/Profile/icon-1.svg";
import icon2 from "../../assets/Profile/icon-2.svg";
import icon3 from "../../assets/Profile/icon-3.svg";
import icon4 from "../../assets/Profile/icon-4.svg";
import ProfileCard from "../ProfileCard";
const Profile = () => {
  const datas = [
    {
      image: icon1,
      alt: "rocket",
      number: 834,
      name: "Startups",
    },
    {
      image: icon2,
      alt: "projects",
      number: 372,
      name: "Projects",
    },
    {
      image: icon3,
      alt: "award",
      number: 14,
      name: "Award",
    },
    {
      image: icon4,
      alt: "partners",
      number: 43,
      name: "Partners",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:border-y border-lightBorder section-plate section-gap">
      {datas.map((data, i) => (
        <ProfileCard data={data} key={i} />
      ))}
    </div>
  );
};

export default Profile;
