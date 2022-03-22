import React from "react";
import Direcao from "../../components/direcao";
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
  ContainerControleInterno,
  LinhaControle,
} from "./styles";
import Velocidade from "../../components/velocidade";

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
              <ContainerControleInterno>
                <Direcao />
                <LinhaControle />
                <Velocidade />
              </ContainerControleInterno>
            </ContainerControle>
          </ContainerInferior>
        </ContainerCentral>
      </ContainerDash>
    </Container>
  );
}

export default Dashboard;
