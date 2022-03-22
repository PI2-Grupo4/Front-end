import { Slider } from "@mui/material";
import React from "react";
import { Titulo } from "../../screens/dashboard/styles";
import { Container, Velocidades } from "./styles";

function Velocidade() {
  return (
    <Container>
      <Titulo>Velocidade</Titulo>
      <Velocidades>
        <p>Baixo</p>
        <p>Medio</p>
        <p>Alto</p>
      </Velocidades>
      <Slider
        aria-label="Velocidade"
        valueLabelDisplay="auto"
        size="large"
        marks
        defaultValue={1}
        min={1}
        max={3}
      />
    </Container>
  );
}

export default Velocidade;
