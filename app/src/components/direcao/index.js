import React from "react";
import { Titulo } from "../../screens/dashboard/styles";
import { Container, Direcoes } from "./styles";
import esquerda from "../../assets/direcao/esquerda.svg";
import direita from "../../assets/direcao/direita.svg";
import power from "../../assets/direcao/power.svg";

function Direcao() {
  return (
    <Container>
      <Titulo>Direção</Titulo>
      <Direcoes>
        <img src={esquerda} />
        <img src={power} />
        <img src={direita} />
      </Direcoes>
    </Container>
  );
}

export default Direcao;
