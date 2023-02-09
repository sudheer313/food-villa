import { Container, Grid } from "@mui/material";
import React from "react";
import { Dish } from "./Dish";

const Widget = ({ name, entities, items }) => {
  return (
    <div>
      <h2>{name}</h2>
      <Container
        maxWidth={"md"}
        style={{
          marginTop: "40px",
        }}
      >
        <Grid container spacing={4}>
          {entities?.map((item) => (
            <Dish key={item.id} {...items[item.id]} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Widget;
