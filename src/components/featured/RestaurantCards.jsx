import React from "react";
import rest1 from "../../assets/rest1.jpg";
import rest2 from "../../assets/rest2.jpg";
import rest3 from "../../assets/rest3.jpg";
import rest4 from "../../assets/rest4.jpg";
import { Link } from "react-router-dom";
import { BackgrounOverLay } from "../hero/HeroStyled";
const style = {
  numberRating: `bg-blue-800 absolute top-0 right-5 my-6 p-2 rounded-t-lg rounded-br-lg text-md text-white font-bold cursor-pointer`,

  HotelImageCard: `mb-3 overflow-hidden w-full relative w-full mx-auto h-60`,

  HotelImage: `object-cover h-full rounded-md w-full transition-all ease-in-out duration-500 hover:scale-110`,

  HotelRating: `absolute w-full bottom-0 p-4 text-white`,

  ReadMoreButton: `p-2 bg-slate-600/70 font-bold rounded-lg text-white`,
  HotelName: `text-start text-xl capitalize my-1 font-bold text-white-500`,
};
const RestaurantCards = () => {
  const restaurants = [
    {
      name: "Da Alfredo",
      restImg: rest1,
      rating: "8.5",
      id: 1,
    },
    {
      name: "Slow Food",
      restImg: rest2,
      rating: "7.9",
      id: 2,
    },
    {
      name: "Bella Napoli",
      restImg: rest3,
      rating: "7.5",
      id: 3,
    },
    {
      name: "Marcus",
      restImg: rest4,
      rating: "9.0",
      id: 4,
    },
  ];
  return (
    <>
      {restaurants.map((restaurant) => {
        return (
          <div className="HotelCard relative h-full" key={restaurant.id}>
            <div className={style.HotelImageCard}>
              <Link to="/hotels/:id">
                <img
                  src={restaurant.restImg}
                  alt="Hotel-images"
                  className={style.HotelImage}
                />
                <BackgrounOverLay className="bg-gray-900/10" />
                <div className="readMore absolute top-24 left-32 lg:left-20 opacity-0 hidden">
                  <button className={style.ReadMoreButton}>Read More</button>
                </div>
              </Link>
            </div>

            <span className={style.numberRating}>{restaurant.rating}</span>
            <div className={style.HotelRating}>
              <h4 className={style.HotelName}>{restaurant.name}</h4>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default RestaurantCards;
