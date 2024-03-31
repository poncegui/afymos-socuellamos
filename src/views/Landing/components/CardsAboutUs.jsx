import { faPlus, faSquare } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import { aboutUsData } from "./services/cardsAboutUsData";
import styled from "styled-components";

const SectionContainer = styled.section`
  width: 100%;
  padding-top: 5%;
`;

const Title = styled.h2`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  font-size: 24px;

  @media (max-width: 900px) {
    margin-bottom: 50px;
    font-size: 18px;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  margin: auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 180px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  position: relative;

  @media (max-width: 900px) {
    height: 150px;
  }
`;

const TitleCard = styled.h3`
  color: ${(props) => (props.color === "#224464" ? "#c6b1c9" : "#224464")};
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

const LinkButton = styled(Link)`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 20px;
  transition: color 0.3s, transform 0.3s;
  text-decoration: none;
  color: inherit;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  &:hover {
    color: #071c2f;
    transform: rotate(90deg);
  }
`;
const Margin = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  @media (max-width: 900px) {
    height: 30px;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const CircleIcon = styled(FontAwesomeIcon)`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  margin-right: 10px;
`;

const CardsAboutUs = () => {
  return (
    <>
      <SectionContainer>
        <Title>
          <CircleIcon icon={faSquare} size={15} color="#c6b1c9" />
          Sobre nosotros...
        </Title>
        <CardsContainer>
          {aboutUsData.map((card, index) => (
            <Card key={index} color={index === 0 ? "#81b71a" : card.color}>
              <TitleCard color={card.color}>{card.title}</TitleCard>
              <Image src={card.image} alt={card.alt} />
              <LinkButton
                aria-label="ir a la ruta seleccionada"
                to={card.url}
                target="_blank"
              >
                <StyledFontAwesomeIcon
                  icon={faPlus}
                  style={{
                    color: card.color === "#224464" ? "#c6b1c9" : "#071c2f",
                  }}
                />
              </LinkButton>
            </Card>
          ))}
        </CardsContainer>
      </SectionContainer>
      <Margin />
    </>
  );
};

export default CardsAboutUs;
