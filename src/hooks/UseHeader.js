import { useEffect } from "react";
import { useState } from "react";
import { getHeader } from "../api/furnitureApi";

const UseHeader = () => {
  const [header, setHeader] = useState();
  const [err, setError] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const res = await getHeader();
        // console.log(res.data);
        setHeader(res.data);
      } catch (err) {
        setError(err.message || "Failed to fetch header");
      } finally {
        setLoading(false)
      }
    };

    fetchHeader();
  }, []);
  return { header, err , loading};
};

export default UseHeader;
