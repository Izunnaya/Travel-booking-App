import React from "react";
import FeaturedHotelCards from "./FeaturedHotelCards";
import { Link } from "react-router-dom";
import PopularRestaurants from "./PopularRestaurants";
import MountainView from "../showcase/MountainView";

const style = {
  container: `max-w-[1200px] w-full mx-auto text-center overflow-hidden px-2 `,
  viewAllBtn: `text-start mt-3 text-xl font-bold text-red-500 hover:text-gray-800 transition-all ease-out duration-500 block`,
  PopularRestStyle: `text-start mt-16`,
};

const PopularTours = () => {
  return (
    <section className="my-16 bg-[#F8F8F8]">
      <div className={style.container}>
        <div className="Hotels-header ">
          <div className="h-[2.5px] w-36 bg-slate-300 my-3 mx-auto rounded ">
            <div className="h-[2.5px] w-16 bg-red-500 my-3 mx-auto rounded"></div>
          </div>
          <h3 className="text-3xl font-medium py-2">
            Popular Hotels And Accommodation
          </h3>
          <p className="text-xl text-gray-600 w-full mb-11">
            Lorem, ipsum <strong>Make Sapa no limit you</strong> elit.
            Architecto sit quos Lorem ipsum dolor
          </p>
        </div>
        <div className="w-full text-center">
          <FeaturedHotelCards />
        </div>
        <div className="w-full">
          <button type="button" className={style.viewAllBtn}>
            <Link to="/hotels">View All (157)</Link>
          </button>
        </div>
        <div className={style.PopularRestStyle}>
          <PopularRestaurants />
        </div>
        <div className="w-full">
          <button type="button" className={style.viewAllBtn}>
            <Link to="/hotels">View All (157)</Link>
          </button>
        </div>
        <MountainView />
      </div>
    </section>
  );
};

export default PopularTours;
