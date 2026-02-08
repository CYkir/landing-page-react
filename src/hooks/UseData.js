import { useState, useEffect } from "react";
import { getdata } from "../api/furnitureApi";


const UseData = () => {
  const [data, setdata] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(null)

  useEffect(() =>  {
  const fetchData = async () => {
    try {
      const res = await getdata()
      console.log(res.data)
      setdata(res.data)
    } catch (err) {
      setError(err.message || 'failed to fetch data')
    } finally {
      setLoading(false)
    }
  }

  fetchData()
  }, [])

  return  {data , loading, err}

}

export default UseData