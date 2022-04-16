import { Box } from "@mui/system";
import React from "react";

import logo from "../../assets/images/logo.svg";

const Sidebar = () => {
  return (
    <>
      <Box
        sx={{
          height: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100vh",
            xl: "100vh",
          },
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "10%",
            xl: "10%",
          },
          backgroundColor: "#0159B4",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#024C9C",
            width: {
              xs: "18%",
              md: "10%",
              sm: "15%",
              lg: "100%",
              xl: "100%",
            },
          }}
        >
          <img src={logo} className="logo" alt="" />
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
