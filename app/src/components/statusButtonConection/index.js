import React from "react";
import { Container, DadosContainer, Icone, IconeContainer } from "./styles";
import logoAgua from "../../assets/conection-logo.svg";

function StatusButtonConexao() {
  return (
    <>
      <Container>
        <IconeContainer>
          <Icone src={logoAgua} />
        </IconeContainer>
        <DadosContainer>
          <p className="tipo">Conexão</p>
          <p className="status"></p>
        </DadosContainer>
      </Container>
    </>
  );
}

export default StatusButtonConexao;
