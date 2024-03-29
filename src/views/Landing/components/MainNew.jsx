import React from "react";
import mainBackGround from "../../todasLasNoticias/assets/campeonato-baloncesto/campeones-baloncesto.jpg";
import styled from "styled-components";

const MainNew = () => {
  return (
    <MainNewContainer id="noticias">
      <img
        className="video"
        src={mainBackGround}
        alt="fotografia-baloncesto-campeones"
      />
      <TextContainer>
        <h3>20° CAMPEONATO REGIONAL BALONCESTO</h3>
        <p>El CBS- AFYMOS campeón de Baloncesto Regional en 1° División.</p>
      </TextContainer>
    </MainNewContainer>
  );
};

export default MainNew;

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
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(20, 20, 20, 0.4) 50%,
      rgba(83, 100, 141, 0) 100%
    );
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

const TextContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-right: 30px;
  text-align: right;
  background-color: 071c2f;

  h3 {
    color: #071c2f;
    font-size: 3rem;
    letter-spacing: 2px;
    font-weight: 200;
    font-weight: 700;
  }
  p {
    margin-top: 1rem;
    color: black;
    font-size: 1.8rem;
    letter-spacing: 2px;
    font-weight: 700;
  }

  @media (max-width: 960px) {
    h3 {
      font-size: 2.5rem;
      text-align: center;
    }
    p {
      text-align: center;
      font-size: 1.2rem;
      width: 85%;
    }
  }
  @media (max-width: 440px) {
    margin: 2rem;
    background-color: transparent;
    align-items: center;
    justify-content: end;
    margin-right: 0px;
    text-align: center;
    width: 90%;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    h3 {
      color: white;
      font-size: 2.5rem;
      text-align: center;
    }

    p {
      display: none;
    }
  }
`;
