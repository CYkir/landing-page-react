import USeCategories from "../../hooks/UseCategories";

const About = () => {
  const { category, loading, err } = USeCategories();

  if (loading) return <p>loading...</p>;
  if (err) return <p>err: {err}</p>;
  const chair = category.find((c) => c.title === "Chair");
  // console.log(category);

  return (
    <>
      <section className="py-24">
        <div className="flex flex-col-reverse md:flex md:flex-row w-10/12 justify-around md:h-[591px]  mx-auto md:space-x-28">
          <div className="w-full md:w-6/12 h-full ">
            <img
              src={chair?.image}
              alt={chair?.title}
              className="w-full h-[300px] md:h-full object-cover rounded-2xl mt-10 md:mt-0"
            />
          </div>

          <div className="w-full md:w-6/12 flex flex-col mt-5 md:mt-10">
            <div className="w-full md:w-8/12 ">
              <h2 className="text-2xl md:text-4xl font-semibold font-saira leading-tight  w-full">
                We Create Your Home More Aesthetic
              </h2>
            </div>
            <div className=" w-full md:8/12 mt-5 md:mt-10">
              <p className="font-saira leading-snug text-md md:text-2xl font-thin">
                Furnitre power is a software as services for multiperpose
                business management system,
              </p>
            </div>
            <div className="flex gap-3 mt-10 items-start">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="font-saira font-semibold text-md md:text-xl">
                  Valuation Services
                </p>
                <p className="mt-2 font-saira leading-tight md:tracking-wide font-thin text-sm md:text-lg">
                  Sometimes features require a short description. This can be
                  detailed description
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-10 items-start">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="font-saira font-semibold text-md md:text-xl">
                  Development of Furniture Modelss
                </p>
                <p className="mt-2 font-saira leading-tight font-thin md:tracking-wide text-sm md:text-lg">
                  Sometimes features require a short description. This can be
                  detailed description
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
