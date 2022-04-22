import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SecondaryTitle from "../../shared/SecondaryTitle";

const Robot = (props) => {
  const [message, setMessage] = useState("Desconectado");
  const [status, setStatus] = useState(props.status);

  const handleMessage = async (status) => {
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

  useEffect(() => {
    handleMessage(props.status);
    setStatus(props.status);
  }, [props.status]);

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
                }}
              >
                {status ? message : <p>Desconectado</p>}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default Robot;
