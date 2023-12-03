import React from "react";
import styled from "styled-components";
import { Btnsave } from "../../index";

const LoginTemplate = () => {
  return (
    <Container>
      <div>
        <span>versión 1.0</span>
        <figure>
          <img src="" alt="" />
        </figure>
        <Titulo>Cerdyn</Titulo>
        <p>Toma el control de tus 💸 gastos e 💰 ingresos </p>
        <ContainerBtn>
          <Btnsave />
        </ContainerBtn>
      </div>
    </Container>
  );
};
const Container = styled.div``;

const Titulo = styled.span`
  font-size: 5rem;
  font-weight: 700;
`;
const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`;
export default LoginTemplate;
