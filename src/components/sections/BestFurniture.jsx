import bestFurniture from '../../assets/img/best_furniture.png'

const BestFurniture = () => {
  return (
    <>
      <section className="my-10">
        <div className="flex flex-col md:flex md:flex-row justify-around w-10/12 mx-auto md:space-x-5">
          <div className="w-full md:w-6/12 md:py-32">
            <h3 className="font-saira font-bold text-xl md:text-4xl leading-tight tracking-wide">
              The Best Furniture <br /> Manufacturer of your choice
            </h3>
            <p className="w-full md:w-9/12 font-saira font-thin text-sm md:text-xl my-8 md:mt-10 leading-relaxed ">
              Furnitre power is a software as services for multiperpose business
              management system, expecially for them who are running two or more
              business exploree the future Furnitre power is a software as
              services \
            </p>
          </div>
          <div className="w-full md:w-6/12 p-0 md:p-16">
            <img
              src={bestFurniture}
              alt="Best Furniture"
              className="rounded-lg w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default BestFurniture;