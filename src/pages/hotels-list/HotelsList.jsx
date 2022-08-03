import React from "react";
import Navbar from "../../components/navbar/Navbar";
import HotelsBanner from "../../assets/hotelsDropDown.jpg";
import { BackgrounOverLay } from "../../components/hero/HeroStyled";

const HotelsList = () => {
  console.log(Navbar);
  return (
    <>
      <div className="h-screen w-full relative">
        <img
          src={HotelsBanner}
          alt="Hotel background"
          className="w-full object-cover h-full opacity-90"
        />
      </div>
      <BackgrounOverLay />
      <div className="absolute top-0 left-0 h-screen">
        <Navbar />
      </div>
    </>
  );
};

export default HotelsList;
