import React from "react";
import { Container, DadosContainer, Icone, IconeContainer } from "./styles";
import logoAgua from "../../assets/water-logo.svg";

function StatusButtonAgua(props) {
  return (
    <>
      <Container>
        <IconeContainer>
          <Icone src={logoAgua} />
        </IconeContainer>
        <DadosContainer>
          <p className="tipo">Água</p>
          <p className="status">{props.porcentagem}</p>
        </DadosContainer>
      </Container>
    </>
  );
}

export default StatusButtonAgua;
