import Navbar from "../components/layout/Navbar";
import Stats from "../components/sections/ Stats";
import About from "../components/sections/About";
import BestFurniture from "../components/sections/BestFurniture";
import Category from "../components/sections/Category";
import Hero from "../components/sections/Hero";
import Products from "../components/sections/Products";
import Testimoni from "../components/sections/Testimoni";

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
      <Testimoni/>
    </>
  );
};

export default Home;
