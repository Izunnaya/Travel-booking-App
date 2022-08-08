import { React, useState } from "react";
import HotelCards from "./HotelCards";
import { Hoteldata } from "./HotelData";

const FeaturedHotelCards = () => {
  const [hotelData, setHotelData] = useState(Hoteldata);
  console.log(hotelData);
  return (
    <>
      <div className="FeautedCards cursor-pointer w-full flex justify-between">
        <HotelCards hotelData={hotelData} />
      </div>
    </>
  );
};

export default FeaturedHotelCards;
