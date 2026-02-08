import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Stats from "../components/sections/ Stats";
import About from "../components/sections/About";
import BestFurniture from "../components/sections/BestFurniture";
import CallToAction from "../components/sections/CallToAction";
import Category from "../components/sections/Category";
import Hero from "../components/sections/Hero";
import Products from "../components/sections/Products";
import Testimoni from "../components/sections/Testimoni";

const Home = () => {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Category />
        <BestFurniture />
        <Products />
        <Testimoni />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Home;
