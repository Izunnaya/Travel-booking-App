import React from "react";
import BeachBanner from "../assets/beach-banner.jpg";

const Hero = () => {
  return (
    <>
      <div className="h-screen w-full relative">
        <img
          className="object-cover w-full h-full opacity-90"
          src={BeachBanner}
          alt="beach-banner"
        />

        <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      </div>
    </>
  );
};

export default Hero;
