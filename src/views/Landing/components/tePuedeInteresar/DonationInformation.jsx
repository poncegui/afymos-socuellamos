import React from "react";
import graph from "./assets/grafico-2-removebg-preview.png";
import money from "./assets/dinero-removebg-preview.png";
import percentage from "./assets/80-removebg-preview.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 30vh;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  background-color: #224464;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 900px) {
    width: 50%;
    height: 50%;
    ${({ id }) => id === "1" && "display: none;"}
  }
`;

const ContentContainer = styled.div`
  width: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: "#f5f5f5";
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  @media screen and (max-width: 900px) {
    font-size: 18px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  font-style: italic;
  line-height: 1.5;
  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
`;

const DonationInformation = () => {
  return (
    <Container>
      <ImageContainer>
        <Image id="1" src={graph} alt="gráfico circular al 80%" />
        <Image src={money} alt="pila de monedas" />
        <Image src={percentage} alt="porcentaje de ahorro" />
      </ImageContainer>
      <ContentContainer>
        <Title>¿Sabías que hasta los primeros 250€ te deduces el 80%?</Title>
        <Text>Si donas 250€ te devuelven 200€</Text>
      </ContentContainer>
    </Container>
  );
};

export default DonationInformation;
