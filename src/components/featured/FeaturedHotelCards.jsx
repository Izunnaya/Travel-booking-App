import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import FirstHotelRoom from "../../assets/Hotel-room-(1).jpg";

const FeaturedHotelCards = () => {
  return (
    <>
      <div className="FeautedCards max-w-[350px] w-full">
        <div className="HotelCard relative">
          <div className="HotelImage mb-3">
            <img src={FirstHotelRoom} alt="" className="object-fit" />
          </div>

          <span className=" bg-blue-600 absolute top-0 right-6 my-5">8.9</span>
          <div className="HotelRating bg-red-600 absolute  w-full bottom-0">
            <div className="RatingStar flex">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <h4 className="text-start">hotel name</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedHotelCards;
