import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import RestaurentCard from "./RestaurentCard";
import { BallTriangle } from "react-loader-spinner";
const CardList = () => {
  const [restaurents, setRestaurents] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6864894&lng=77.2595642&page_type=DESKTOP_WEB_LISTING"
      );
      console.log(result.data);
      setRestaurents(result.data?.data?.cards[2]?.data?.data?.cards);
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(restaurents);
  return (
    <div>
      {loading ? (
        <div className="spinner">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      ) : (
        <Container
          maxWidth={"md"}
          style={{
            marginTop: "40px",
          }}
        >
          <Grid container spacing={4}>
            {restaurents.map((restaurent) => (
              <RestaurentCard
                data={restaurent.data}
                {...restaurent.data}
                key={restaurent.data.id}
              />
            ))}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default CardList;
