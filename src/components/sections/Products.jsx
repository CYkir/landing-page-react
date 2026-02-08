import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import UseProducts from "../../hooks/UseProducts";
import GlobalLoading from "../loading/GlobalLoading";

const Products = () => {
  const { product, err, loading } = UseProducts();
  if (loading) return <GlobalLoading/>;
  if (err) return <p>err:{err}</p>;

  return (
    <>
      <section className="w-12/12 md:w-10/12 p-10 mx-auto">
        <div className="text-center mx-auto">
          <h3 className="font-saira text-2xl md:text-4xl font-bold">All Product</h3>
          <p className="my-8 font-saira font-thin text-sm md:text-xl w-full md:w-6/12 mx-auto">
            The products we provide only for you as our service are selected
            from the best products with number 1 quality in the world
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {product.map((item) => (
            <div key={item.id}>
              <div className="relative border rounded-2xl p-2 group hover:shadow-lg transition h-[100px] md:h-[200px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="md:h-40 h-20  object-contain mx-auto"
                />

                <button className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Plus size={16} />
                </button>
              </div>
              <h3 className="font-semibold mt-4">{item.title}</h3>

              <div className="flex gap-3 text-sm mt-1">
                <span className="font-semibold">
                  ${item.price_after_discount ?? item.price}
                </span>

                {item.price_after_discount && (
                  <span className="line-through text-gray-400">
                    ${item.price}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-14">
          <ChevronLeft className="text-gray-400 cursor-pointer" />

          <div className="flex gap-2">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>

          <ChevronRight className="cursor-pointer" />
        </div>
      </section>
    </>
  );
};

export default Products;
