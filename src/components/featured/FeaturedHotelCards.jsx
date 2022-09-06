import { React, useState } from "react";
import HotelCards from "./HotelCards";
import { Hoteldata } from "./HotelData";

const style = {
  FeautedCards: `cursor-pointer w-full grid grid-cols-1 gap-3 mx-auto md:grid-cols-2 lg:grid-cols-4 text-center`,
};
const FeaturedHotelCards = ({ type }) => {
  const [hotelData, setHotelData] = useState(Hoteldata);

  return (
    <>
      <div className={style.FeautedCards}>
        <HotelCards
          hotelData={hotelData}
          type="restaurant"
          onClick={() => setHotelData}
          className="mb-5"
        />
      </div>
    </>
  );
};

export default FeaturedHotelCards;
