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
const CardList = () => {
  const [cardItems, setCardItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(result.data);
      setCardItems(result.data);
    };
    fetchData();
  }, []);
  return (
    <Container
      maxWidth={"md"}
      style={{
        marginTop: "40px",
      }}
    >
      <Grid container spacing={4}>
        {cardItems.map((cardItem, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random"
                alt="unsplash image"
              />
              <CardContent
                style={{
                  flexGrow: 1,
                }}
              >
                <Typography>{cardItem.id}</Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {cardItem.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {cardItem.body}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn more</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardList;
