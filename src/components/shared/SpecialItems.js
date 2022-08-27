import * as React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";
import Blog1 from "../../assets/images/w1.jpeg";
import Blog2 from "../../assets/images/item3.png";
import Blog3 from "../../assets/images/w3.jpeg";
import Blog4 from "../../assets/images/w16.jpeg";
import Blog5 from "../../assets/images/w4.jpeg";
import Blog6 from "../../assets/images/w5.jpeg";
import Blog7 from "../../assets/images/w6.jpeg";
import Blog8 from "../../assets/images/w7.jpeg";
import Blog9 from "../../assets/images/w8.jpeg";
import Blog10 from "../../assets/images/w15.jpeg";
import Blog11 from "../../assets/images/w10.jpeg";
import Blog12 from "../../assets/images/w11.jpeg";
import Blog13 from "../../assets/images/w12.jpeg";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

export default function RecipeReviewCard() {
  const cardUI = (img, height) => {
    return (
      <Box
        sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}
        onClick={(e) => window.open(img)}
      >
        <ImageButton
          focusRipple
          style={{
            width: "100%",
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${img})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image></Image>
        </ImageButton>
      </Box>
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
