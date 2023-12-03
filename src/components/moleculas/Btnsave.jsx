import React from "react";
import styled from "styled-components";

const Btnsave = ({ funcion, titulo, bgcolor, icono }) => {
  return (
    <Container type="submit">
      <span className="icono">{icono}</span>
      <span className="btn" onClick={funcion}>
        {titulo}
      </span>
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  .icono {
  }
`;
export default Btnsave;
