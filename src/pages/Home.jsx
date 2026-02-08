import Navbar from "../components/layout/Navbar";
import Stats from "../components/sections/ Stats";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";

const Home = () => {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Stats/>
      <About/>
    </>
  );
};

export default Home;
