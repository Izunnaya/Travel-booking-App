import React from "react";
import RestaurantCards from "./RestaurantCards";

const style = {
  FeautedCards: `cursor-pointer w-full grid grid-cols-1 gap-3 mx-auto md:grid-cols-2 lg:grid-cols-4 text-center`,
};
const PopularRestaurants = () => {
  return (
    <>
      <div className="h-[2.5px] w-36 bg-slate-300 my-3 rounded ">
        <div className="h-[2.5px] w-20 bg-red-500 my-3 rounded"></div>
      </div>

      <div className="my-8">
        <h3 className="font-bold text-2xl my-2">Popular Restaurants</h3>
        <span className="text-xl">
          Cum doctus civibus efficiantur in imperdiet deterruisset.
        </span>
      </div>
      <div className={style.FeautedCards}>
        <RestaurantCards />
      </div>
    </>
  );
};
export default PopularRestaurants;
