import { useState, useEffect } from "react";
import { getCategories } from "../api/furnitureApi";

const USeCategories = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(null);

  useEffect(() => {
    const fecthCategory = async () => {
      try {
        const res = await getCategories();
        console.log(res.data.category);
        setCategory(res.data.category);
      } catch (err) {
        setError(err.message || "failed fetch categories");
      } finally {
        setLoading(false);
      }
    };
    fecthCategory();
  }, []);

  return { category, loading, err };
};

export default USeCategories;
