import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Subscribe from "../components/Subscribe";
import Explore from "../components/Explore.jsx";
import TopProducts from "../components/TopProducts.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Explore />
      <TopProducts />
      <Products />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
