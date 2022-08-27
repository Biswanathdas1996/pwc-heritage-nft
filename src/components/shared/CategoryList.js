import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import imgx1 from "../../assets/images/images.jpg";
import imgx2 from "../../assets/images/typewriter.jpeg";
// import imgx3 from "../../assets/images/heritage-02-00007-g001-550.png";
import imgx4 from "../../assets/images/imgx4.png";
import imgx5 from "../../assets/images/w9.jpeg";
import imgx6 from "../../assets/images/item3.png";
import { useNavigate } from "react-router-dom";

const category = [
  {
    title: "Art",
    img: imgx1,
    link: "/category/art",
  },
  {
    title: "Instrument",
    img: imgx2,
    link: "/category/music",
  },
  {
    title: "Sports",
    img: imgx6,
    link: "/category/sports",
  },
  {
    title: "Collectables",
    img: imgx5,
    link: "/category/art",
  },
];

export default function RecipeReviewCard() {
  let history = useNavigate();

  const cardUI = (text, img, link, height) => {
    return (
      <Card onClick={() => history(link)} style={{ cursor: "pointer" }}>
        <CardMedia
          component="img"
          height={height || "200"}
          image={img}
          alt="Paella dish"
        />
        <CardContent style={{ backgroundColor: "#11111114" }}>
          <Typography
            component="h1"
            variant="h7"
            align="left"
            color="text.primary"
            fontSize="25px"
            style={{ textAlign: "center" }}
          >
            {text}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        <Grid item xs={12}>
          <Typography
            component="h3"
            variant="h7"
            textAlign="left"
            color="text.primary"
            style={{ fontSize: 17, fontWeight: "bold" }}
          >
            Browse by category
          </Typography>
          <br />
        </Grid>

        {category.map((data, index) => (
          <Grid item xs={12} sm={12} md={3} lg={3} key={index}>
            {cardUI(data.title, data.img, data.link)}
          </Grid>
        ))}
      </Grid>
      <div style={{ marginTop: 50 }}></div>
    </>
  );
}
