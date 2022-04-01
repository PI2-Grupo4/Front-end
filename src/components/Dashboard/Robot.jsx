import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SecondaryTitle from "../../shared/SecondaryTitle";

const Robot = () => {
  return (
    <>
      <Grid item xs={12} sm={12} md={12} lg={4} xl={4} sx={{}}>
        <Paper
          elevation={0}
          sx={{
            padding: "1rem",
            height: "27rem",
          }}
        >
          <SecondaryTitle title={"Robot"} />
          {/* Message Box */}
          <Box
            sx={{
              padding: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "20rem",
                width: "100%",
                backgroundColor: "#575757",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                Message
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default Robot;
