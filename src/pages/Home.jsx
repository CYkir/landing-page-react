import Navbar from "../components/layout/Navbar";
import Stats from "../components/sections/ Stats";
import About from "../components/sections/About";
import BestFurniture from "../components/sections/BestFurniture";
import Category from "../components/sections/Category";
import Hero from "../components/sections/Hero";
import Products from "../components/sections/Products";

const Home = () => {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Stats/>
      <About/>
      <Category/>
      <BestFurniture/>
      <Products/>
    </>
  );
};

export default Home;
