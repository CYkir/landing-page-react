import USeCategories from "../../hooks/UseCategories";
import GlobalLoading from "../loading/GlobalLoading";

const Category = () => {
  const {category, err, loading} = USeCategories()

  if(loading) return <GlobalLoading/>
  if(err) return <p>Err : {err}</p>
  return (
    <>
      <section className="md:mt-20 w-full md:w-10/12 mx-auto mb-20">
        <div className="flex flex-col md:flex md:flex-row  gap-10">
          <div className="mx-auto w-11/12 md:w-3/12 flex space-x-4 flex-row md:flex md:flex-col justify-center">
            <p className="w-4/12 md:w-full font-saira text-xl md:text-4xl font-bold leading-tight">
              New In <br /> Store Now
            </p>

            <p className="mt-0 md:mt-10 font-saira text-sm w-8/12 md:w-full md:text-lg font-thin">
              Get the latest items immediately with promo prices
            </p>

            <button className="font-saira mt-10 text-lg  font-semibold underline text-left hidden md:flex md:items-center">
              Check All
              <span className="mx-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M754.8 480H160a32 32 0 1 0 0 64h594.8L521.3 777.3a32 32 0 0 0 45.4 45.4l288-288a32 32 0 0 0 0-45.4l-288-288a32 32 0 1 0-45.4 45.4z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          <div className="w-full md:w-9/12 overflow-x-auto p-4">
            <div className="flex gap-6 w-max">
              {category.map((item, index) => (
                <div
                  key={index}
                  className="relative w-[200px] md:w-[260px] flex-shrink-0"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[300px] md:h-[320px] object-cover rounded-xl"
                  />

                  <p className="absolute font-saira font-bold mx-auto bottom-4 left-24 text-white text-xl ">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
