import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Widget from "../components/Widget";

const RestaurentDetails = () => {
  const { id } = useParams();
  const [restaurent, setRestaurent] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get(
        `https://www.swiggy.com/dapi/menu/v4/full?lat=28.69087559999999&lng=77.27338019999999&menuId=${id}`
      );
      console.log(result.data);
      setRestaurent(result.data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const widgets = restaurent?.data?.menu?.widgets;
  const items = restaurent?.data?.menu?.items;
  return (
    <div>
      <Container
        maxWidth={"md"}
        style={{
          marginTop: "40px",
        }}
      >
        <Grid container spacing={4}>
          {widgets?.map((w, i) => (
            <Widget key={i} items={items} {...w} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default RestaurentDetails;
