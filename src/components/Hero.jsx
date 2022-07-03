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
      </div>
    </>
  );
};

export default Hero;
