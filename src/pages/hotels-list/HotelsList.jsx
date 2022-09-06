import { React, memo } from "react";
import Navbar from "../../components/navbar/Navbar";
import HotelsBanner from "../../assets/hotel-banner.jpg";
import { BackgrounOverLay } from "../../components/hero/HeroStyled";

const HotelsList = () => {
  return (
    <>
      <div className="h-screen w-full relative">
        <img
          src={HotelsBanner}
          alt="Hotel background"
          className="w-full object-cover h-full opacity-90"
        />
      </div>
      <BackgrounOverLay className=" bg-gray-900/20" />
      <div className="absolute top-0 left-0 h-screen">
        <Navbar />
      </div>
    </>
  );
};

export default memo(HotelsList);
