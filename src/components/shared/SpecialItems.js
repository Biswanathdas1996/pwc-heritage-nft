import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";
import Blog1 from "../../assets/images/item3.png";
import Blog2 from "../../assets/images/WhatsApp Image 2022-08-25 at 7.56.29 PM.jpeg";
import Blog3 from "../../assets/images/WhatsApp Image 2022-08-25 at 7.56.41 PM.jpeg";
import Blog4 from "../../assets/images/WhatsApp Image 2022-08-25 at 7.56.38 PM.jpeg";
import Blog5 from "../../assets/images/WhatsApp Image 2022-08-25 at 7.56.37 PM (1).jpeg";
import Blog6 from "../../assets/images/WhatsApp Image 2022-08-25 at 7.56.34 PM.jpeg";
import Blog7 from "../../assets/images/WhatsApp Image 2022-08-25 at 7.56.37 PM.jpeg";
import Blog8 from "../../assets/images/WhatsApp Image 2022-08-25 at 7.56.31 PM.jpeg";
import Blog9 from "../../assets/images/WhatsApp Image 2022-08-25 at 7.56.39 PM.jpeg";
import Blog10 from "../../assets/images/WhatsApp Image 2022-08-25 at 7.56.40 PM.jpeg";
import Blog11 from "../../assets/images/WhatsApp Image 2022-08-25 at 7.56.35 PM.jpeg";
import Blog12 from "../../assets/images/WhatsApp Image 2022-08-25 at 7.56.36 PM.jpeg";
import Blog13 from "../../assets/images/WhatsApp Image 2022-08-25 at 7.56.37 PM.jpeg";

export default function RecipeReviewCard() {
  const cardUI = (img, height) => {
    return (
      <Card>
        <CardMedia
          component="img"
          height={height || "200"}
          image={img}
          alt="Paella dish"
        />
      </Card>
    );
  };

  return (
    <>
      <Grid container spacing={1} style={{ marginTop: 20 }}>
        <Grid item xs={12}>
          <Typography
            component="h3"
            variant="h7"
            textAlign="left"
            color="text.primary"
            style={{ fontSize: 17, fontWeight: "bold" }}
          >
            Some Exclusives
          </Typography>
          <br />
        </Grid>

        <Grid item xs={8} sm={8} md={2} lg={2}>
          {cardUI(Blog1)}
        </Grid>
        <Grid item xs={8} sm={8} md={2} lg={4}>
          {cardUI(Blog2)}
        </Grid>
        <Grid item xs={8} sm={8} md={2} lg={2}>
          {cardUI(Blog3)}
        </Grid>
        <Grid item xs={8} sm={8} md={2} lg={4}>
          {cardUI(Blog4)}
        </Grid>
        <Grid item xs={8} sm={8} md={2} lg={4}>
          {cardUI(Blog5)}
        </Grid>
        <Grid item xs={8} sm={8} md={2} lg={2}>
          {cardUI(Blog6)}
        </Grid>
        <Grid item xs={8} sm={8} md={2} lg={4}>
          {cardUI(Blog7)}
        </Grid>
        <Grid item xs={8} sm={8} md={2} lg={2}>
          {cardUI(Blog8)}
        </Grid>
        <Grid item xs={8} sm={8} md={2} lg={2}>
          {cardUI(Blog9)}
        </Grid>
        <Grid item xs={8} sm={8} md={2} lg={2}>
          {cardUI(Blog10)}
        </Grid>

        <Grid item xs={8} sm={8} md={2} lg={4}>
          {cardUI(Blog11)}
        </Grid>
        <Grid item xs={8} sm={8} md={2} lg={2}>
          {cardUI(Blog12)}
        </Grid>
        <Grid item xs={8} sm={8} md={2} lg={2}>
          {cardUI(Blog13)}
        </Grid>
      </Grid>
    </>
  );
}
