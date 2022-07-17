import React from "react";
import BeachBanner from "../../assets/beach-banner.jpg";
import { BsGeoAlt, BsChevronDown, BsCalendar } from "react-icons/bs";

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
          <p className="text-2xl capitalize">
            Expolore top rated tours, hotels and restaurants around the world
          </p>
        </div>
        {/* calender div */}
        <form className="container mx-auto grid grid-rows-4 gap-2 lg:grid-rows-1 lg:gap-0 grid-flow-col px-3 my-4">
          <div className="text-start bg-slate-200 col-auto h-14 flex justify-between px-2 text-gray-800 cursor-pointer border-r rounded-sm border-gray-600 font-medium">
            <input
              type="text"
              placeholder="Hotel, City..."
              className="bg-transparent w-full"
            />
            <div className="py-4">
              <BsGeoAlt size={24} />
            </div>
          </div>
          <div className="text-start bg-slate-200 col-auto h-14 flex justify-between px-2 text-gray-700 cursor-pointer border border-r rounded-sm border-gray-600 font-semibold">
            <input
              type="text"
              placeholder="When..."
              className="bg-transparent w-full"
            />
            <div className="py-4">
              <BsCalendar size={22} />
            </div>
          </div>
          <div className="text-start bg-slate-200 col-auto h-14 flex justify-between px-2 text-gray-700 cursor-pointer border rounded-sm border-gray-600 font-semibold">
            <div className="py-3">
              <small className="text-lg font-semibold pr-2">Guests</small>
              <span className=" bg-slate-600 px-2 rounded-full text-white">
                1
              </span>
            </div>
            <div className="py-4">
              <BsChevronDown size={22} />
            </div>
          </div>
          <button className=" bg-primaryColor lg:max-w-[200px] text-center rounded-r-md">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Hero;
