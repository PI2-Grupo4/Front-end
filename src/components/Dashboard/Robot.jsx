import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useEffect, useState } from "react";
import { connectWithStore } from "../../contexts/Context";
import SecondaryTitle from "../../shared/SecondaryTitle";

const Robot = ({ id, equipments, equipment, active, equipStatus }) => {
  const [message, setMessage] = useState("Desconectado");
  const [status, setStatus] = useState(equipment.status);

  const handleMessage = async (status) => {
    console.log("Status", status);
    if (status === 1) {
      setMessage("Equipamento\nLigado");
    } else if (status === 2) {
      setMessage("Limpeza\nem\nAndamento");
    } else if (status === 3) {
      setMessage("Equipamento\nem\nStand-By");
    } else {
      setMessage("Equipamento\nDesconectado");
    }
  };

  const setEquipmentData = useCallback(
    (id) => {
      const selectedEquipment = equipments.find((equip) => equip.id === id);
      handleMessage(selectedEquipment.status);
      setStatus(selectedEquipment.status);
    },
    [equipments]
  );

  useEffect(() => {
    if (active) {
      setEquipmentData(id);
    }
  }, [id, message, equipStatus]);

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
          <SecondaryTitle title={"Robô"} />
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
                  whiteSpace: "pre-line",
                  textAlign: "center",
                }}
              >
                {status ? message : `Robô${"\n"}Desconectado`}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default connectWithStore(Robot);
