import { Grid } from "@mui/material";
import React from "react";
import LateralBar from "../../components/lateralBar";
import StatusButtonAgua from "../../components/statusButtonAgua";
import StatusButton from "../../components/statusButtonAgua";
import {
  Container,
  ContainerCentral,
  ContainerDash,
  Titulo,
  ContainerTitulo,
  ContainerStatus,
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
            <StatusButtonAgua porcentagem="100%" />
            <StatusButtonAgua type="conection" />
            <StatusButtonAgua type="Battery" />
          </ContainerStatus>
        </ContainerCentral>
      </ContainerDash>
    </Container>
  );
}

export default Dashboard;
