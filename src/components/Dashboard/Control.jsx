import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import leftArrow from "../../assets/images/arrowLeft.png";
import play from "../../assets/images/powerBtn.png";
import rightArrow from "../../assets/images/arrowRight.png";

import leftArrowActive from "../../assets/images/arrowLeftActive.png";
import playActiveLogo from "../../assets/images/powerBtnActive.png";
import rightArrowActive from "../../assets/images/arrowRightActive.png";

const Control = () => {
  const [leftActive, setLeftActive] = React.useState(false);
  const [playActive, setPlayActive] = React.useState(false);
  const [rightActive, setRightActive] = React.useState(false);

  const handleActive = (active) => {
    if (active === "left") {
      setLeftActive(true);
      setRightActive(false);
    }
    if (active === "play") {
      setPlayActive(!playActive);
    }
    if (active === "right") {
      setLeftActive(false);
      setRightActive(true);
    }
  };

  const handleControl = (from) => {
    if (from === "left") {
      handleActive("left");
    }
    if (from === "play") {
      handleActive("play");
    }
    if (from === "right") {
      handleActive("right");
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F0F2F5",
          padding: "1rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.3rem",
          }}
        >
          Direction
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingY: "1rem",
          }}
        >
          <Box>
            <button className="back" onClick={() => handleControl("left")}>
              <img src={leftActive ? leftArrowActive : leftArrow} alt="" />
            </button>
            <button
              className="play"
              onClick={() => {
                handleControl("play");
              }}
            >
              <img src={playActive ? playActiveLogo : play} alt="" />
            </button>
            <button className="forward" onClick={() => handleControl("right")}>
              <img src={rightActive ? rightArrowActive : rightArrow} alt="" />
            </button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Control;
