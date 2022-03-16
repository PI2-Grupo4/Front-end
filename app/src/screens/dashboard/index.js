import React from "react";
import LateralBar from "../../components/lateralBar";
import {
  Container,
  ContainerCentral,
  ContainerDash,
  Titulo,
  ContainerTitulo,
} from "./styles";

function Dashboard() {
  return (
    <Container>
      <LateralBar></LateralBar>
      <ContainerDash>
        <ContainerTitulo>
          <Titulo> Dashboard </Titulo>
        </ContainerTitulo>
        <ContainerCentral>Status, Robo, Controle</ContainerCentral>
      </ContainerDash>
    </Container>
  );
}

export default Dashboard;
