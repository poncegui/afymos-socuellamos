import React from "react";
import mainBackGround from "./assets/campeonato-baloncesto/campeones-baloncesto.jpg";
import styled from "styled-components";

const PortadaCampeones = () => {
  return (
    <MainNewContainer id="noticias">
      <img
        className="video"
        src={mainBackGround}
        alt="fotografia celebrando el campeonato en la cancha"
      />
    </MainNewContainer>
  );
};

export default PortadaCampeones;

const MainNewContainer = styled.div`
  height: 100vh;
  width: 100%;
  object-fit: contain;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media (max-width: 440px) {
    justify-content: center;
    align-items: start;
  }

  .video {
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
    opacity: 0.6;
  }
`;
