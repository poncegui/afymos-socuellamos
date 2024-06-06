// Modal.js
import React, { useEffect, useState } from 'react';

import pdf from './urban-camp-2024.pdf';
import styled from 'styled-components';
import urbanCamp from './CARTEL URBAN CAMP 2024.png';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;  // Añadir padding para asegurar espacio en dispositivos pequeños
  z-index: 10000;  // Añadir z-index alto para asegurar que la modal esté por encima de otros elementos
`;

const ModalWrapper = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  overflow: hidden;  // Asegurar que el contenido no se desborde
  z-index: 1001;  // Asegurar que el contenido del modal esté por encima del overlay
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 30px;  // Aumentar el tamaño del botón de cerrar
  cursor: pointer;
  margin-bottom:1rem;
`;

const Title = styled.h2`
  margin-top: 0;
  font-size: 3rem;  // Tamaño de fuente relativo
`;

const Image = styled.img`
  width: 100%;  // Ajustar la imagen al ancho del modal
  max-width: 300px;
  height: auto;
  display: block;
  margin: 20px auto;
`;

const DownloadButton = styled.a`
  display: block;
  margin-top: 2rem;  // Añadir margen superior
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 2rem;  // Tamaño de fuente relativo
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const Modal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <Overlay>
      <ModalWrapper>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        <Title>Urban Camp 2024</Title>
        <Image src={urbanCamp} alt="Descripción de la imagen" />
        <DownloadButton href={pdf} download="documento.pdf">
          Descargar información campamento
        </DownloadButton>
      </ModalWrapper>
    </Overlay>
  ) : null;
};

export default Modal;
