import React, { useState, useCallback, useEffect } from "react";

const useFetch = (page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  console.log(list);

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await fetch(
        `http://api.products.luezoid.com/products?page=${page}`,
        {
          method: "Get",
          headers: {
            Authorization: "Bearer ULxG9gG98KDGPql/BFI/woCN9T8=",
          },
        }
      );
      const data = await res.json();
      await setList((prev) => [...prev, ...data.items]);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }, [page]);

  useEffect(() => {
    sendQuery(page);
  }, [sendQuery, page]);
  return { loading, error, list };
};

export default useFetch;
