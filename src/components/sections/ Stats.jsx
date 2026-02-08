import UseData from "../../hooks/UseData";

const Stats = () => {
  const {data, loading, err} = UseData();
  if(!data) return <p>loading..</p>
  if (loading) return <p>loadind ....</p>;
  if (err) return <p>erro: {err}</p>;
  return (
    <>
      <div className="relative -mt-24 flex justify-center ">
        <div className="w-11/12 md:w-10/12 bg-[#2f6f69] rounded-2xl p-8 text-white gap-8 grid grid-cols-3 place-items-center md:flex md:justify-around  shadow-xl ">
      
          <div className="text-center my-auto">
            <h2 className="text-3xl font-saira font-bold my-auto">
              {data.experience}
            </h2>
            <div className="mt-2 md:w-7/12 mx-auto">
              <p className="font-saira text-sm md:text-md font-light ">
                Year Experience
              </p>
            </div>
          </div>

          <div className="w-[1px] md:w-[2px] h-24 bg-white"></div>

          <div className="text-center my-auto">
            <h2 className="text-3xl font-saira font-bold">{data.country}</h2>
            <div className="mt-2 md:w-7/12 mx-auto">
              <p className="font-saira text-sm md:text-md font-light">
                Opened in the country
              </p>
            </div>
          </div>

          <div className="w-[2px] h-24 bg-white hidden md:block"></div>

          <div className="text-center my-auto">
            <h2 className="text-3xl font-saira font-bold">{data.sold}</h2>
            <div className="mt-2 md:w-7/12 mx-auto">
              <p className="font-saira text-md font-light">Furniture sold</p>
            </div>
          </div>

          <div className="w-[1px] md:w-[2px] h-24 bg-white "></div>

          <div className="text-center my-auto">
            <h2 className="text-3xl font-saira font-bold">{data.variant}</h2>
            <div className="mt-2 md:w-7/12 mx-auto">
              <p className="font-saira text-md font-light">Variant Furniture</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
