import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { Tooltip, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { changeSpeed } from "../../Services/service";
import { connectWithStore } from "../../contexts/Context";

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const PrettoSlider = styled(Slider)({
  color: "#FDCF00",
  height: 8,
  "& .MuiSlider-track": {
    border: "4px solid #8A8A8A",
    backgroundColor: "",
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#8A8A8A",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#FF7B00",
    border: "4px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#FDCF00",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const Speed = ({ id, equipments, equipment, storeSetState }) => {
  const [equipmentId, setEquipmentId] = useState(equipment.id);

  useEffect(() => {
    console.log("ID ------------------", id);
  }, [id]);

  return (
    <>
      {equipment.id ? (
        <>
          <Box
            sx={{
              backgroundColor: "#F0F2F5",
              padding: "1rem",
              mt: "1rem",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.3rem",
              }}
            >
              Velocidade
            </Typography>
            <Box sx={{ m: 3 }} />
            <Typography
              gutterBottom
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "1.1rem",
                marginBottom: "0",
              }}
            >
              <Box>
                <span>Baixo</span>
                <div className="verticalDevider"></div>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <span>Medio</span>
                <div className="verticalDeviderMiddle"></div>
              </Box>
              <Box>
                <span>Alto</span>
                <div className="verticalDeviderRight"></div>
              </Box>
            </Typography>

            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              min={1}
              max={3}
              // onChangeCommitted={(e, value) => changeSpeed(value, equipment.id)}
              value={equipments.find((equip) => equip.id === id).speed}
              step={1}
              onChange={(e, value) => changeSpeed(value, equipment.id)}
            />
          </Box>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default connectWithStore(Speed);
