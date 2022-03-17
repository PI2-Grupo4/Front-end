import React from "react";
import {
  Container,
  DadosContainer,
  Icone,
  IconeContainer,
} from "../statusButtonAgua/styles";
import logoBateria from "../../assets/battery-logo.svg";

function StatusButtonBateria(props) {
  return (
    <>
      <Container>
        <IconeContainer>
          <Icone src={logoBateria} />
        </IconeContainer>
        <DadosContainer>
          <p className="tipo">Bateria</p>
          <p className="status">{props.porcentagem}</p>
        </DadosContainer>
      </Container>
    </>
  );
}

export default StatusButtonBateria;
