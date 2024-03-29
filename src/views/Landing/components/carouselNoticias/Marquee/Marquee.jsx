import React from "react";
import styled from "styled-components";

const MarqueeContainer = styled.div`
  margin-top: 5%;
  overflow: hidden;
  position: relative;
  height: 70px; /* Altura ajustable */
  background-color: #071c2f; /* Color de fondo */
  font-size: 32px; /* Tamaño de la letra */
  display: flex;
  align-items: center; /* Centrado vertical */
  justify-content: center; /* Centrado horizontal */
  @media (max-width: 440px) {
    font-size: 24px;
  }
`;

const MarqueeText = styled.span`
  color: #c6b1c9; /* Color del texto */
`;

const Marquee = () => {
  return (
    <MarqueeContainer>
      <MarqueeText>Hoy es noticia...</MarqueeText>
    </MarqueeContainer>
  );
};

export default Marquee;
