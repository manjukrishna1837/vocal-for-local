/** @format */

import React from "react";
import Banner from "./Banner";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Card from "./Card";
function Home(props) {
  let electrical = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI9-sHgsxov2y2tmi1-W0ijcCL6MPJzLa6rA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsvheX99RMr3j5qk9FnwEE2_sVF--VkMJuCg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxAKUyi9DpHEuWOiU8LLhDYzUFZ70fpfnj6Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVAghINqOI0Pnk0eV9PGz6SAj5myu1MlG9rw&usqp=CAU"
  ];
  let elec1 = [
    "New Era Electrical Shop",
    "Sannidhi electricals",
    "Kl Enterprises",
    "Vadda Electricals"
  ];
  let groceries = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeoOSBaotWcRS60f7bnNwyQj55_AkcG1ORCw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_nHQWyiQh2-ocGcEud90H_Gh3Pu8JJlJO6g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ3ioIBCxopk0FMSel8BTzbCw7jQLnmGIeoQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTH4-2I6VRr8OpxTeUokcbobYBmrfpXJTPf7g&usqp=CAU"
  ];
  let electronics1 = [
    "Baliga stores",
    "Margin Free Store",
    "Mahashwari Enterprises",
    "Mritika Stores "
  ];

  let restaurant = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_E5DIES6zq1l6VFUX8mJvRbYqMEZfTmcSFQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnBJSNGmrDg9mhKzsOtRsgOd-8GYB4lKmUeg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRzUljN3AVzwNEh4skuJpxIIyWaATMV5y3Qw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzXvQp_FoNnmRLLyM__pZS37iPfDLHmkMhLQ&usqp=CAU"
  ];
  let res1 = ["Hotel Vardhaman", "Vihar", "Salwa", "Hotel Anand"];
  const histroy = useHistory();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Banner variant="contained" color="primary" />
        </Grid>
        <Grid item lg={12}>
          <div className="home__button">
            <Button
              onClick={() => histroy.push("/addstore")}
              variant="outlined"
            >
              Add shop
            </Button>
          </div>
        </Grid>
        <div className="home__section">
          <h1 style={{ padding: "0 50px 50px 50px" }}>Electrical</h1>
          <Card arr={electrical} arr1={elec1} className="home__sectioncard" />
        </div>
        <div className="home__section">
          <h1 style={{ padding: "50px" }}>Groceries</h1>
          <Card arr={groceries} arr1={electronics1} />
        </div>
        <div className="home__section">
          <h1 style={{ padding: "50px" }}>Restaurants</h1>
          <Card arr={restaurant} arr1={res1} />
        </div>
      </Grid>
    </div>
  );
}
export default Home;
