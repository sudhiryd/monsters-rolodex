import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const resJsn = await res.json();
      setData(resJsn[0]);
    };

    fetchData();
  }, [url]);

  return data;
};

export default useFetch;
