import UseHeader from "../../hooks/UseHeader";

const Hero = () => {
  const { header, err, loading } = UseHeader();

  if (loading) return <p>Loading...</p>;
  if (err) return <p>error: {err}</p>;
  return (
    <section
      className="relative h-[620px] md:h-screen bg-cover bg-right md:bg-center"
      style={{ backgroundImage: `url('${header.banner}')` }}
    >
      <div className="flex flex-col items-center  justify-center h-full text-white w-8/12 m-auto">
        <h1 className="font-saira text-2xl md:text-7xl font-bold text-center">
          {header.title}
        </h1>
        <div className="w-full md:w-6/12 mt-8">
          <p className="font-saira text-sm md:text-xl text-center font-normal md:font-light">
            {header.description}
          </p>
        </div>
        <div className="my-5 md:my-20">
          <button className="px-8 md:px-16 py-3 bg-white/30 md:bg-white/20 backdrop-blur-lg md:backdrop-blur-sm  font-saira font-bold font-xl rounded-lg">
            Shop Now
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-16 
                      bg-gradient-to-b from-transparent to-white"
      ></div>
    </section>
  );
};

export default Hero;
