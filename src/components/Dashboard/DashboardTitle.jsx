import { Box } from "@mui/system";
import React from "react";

const DashboardTitle = () => {
  return (
    <>
      <Box
        sx={{
          width: "90%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h2 className="title">Dashboard</h2>
        <div className="devider"></div>
      </Box>
    </>
  );
};

export default DashboardTitle;
