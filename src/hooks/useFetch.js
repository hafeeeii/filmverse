import react, { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../utils/fetchDataFromApi";

const useFetch = (url,params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {


    fetchDataFromAPI(url,params)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setError("something went wrong");
      });
  }, [url]);

  return { data, loading, error };
};
export default useFetch;
