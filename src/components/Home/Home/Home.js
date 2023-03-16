import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import FeaturedServices from "../FeaturedServices/FeaturedServices";
import FeaturedWork from "../FeaturedWork/FeaturedWork";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedServices />
      <FeaturedWork />
      <Footer />
    </div>
  );
};

export default Home;
