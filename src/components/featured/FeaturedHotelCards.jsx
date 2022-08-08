import { React, useState } from "react";
import HotelCards from "./HotelCards";
import { Hoteldata } from "./HotelData";

const FeaturedHotelCards = () => {
  const [hotelData, setHotelData] = useState(Hoteldata);
  console.log(hotelData);
  return (
    <>
      <div className="FeautedCards cursor-pointer w-full grid grid-cols-1 gap-3 mx-auto md:grid-cols-2 lg:grid-cols-4 text-center">
        <HotelCards hotelData={hotelData} />
      </div>
    </>
  );
};

export default FeaturedHotelCards;
