import React from "react";
import { AiFillStar } from "react-icons/ai";
import FirstHotelRoom from "../../assets/Hotel-room-(1).jpg";

const style = {
  numberRating: `bg-blue-800 absolute top-0 right-5 my-6 p-2 rounded-t-lg rounded-br-lg text-md text-white font-bold cursor-pointer`,
};
const FeaturedHotelCards = () => {
  return (
    <>
      <div className="FeautedCards max-w-[350px] w-full cursor-pointer">
        <div className="HotelCard relative">
          <div className="HotelImage mb-3 overflow-hidden w-full relative">
            <img
              src={FirstHotelRoom}
              alt=""
              className="object-cover rounded-md w-full transition-all ease-in-out duration-500 hover:scale-110"
            />
            <div className="absolute top-28 left-28">
              <button className="">Read More</button>
            </div>
          </div>

          <span className={style.numberRating}>8.9</span>
          <div className="HotelRating absolute w-full bottom-0 p-4 text-white">
            <div className="RatingStar flex text-lg">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h4 className="text-start text-2xl capitalize my-1 font-bold">
              hotel name
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedHotelCards;
