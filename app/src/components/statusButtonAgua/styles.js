import styled from "styled-components";

export const Container = styled.div`
  background-color: #0159b4;
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  text-align: center;
  align-items: center;
  color: #ffffff;
`;

export const DadosContainer = styled.div`
  width: 60%;
  text-align: center;
  .tipo {
    font-size: 28px;
  }
  .status {
    font-size: 36px;
  }
`;

export const IconeContainer = styled.div`
  width: 40%;
  height: 100%;
  text-align: center;
  align-content: center;
`;
export const Icone = styled.img`
  width: 100%;
  height: 100%;
`;
