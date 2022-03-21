import React from "react";
import LateralBar from "../../components/lateralBar";
import StatusButtonAgua from "../../components/statusButtonAgua";
import StatusButtonBattery from "../../components/statusButtonBattery";
import StatusButtonConection from "../../components/statusButtonConection";
import StatusRobo from "../../components/statusRobo";

import {
  Container,
  ContainerCentral,
  ContainerDash,
  Titulo,
  ContainerTitulo,
  ContainerStatusCard,
  ContainerStatus,
  ContainerRobo,
  ContainerSeparacao,
  ContainerControle,
  ContainerInferior,
} from "./styles";

function Dashboard() {
  return (
    <Container>
      <LateralBar></LateralBar>
      <ContainerDash>
        <ContainerTitulo>
          <Titulo> Dashboard </Titulo>
        </ContainerTitulo>
        <ContainerCentral>
          <ContainerStatus>
            <Titulo>Status</Titulo>
            <ContainerStatusCard>
              <StatusButtonAgua porcentagem="100%" />
              <StatusButtonConection type="Conection" />
              <StatusButtonBattery porcentagem="100%" />
            </ContainerStatusCard>
          </ContainerStatus>
          <ContainerSeparacao />
          <ContainerInferior>
            <ContainerRobo>
              <Titulo>Robô</Titulo>
              <StatusRobo />
            </ContainerRobo>
            <ContainerControle>
              <Titulo>Controle</Titulo>
            </ContainerControle>
          </ContainerInferior>
        </ContainerCentral>
      </ContainerDash>
    </Container>
  );
}

export default Dashboard;
