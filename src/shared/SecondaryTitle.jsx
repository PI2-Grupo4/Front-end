import { Typography } from "@mui/material";
import React from "react";

const SecondaryTitle = ({ title }) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: "1.5rem",
          color: "#9998A7",
          fontWeight: 300,
        }}
      >
        {title}
      </Typography>
    </>
  );
};

export default SecondaryTitle;
