import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";

import leftArrow from "../../assets/images/arrowLeft.png";
import play from "../../assets/images/powerBtn.png";
import rightArrow from "../../assets/images/arrowRight.png";

import leftArrowActive from "../../assets/images/arrowLeftActive.png";
import playActiveLogo from "../../assets/images/powerBtnActive.png";
import rightArrowActive from "../../assets/images/arrowRightActive.png";
import { changeDirection, status } from "../../Services/service";

const Control = (props) => {
  const [leftActive, setLeftActive] = React.useState(!props.direction);
  const [playActive, setPlayActive] = React.useState(props.power);
  const [rightActive, setRightActive] = React.useState(props.direction);
  const [statuss, setStatuss] = React.useState(props.status);

  const handleActive = (active) => {
    if (active === "left") {
      changeDirection(false, props.id);
      setLeftActive(true);
      setRightActive(false);
    }
    if (active === "play") {
      setPlayActive(!playActive);
      console.log("asdfasdfa", !playActive ? 2 : 3, props.status);
      status(!playActive ? 2 : 3, props.id);
    }
    if (active === "right") {
      changeDirection(true, props.id);
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

  useEffect(() => {
    setStatuss(props.statuss);
  }, [playActive, statuss]);

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
          Direção
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
            <>
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
              <button
                className="forward"
                onClick={() => handleControl("right")}
              >
                <img src={rightActive ? rightArrowActive : rightArrow} alt="" />
              </button>{" "}
            </>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Control;
