import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { cardsServiceData } from "./services/CardsData";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const SeccionContainer = styled.section`
  width: 100%;
  padding-top: 5%;
`;

const Titulo = styled.h2`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  font-size: 24px;

  @media (max-width: 900px) {
    margin-bottom: 50px;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: black;
  }
`;

const ContenedorCards = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 900px) {
    margin-top: 3%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: auto;
  }
`;

const Card = styled.div`
  flex: 0 1 calc(33.333% - 16px);
  max-width: 260px;
  height: 400px;
  margin-bottom: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.color};
  margin-right: 16px;
  position: relative;

  @media (max-width: 900px) {
    flex: 0 1 calc(50% - 16px);
    margin-right: 8px;
    margin-bottom: 8px;
    height: 350px;
  }
`;

const TituloCard = styled.h3`
  color: ${(props) => (props.color === "#224464" ? "#c6b1c9" : "#224464")};
  font-size: 16px;
  text-align: center;
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  width: 100%;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Image = styled.img`
  width: 100px;
  max-height: 70%;
  margin-bottom: 10px;
`;

const LinkButton = styled.a`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 20px;
  transition: color 0.3s, transform 0.3s;
  text-decoration: none;
  color: inherit;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  &:hover {
    color: #071c2f;
    transform: rotate(90deg);
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Seccion = () => {
  return (
    <SeccionContainer>
      <Titulo>Te puede interesar...</Titulo>
      <ContenedorCards>
        {cardsServiceData.map((card, index) => (
          <Card key={index} color={index === 0 ? "#81b71a" : card.color}>
            <Image src={card.image} alt={card.alt} />
            <LinkButton
              aria-label="ir a la ruta seleccionada"
              href={card.url}
              target="_blank"
            >
              <StyledFontAwesomeIcon
                icon={faPlus}
                style={{
                  color: card.color === "#224464" ? "#c6b1c9" : "#071c2f",
                }}
              />
            </LinkButton>
            <TituloCard color={card.color}>{card.title}</TituloCard>
          </Card>
        ))}
      </ContenedorCards>
    </SeccionContainer>
  );
};

export default Seccion;