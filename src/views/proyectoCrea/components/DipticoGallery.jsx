import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const DipticoGallery = ({ images = [], isOpen, onClose }) => {
  const [index, setIndex] = useState(0);
  if (!isOpen) return null;

  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setIndex(i => (i + 1) % images.length);

  return (
    <Overlay role="dialog" aria-modal="true">
      <CloseButton onClick={onClose} aria-label="Cerrar galería">
        <FontAwesomeIcon icon={faTimes} />
      </CloseButton>

      <NavButton left onClick={prev} aria-label="Anterior">
        <FontAwesomeIcon icon={faChevronLeft} />
      </NavButton>

      <ImageArea>
        <img src={images[index]} alt={`Díptico ${index + 1}`} />
        <Counter>
          {index + 1} / {images.length}
        </Counter>
      </ImageArea>

      <NavButton onClick={next} aria-label="Siguiente">
        <FontAwesomeIcon icon={faChevronRight} />
      </NavButton>

      <Thumbs>
        {images.map((src, i) => (
          <Thumb key={i} onClick={() => setIndex(i)} $active={i === index}>
            <img src={src} alt={`miniatura ${i + 1}`} />
          </Thumb>
        ))}
      </Thumbs>
    </Overlay>
  );
};

export default DipticoGallery;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(6, 10, 15, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ImageArea = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-height: 72vh;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  }
`;

const Thumbs = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: 1rem;
  overflow-x: auto;
  padding: 0.5rem 0.2rem;
`;

const Thumb = styled.button`
  background: transparent;
  border: 2px solid ${({ $active }) => ($active ? '#0b5d79' : 'transparent')};
  padding: 4px;
  border-radius: 6px;
  cursor: pointer;

  img {
    height: 64px;
    display: block;
    object-fit: cover;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: rgba(255, 255, 255, 0.08);
  border: none;
  color: #fff;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ left }) => (left ? 'left: 16px;' : 'right: 16px;')}
  background: rgba(255, 255, 255, 0.06);
  border: none;
  color: #fff;
  padding: 0.6rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
`;

const Counter = styled.div`
  position: absolute;
  bottom: -36px;
  color: #fff;
  font-weight: 700;
`;
