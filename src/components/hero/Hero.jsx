import React from "react";
import BeachBanner from "../../assets/beach-banner.jpg";
import { Button } from "../navbar/mobile-nav-menu/MobileNav.styled";
import { BsGeoAlt } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <div className="h-screen w-full relative">
        <img
          className="object-cover w-full h-full opacity-90"
          src={BeachBanner}
          alt="beach-banner"
        />

        {/* This is the overlay sitting on the home background */}
        <div className="absolute w-full h-full top-0 left-0 bg-gray-900/50"></div>
      </div>
      <div className="absolute w-full h-full left-0 top-0 flex flex-col justify-center text-center text-slate-100">
        <div>
          <h1 className="text-4xl py-3">BOOK UNIQUE EXPERIENCES</h1>
          <h3 className="text-2xl capitalize">
            Expolore top rated tours, hotels and restaurants around the world
          </h3>

          <div className=" h-12 bg-slate-200 max-w-[1200px] mx-auto rounded my-3 cursor-pointer flex justify-between text-center items-center w-full py-1 px-0">
            <div className="text-gray-700 flex justify-between items-start text-xl ml-2">
              <input
                type="text"
                placeholder="Hotel, City..."
                className="outline-none bg-inherit "
              />
              <BsGeoAlt size={20} className="mt-1" />
            </div>
            <div>two</div>
            <div>three</div>
            <div>
              <Button>Search</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
