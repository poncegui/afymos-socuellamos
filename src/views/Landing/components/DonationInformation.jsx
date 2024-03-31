import React from "react";
import graph from "../assets/images-dontationInformation/grafico-2-removebg-preview.png";
import money from "../assets/images-dontationInformation/dinero-removebg-preview.png";
import percentage from "../assets/images-dontationInformation/80-removebg-preview.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 30vh;
  position: relative;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  background-color: #224464;
  @media  (max-width: 900px) {
    display: flex;
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media  (max-width: 900px) {
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
  @media  (max-width: 900px) {
    font-size: 18px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  font-style: italic;
  line-height: 1.5;
  @media  (max-width: 900px) {
    font-size: 12px;
  }
`;

const Margin = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  @media  (max-width: 900px) {
    height: 30px;
  }
`;

const DonateButton = styled.a`
  position: absolute;
  bottom: 25px;
  right: 70px;
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #224464;
  color: #f5f5f5;
  font-size: 16px;
  text-align: center;
  line-height: 60px;
  text-decoration: none;

  @media  (max-width: 900px) {
    display: none;
  }
  &:hover {
    background-color: #f5f5f5;
    color: #224464;
  }
`;

const DonationInformation = () => {
  return (
    <>
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
        <DonateButton href="/donaciones">Dona</DonateButton>
      </Container>
      <Margin />
    </>
  );
};

export default DonationInformation;
