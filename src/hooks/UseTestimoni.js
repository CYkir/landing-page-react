import { useState, useEffect } from "react";
import { getTestimoni } from "../api/furnitureApi";

const UseTestimoni = () => {
  const [testimoni, setTestimoni] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setError] = useState(null)

  useEffect(() => {
    const fetchTestimoni = async() => {
      try {
        const res = await getTestimoni()
        console.log(res.data.testimonials);
        setTestimoni(res.data.testimonials);
      } catch (err) {
        setError(err.message || 'failed fetch testimoni')
      }finally {
        setLoading(false)
      }
    }
    fetchTestimoni()
  },[])

  return {testimoni, loading, err}
}
export default UseTestimoni;