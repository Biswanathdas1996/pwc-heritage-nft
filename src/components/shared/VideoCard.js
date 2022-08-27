import * as React from "react";

import videoMp4 from "../../assets/images/VZqv.gif";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

export default function MultiActionAreaCard() {
  return (
    <Box style={{ marginTop: 50 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6} sm={12}>
          <Card style={{ padding: 20, borderRadius: 0, height: 320 }}>
            <Typography
              component="h3"
              variant="h7"
              textAlign="left"
              color="text.primary"
              style={{ fontSize: 17, fontWeight: "bold" }}
            >
              Our Metaverse
            </Typography>
            <Typography
              component="h5"
              variant="h7"
              textAlign="left"
              color="text.primary"
              style={{ fontSize: 17, marginTop: 30 }}
            >
              he person uses a tool to calculate the emissions released on that
              flight and then buys a carbon credit from a broker to offset that
              amount of emissions. The broker subtracts its fee and uses the
              rest of the money to invest in an emissions project, such as a
              reforestation effort.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <img
            src={videoMp4}
            alt="gg"
            height={325}
            width={580}
            style={{ float: "left" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}