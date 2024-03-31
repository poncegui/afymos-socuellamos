import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, } from 'react';

import styled from 'styled-components';

const ModalWrapper = styled.div`
  z-index: 500;
  display: ${props => (props.open ? 'flex' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;

const DonateButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #224464;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    background-color: #224464;
  }
`;

const Modal = ({ open, onClose }) => {
  const location = useLocation();

  useEffect(() => {
    if (open) {
      onClose();
    }
  }, [location, open, onClose]);

  return (
    <ModalWrapper open={open}>
      <ModalContent role="dialog" aria-modal="true">
        <CloseButton aria-label="Cerrar mensaje" onClick={onClose}>&times;</CloseButton>
        <h2>¡Apóyanos!</h2>
        <p>Tu contribución ayuda a mantener nuestro proyecto en marcha.</p>
        <DonateButton to="/donaciones" aria-label="ir a página de donaciones">Donar ahora</DonateButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
