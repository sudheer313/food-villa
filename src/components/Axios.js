import { Box } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Rings } from "react-loader-spinner";
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
        <Rings
          height="80"
          width="80"
          color="#4fa94d"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
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
