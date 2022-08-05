import React from "react";
import PopularTours from "../../components/featured/PopularHotels";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularTours />
    </>
  );
};

export default Home;
