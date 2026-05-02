import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { cardsServiceData } from './services/CardsData';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

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
  font-size: calc(24px * var(--fs, 1));
  text-decoration: none;

  @media (max-width: 900px) {
    margin-top: 50px;
    font-size: calc(20px * var(--fs, 1));
    margin-bottom: 40px;
  }
`;

const CircleIcon = styled.div`
  position: absolute;
  top: 50%;
  left: -30px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #224464;

  @media (max-width: 900px) {
    width: 16px;
    height: 16px;
  }
`;

const ContenedorCards = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: start;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 80%;
    margin: 3% auto 0 auto;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 90%;
    gap: 16px;
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
  background-color: ${props => props.color};
  margin-right: 16px;
  position: relative;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1024px) {
    flex: 1;
    max-width: 100%;
    height: 350px;
    margin-right: 0;
  }

  @media (max-width: 600px) {
    height: auto;
    min-height: 320px;
    padding: 18px;
    margin-bottom: 0;
  }
`;

const TituloCard = styled.h3`
  color: ${props => {
    // Use appropriate text color based on background for WCAG AA compliance
    const bgColor = props.$bgColor || props.color;
    if (bgColor === '#224464') return '#fff'; // Dark blue background → white text
    // Green and light backgrounds need dark text for proper contrast
    return '#000'; // Black text for best contrast on green/light backgrounds
  }};
  font-size: calc(16px * var(--fs, 1));
  text-align: center;
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  width: 100%;
  font-weight: 700;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    font-size: calc(14px * var(--fs, 1));
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
  font-size: calc(20px * var(--fs, 1));
  transition: color 0.3s, transform 0.3s;
  text-decoration: none;
  color: inherit;

  @media (max-width: 768px) {
    font-size: calc(24px * var(--fs, 1));
  }

  &:hover {
    color: #071c2f;
    transform: rotate(90deg);
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: calc(30px * var(--fs, 1));

  @media (max-width: 768px) {
    font-size: calc(26px * var(--fs, 1));
  }
`;

const CardsInterestInformation = () => {
  return (
    <SeccionContainer>
      <Titulo>
        <CircleIcon />
        Te puede interesar...
      </Titulo>
      <ContenedorCards>
        {cardsServiceData.map((card, index) => {
          const bgColor = index === 0 ? '#81b71a' : card.color;
          return (
            <Card key={index} color={bgColor}>
              <Image src={card.image} alt={card.alt} />
              <LinkButton
                aria-label="ir a la ruta seleccionada"
                href={card.url}
                target="_blank"
                download={card.download}
              >
                <StyledFontAwesomeIcon
                  icon={faPlus}
                  style={{
                    color: card.color === '#224464' ? '#c6b1c9' : '#071c2f',
                  }}
                />
              </LinkButton>
              <TituloCard $bgColor={bgColor} color={card.color}>
                {card.title}
              </TituloCard>
            </Card>
          );
        })}
      </ContenedorCards>
    </SeccionContainer>
  );
};

export default CardsInterestInformation;
