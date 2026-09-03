import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../../globalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import urbanCamp01 from '../images/urban-camp-01-26.jpg';
import urbanCamp02 from '../images/urban-camp-02-26.jpg';
import urbanCamp03 from '../images/urban-camp-03-26.jpg';
import urbanCamp04 from '../images/urban-camp-04-26.jpg';
import urbanCamp05 from '../images/urban-camp-05-26.jpg';
import urbanCamp07 from '../images/urban-camp-07-26.jpg';
import urbanCamp08 from '../images/urban-camp-08-26.jpg';
import urbanCamp09 from '../images/urban-camp-09-26.jpg';
import urbanCamp10 from '../images/urban-camp-10-26.jpg';
import urbanCamp11 from '../images/urban-camp-11-26.jpg';
import urbanCamp12 from '../images/urban-camp-12-26.jpg';
import urbanCamp13 from '../images/urban-camp-13-26.jpg';
import urbanCamp14 from '../images/urban-camp-14-26.jpg';
import urbanCamp15 from '../images/urban-camp-15-26.jpg';

const images = [
  urbanCamp01,
  urbanCamp02,
  urbanCamp03,
  urbanCamp04,
  urbanCamp05,
  urbanCamp07,
  urbanCamp08,
  urbanCamp09,
  urbanCamp10,
  urbanCamp11,
  urbanCamp12,
  urbanCamp13,
  urbanCamp14,
  urbanCamp15,
];

const UrbanCampCollage = () => {
  const [modalIndex, setModalIndex] = useState(null);

  const openModal = index => {
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalIndex(null);
  };

  const nextImage = () => {
    setModalIndex(prev => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setModalIndex(prev => (prev - 1 + images.length) % images.length);
  };

  return (
    <CollageSection>
      <Container>
        <Header>
          <Title>✨ URBAN CAMP 2026 ☀️🏕️</Title>
          <Subtitle>
            Un verano lleno de diversión, aprendizaje y convivencia
          </Subtitle>
        </Header>

        <CollageGrid>
          {images.map((img, index) => (
            <ImageCard
              key={index}
              onClick={() => openModal(index)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && openModal(index)}
              aria-label={`Ver imagen ${index + 1} de ${images.length}`}
            >
              <img
                src={img}
                alt={`Urban Camp 2026 - ${index + 1}`}
                loading="lazy"
              />
              <Overlay>
                <ViewText>Ver imagen</ViewText>
              </Overlay>
            </ImageCard>
          ))}
        </CollageGrid>

        <Description>
          <p>
            URBAN CAMP está subvencionado por Junta de Comunidades de
            Castilla-La Mancha, Ayuntamiento de Socuéllamos y Fundación "la
            Caixa", haciendo posible un campamento inclusivo dirigido a jóvenes
            de entre 12 y 16 años.
          </p>
          <p>
            Gracias a todas las entidades colaboradoras: Policía Local, Plan
            Director de la Guardia Civil, TU SALUD, Ecoturismo Ruidera, y todos
            los técnicos del Ayuntamiento de Socuéllamos.
          </p>
          <p>
            ¡Gracias por formar parte de URBAN CAMP 2026! Nos vemos el próximo
            verano.
          </p>
        </Description>
      </Container>

      {modalIndex !== null && (
        <Modal onClick={closeModal} role="dialog" aria-modal="true">
          <ModalInner onClick={e => e.stopPropagation()}>
            <CloseButton onClick={closeModal} aria-label="Cerrar galería">
              <FontAwesomeIcon icon={faTimes} />
            </CloseButton>

            <NavButton left onClick={prevImage} aria-label="Imagen anterior">
              <FontAwesomeIcon icon={faChevronLeft} />
            </NavButton>

            <ImageArea>
              <img
                src={images[modalIndex]}
                alt={`Urban Camp 2026 - ${modalIndex + 1}`}
              />
              <Counter>
                {modalIndex + 1} / {images.length}
              </Counter>
            </ImageArea>

            <NavButton onClick={nextImage} aria-label="Imagen siguiente">
              <FontAwesomeIcon icon={faChevronRight} />
            </NavButton>

            <Thumbs>
              {images.map((src, i) => (
                <Thumb
                  key={i}
                  onClick={() => setModalIndex(i)}
                  $active={i === modalIndex}
                >
                  <img src={src} alt={`miniatura ${i + 1}`} />
                </Thumb>
              ))}
            </Thumbs>
          </ModalInner>
        </Modal>
      )}
    </CollageSection>
  );
};

export default UrbanCampCollage;

const CollageSection = styled.section`
  padding: 4rem 0 6rem;
  background: linear-gradient(180deg, #fbfbfd 0%, #f3eef6 100%);
  min-height: 100vh;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: calc(2.5rem * var(--fs, 1));
  font-weight: 800;
  color: #071c2f;
  margin: 0 0 1rem 0;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: calc(2rem * var(--fs, 1));
  }
`;

const Subtitle = styled.p`
  font-size: calc(1.2rem * var(--fs, 1));
  color: #5b6b76;
  font-weight: 600;
  margin: 0;

  @media (max-width: 768px) {
    font-size: calc(1rem * var(--fs, 1));
  }
`;

const CollageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
`;

const ImageCard = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(7, 28, 47, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: #f0f0f0;
  aspect-ratio: 4 / 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(198, 177, 201, 0.25);

    img {
      transform: scale(1.05);
    }
  }

  &:focus-within {
    outline: 3px solid #c6b1c9;
    outline-offset: 2px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(198, 177, 201, 0.85) 0%,
    rgba(142, 107, 156, 0.9) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ImageCard}:hover & {
    opacity: 1;
  }
`;

const ViewText = styled.span`
  color: white;
  font-weight: 700;
  font-size: calc(1rem * var(--fs, 1));
  text-align: center;
`;

const Description = styled.div`
  max-width: 800px;
  margin: 3rem auto 0;
  text-align: center;

  p {
    font-size: calc(1.1rem * var(--fs, 1));
    line-height: 1.75;
    color: #333;
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: calc(1rem * var(--fs, 1));
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(6, 10, 15, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalInner = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ImageArea = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    max-width: 100%;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  font-size: calc(1.3rem * var(--fs, 1));
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ left }) => (left ? 'left: 24px;' : 'right: 24px;')}
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  font-size: calc(1.3rem * var(--fs, 1));
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    ${({ left }) => (left ? 'left: 8px;' : 'right: 8px;')}
    width: 40px;
    height: 40px;
  }
`;

const Counter = styled.div`
  position: absolute;
  bottom: -48px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-weight: 700;
  font-size: calc(1.1rem * var(--fs, 1));
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  backdrop-filter: blur(10px);
`;

const Thumbs = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;
  overflow-x: auto;
  padding: 0.5rem 0.2rem;
  max-width: 100%;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;

    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }
`;

const Thumb = styled.button`
  background: transparent;
  border: 3px solid
    ${({ $active }) => ($active ? '#c6b1c9' : 'rgba(255, 255, 255, 0.2)')};
  padding: 4px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  img {
    height: 70px;
    width: auto;
    display: block;
    object-fit: cover;
    border-radius: 4px;
  }

  &:hover {
    border-color: #c6b1c9;
  }

  @media (max-width: 768px) {
    img {
      height: 50px;
    }
  }
`;
