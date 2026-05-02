// Modal.js
import { useEffect, useState } from "react";
import pdf from "./urban-camp-2025.pdf";
import styled from "styled-components";
import urbanCamp from "./CARTEL URBAN CAMP 2025.png";
import { AccessiblePDFLink } from "../../../../components/A11y";

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
  padding: 10px;
  z-index: 10000;
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
  overflow: hidden;
  z-index: 1001;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: calc(30px * var(--fs, 1));
  cursor: pointer;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin-top: 0;
  font-size: calc(3rem * var(--fs, 1));
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  display: block;
  margin: 20px auto;
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
        <Title>Urban Camp 2025</Title>
        <Image src={urbanCamp} alt="Cartel informativo del campamento urbano 2025" />
        <AccessiblePDFLink href={pdf} download fileSize="1.2 MB">
          Información del Campamento Urbano 2025
        </AccessiblePDFLink>
      </ModalWrapper>
    </Overlay>
  ) : null;
};

export default Modal;
