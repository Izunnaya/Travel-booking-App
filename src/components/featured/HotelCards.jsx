import { React, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import FirstHotelRoom from "../../assets/Hotel-room-(1).jpg";
import { Link } from "react-router-dom";

const style = {
  numberRating: `bg-blue-800 absolute top-0 right-5 my-6 p-2 rounded-t-lg rounded-br-lg text-md text-white font-bold cursor-pointer`,

  HotelImageCard: `mb-3 overflow-hidden w-full relative`,

  HotelImage: `object-cover h-60 rounded-md w-full transition-all ease-in-out duration-300 hover:scale-110`,

  HotelRating: `absolute w-full bottom-0 p-4 text-white`,

  ReadMoreButton: `p-2 bg-slate-500/70 font-bold rounded-lg text-white`,
  HotelName: `text-start text-2xl capitalize my-1 font-bold text-slate-200`,
};
const HotelCards = ({ hotelData }) => {
  return (
    <>
      {hotelData.map((singleHotelData) => {
        console.log(singleHotelData.hotelImg.src);
        return (
          <div
            className="HotelCard relative w-full h-full"
            key={singleHotelData.id}
          >
            <div className={style.HotelImageCard}>
              <Link to="/hotels/:id">
                <img
                  src={singleHotelData.hotelImg}
                  alt=""
                  className={style.HotelImage}
                />
                {/* <h3>{singleHotelData.hotelImg}</h3> */}
                <div className="readMore absolute top-20 left-20 opacity-0 hidden">
                  <button className={style.ReadMoreButton}>Read More</button>
                </div>
              </Link>
            </div>

            <span className={style.numberRating}>
              {singleHotelData.hotelRating}
            </span>
            <div className={style.HotelRating}>
              <div className="RatingStar flex text-lg">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <h4 className={style.HotelName}>{singleHotelData.hotelName}</h4>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HotelCards;
