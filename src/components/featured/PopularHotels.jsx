import React from "react";
import FeaturedHotelCards from "./FeaturedHotelCards";

const style = {
  container: `max-w-[1024px] w-full mx-auto text-center`,
};

const PopularTours = () => {
  return (
    <section className="my-20">
      <div className={style.container}>
        <div className="Hotels-header ">
          <div className="h-[2.5px] w-36 bg-slate-300 my-3 mx-auto rounded ">
            <div className="h-[2.5px] w-16 bg-red-500 my-3 mx-auto rounded"></div>
          </div>
          <h3 className="text-3xl font-medium py-2">
            Popular Hotels And Accommodation
          </h3>
          <p className="text-xl text-gray-600 w-full mb-11">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            sit quos
          </p>
        </div>
        <FeaturedHotelCards />
      </div>
    </section>
  );
};

export default PopularTours;
