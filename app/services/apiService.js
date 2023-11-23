import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch({ url, params = {}, method = "GET" }) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("ok");
  const [loading, setLoading] = useState(true);
  const options = {
    method: method,
    url: url,
    params: params,
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUCLIC_API_KEY,
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };
  const clearData = () => {
    setData(null);
  };

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const response = await axios.request(options);
        setData([response.data]);
        setStatus("ok");
      } catch (err) {
        setStatus(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);
  return { data, status, loading, clearData };
}
