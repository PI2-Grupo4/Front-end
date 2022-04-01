import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

import battery from "../../assets/images/battery.png";

const Battery = ({ status }) => {
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
            paddingX: "2rem",
            height: "8rem",
          }}
        >
          <img src={battery} alt="" />
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
              Battery
            </Typography>
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
              {status.value}
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default Battery;
