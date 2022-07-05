import React from "react";
import Hero from "../../components/Hero";
import Navbar from "../../components/navbar/Navbar";
import PopularTours from "../../components/PopularTours";

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
