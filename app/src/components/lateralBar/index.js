import React from "react";
import { Container, Logo, LogoContainer } from "./styles";
import logo from "../../assets/logo.svg";

function LateralBar() {
  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
    </Container>
  );
}

export default LateralBar;
