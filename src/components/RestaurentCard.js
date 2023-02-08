import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
const RestaurentCard = ({
  id,
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  avgRating,
  deliveryTime,
  costForTwoString,
  aggregatedDiscountInfoV2,
  data,
}) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
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
          image={`${IMG_CDN_URL}${cloudinaryImageId}`}
          alt="unsplash image"
        />
        <CardContent
          style={{
            flexGrow: 1,
          }}
        >
          {/* <Typography>{restaurent.id}</Typography> */}
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cuisines.join(", ")}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/restaurent/${id}`}>
            <Button size="small">Visit</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default RestaurentCard;
