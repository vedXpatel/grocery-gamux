import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Subscribe from "../components/Subscribe";
import Explore from "../components/Explore.jsx";
import TopProducts from "../components/TopProducts.jsx"
import ProductCategories from "../components/ProductCategories.jsx"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Subscribe/>
      <Slider />
      <Categories />
      <Explore/>
      <Products/>
      <TopProducts/>
      <TopProducts/>
      <ProductCategories/>
      <Footer/>
    </div>
  );
};

export default Home;