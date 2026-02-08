import { useState, useEffect } from "react";
import { getProducts } from "../api/furnitureApi";

const UseProducts = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProducts();
        // console.log(res.data.products);
        setProduct(res.data.products);
      } catch (err) {
        setError(err.message || "failed fecth product");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  return {product, loading, err}
};

export default UseProducts;
