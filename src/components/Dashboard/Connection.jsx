import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

import wifi from "../../assets/images/wifi.png";
import sign from "../../assets/images/sign.png";
import cacel from "../../assets/images/cancel.svg";

const Connection = ({ status }) => {
  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "#0159B4",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingY: "1rem",
            px: {
              xs: "2rem",
              sm: "2rem",
              md: "0.5rem",
              lg: "0.5rem",
              xl: "0.5rem",
            },
            height: "8rem",
          }}
        >
          <img src={wifi} className="cardLogo" alt="" />
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "1.8rem",
                  md: "1.8rem",
                  lg: "2rem",
                  xl: "2.5rem",
                },
                color: "#FFFFFF",
              }}
            >
              {status.title}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={status.value === "Connected" ? sign : cacel} alt="" />
            </Box>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default Connection;
