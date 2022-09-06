import { React } from "react";
import BeachBanner from "../../assets/beachBanner.jpg";
import HeroSearch from "./SearchComponent/SearchForm";
import { HeroStyled, BackgrounOverLay } from "./HeroStyled";
const Hero = () => {
  return (
    <>
      <div className="h-screen w-full relative">
        <img
          className="object-cover w-full h-full opacity-90"
          src={BeachBanner}
          alt="beach-banner"
        />

        {/* This is the overlay sitting on the home background */}
        <BackgrounOverLay />
      </div>

      <HeroStyled>
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-4xl py-3">BOOK UNIQUE EXPERIENCES</h1>
          <p className="text-xl md:text-2xl capitalize px-2 font-medium md:font-base">
            Expolore top rated tours, hotels and restaurants around the world.
          </p>
          {/* Search Component */}
          <HeroSearch />
        </div>
        {/* calender div */}
      </HeroStyled>
    </>
  );
};

export default Hero;
