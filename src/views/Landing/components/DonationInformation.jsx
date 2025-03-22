import { Link } from "react-router-dom";
import React from "react";
import graph from "../assets/images-dontationInformation/grafico-2-removebg-preview.png";
import money from "../assets/images-dontationInformation/dinero-removebg-preview.png";
import percentage from "../assets/images-dontationInformation/80-removebg-preview.png";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  background-color: #224464;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const ImageGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 300px;
`;

const StyledImage = styled.img`
  width: 120px;
  height: auto;
  object-fit: contain;
`;

const Content = styled.div`
  flex: 1;
  min-width: 300px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #f5f5f5;
  margin-bottom: 1.5rem;
`;

const DonateButton = styled(Link)`
  display: inline-block;
  background-color: #f5f5f5;
  color: #224464;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.75rem 2rem;
  border-radius: 40px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #071c2f;
    color: #fff;
    transform: scale(1.05);
  }

  &:focus-visible {
    outline: 3px solid #ffbf47;
  }
`;

const DonationInformation = () => {
  return (
    <Section aria-labelledby="donation-title">
      <ImageGroup>
        <StyledImage src={graph} alt="Gráfico circular mostrando el 80%" />
        <StyledImage src={money} alt="Pila de monedas doradas" />
        <StyledImage src={percentage} alt="Número 80 en grande indicando porcentaje" />
      </ImageGroup>
      <Content>
        <Title id="donation-title">¿Sabías que hasta los primeros 250€ te deduces el 80%?</Title>
        <Text>Si donas 250€ te desgravas 200€</Text>
        <DonateButton to="/donaciones" aria-label="Ir a la página de donaciones">
          Dona ahora
        </DonateButton>
      </Content>
    </Section>
  );
};

export default DonationInformation;
