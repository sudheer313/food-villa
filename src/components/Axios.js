import { Box } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Axios = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(result.data);
      setData(result.data);
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Axios;

