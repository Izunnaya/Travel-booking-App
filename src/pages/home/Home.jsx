import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
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
