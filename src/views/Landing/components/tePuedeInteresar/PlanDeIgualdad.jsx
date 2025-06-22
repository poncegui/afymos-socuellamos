import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Video from '../Video';
import { cardsIgualdadData } from './services/CardsData';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import portada from '../../assets/portada-igualdad.png';
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
  font-size: 24px;
  text-decoration: none;

  @media (max-width: 900px) {
    margin-top: 50px;
    font-size: 20px;
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
  background-color: ${props => props.color};
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
  color: ${props => (props.color === '#224464' ? '#c6b1c9' : '#224464')};
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
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const CardsInterestInformation = () => {
  return (
    <>
      <SeccionContainer>
        <Titulo>
          <CircleIcon />
          Conoce Nuestro Plan de Igualdad...
        </Titulo>
        <ContenedorCards>
          {cardsIgualdadData.map((card, index) => (
            <Card key={index} color={index === 0 ? '#81b71a' : card.color}>
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
              <TituloCard color={card.color}>{card.title}</TituloCard>
            </Card>
          ))}
        </ContenedorCards>
      </SeccionContainer>
      <Video
        changeIntoSquare
        coverImage={portada}
        sectionTitle="Compromiso con la Igualdad"
        videoSrc="https://www.youtube.com/embed/oPgPJpAv8yM"
        title="Promovemos la Igualdad"
        subtitle="La igualdad de trato y oportunidades es un derecho fundamental recogido en la Constitución Española."
        description="Trabajamos para eliminar cualquier forma de discriminación hacia las mujeres, garantizando su participación plena en todos los ámbitos de la vida: social, política, cultural y laboral. Nuestro objetivo es una sociedad más justa, democrática y solidaria."
      />
    </>
  );
};

export default CardsInterestInformation;
