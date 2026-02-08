import Navbar from "../components/layout/Navbar";
import Stats from "../components/sections/ Stats";
import About from "../components/sections/About";
import Category from "../components/sections/Category";
import Hero from "../components/sections/Hero";

const Home = () => {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Stats/>
      <About/>
      <Category/>
    </>
  );
};

export default Home;
