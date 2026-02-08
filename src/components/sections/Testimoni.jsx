import { useState } from "react";
import UseTestimoni from "../../hooks/UseTestimoni";
import sittingRoom from "../../assets/img/sitting_room.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GlobalLoading from "../loading/GlobalLoading";

const Testimoni = () => {
  const { testimoni, loading, err } = UseTestimoni();
  const [index, setIndex] = useState(0);

  if (loading) return <GlobalLoading/>;
  if (err) return <p>err: {err}</p>;

  const next = () => {
    console.log("NEXT CLICKED");
    console.log("current index:", index);
    console.log("total:", testimoni.length);
    setIndex((prev) => (prev + 1) % testimoni.length);
  };

  const prev = () => {
    console.log("PREV CLICKED");
    console.log("current index:", index);
    console.log("total:", testimoni.length);
    setIndex((prev) => (prev === 0 ? testimoni.length - 1 : prev - 1));
  };

  const item = testimoni[index];

  return (
    <>
      <section id="testimoni" className="w-10/12 mx-auto my-10 md:py-24 flex flex-col md:flex-row md:flex justify-between    items-center">
        <div className="w-full md:w-6/12">
          <h2 className=" text-2xl md:text-4xl font-saira font-bold mb-10">
            What People Are Saying About Us
          </h2>

          <div className="flex items-center gap-4 mb-6">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20  rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-lg font-saira px-3">
                {item.name}
              </p>
              <p className="text-gray-400 text-sm font-saira px-3">
                {item.title}
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-lg font-saira leading-relaxed max-w-lg">
            "{item.message}"
          </p>
          <div className="hidden md:block">
            <div className="flex gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border flex items-center justify-center"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-[#286F6C] text-white flex items-center justify-center"
              >
                <ChevronRight />
              </button>
            </div>
            <div className="flex gap-3 mt-6">
              {testimoni.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === index ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <img
            src={sittingRoom}
            alt="room"
            className="rounded-2xl w-full h-[200px] md:h-[400px] object-cover"
          />
        </div>

        <div className="md:hidden block">
          <div className="flex gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border flex items-center justify-center"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-[#286F6C] text-white flex items-center justify-center"
            >
              <ChevronRight />
            </button>
          </div>
          <div className="flex gap-2 mt-6  justify-around">
            {testimoni.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimoni;
