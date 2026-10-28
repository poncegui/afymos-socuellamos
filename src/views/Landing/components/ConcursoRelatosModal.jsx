import { useEffect, useState } from "react";
import styled from "styled-components";
import { AccessiblePDFLink } from "../../../components/A11y";
import pdfBases from "./pdf/docs_pdf/bases-concurso-relatos-2026.pdf";
import pdfLecturaFacil from "./pdf/docs_pdf/bases-lectura-facil-2026.pdf";
import concursoImage from "../assets/images-noticias/concurso-relatos-2026/concurso-relatos.png";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  z-index: 10000;
`;

const ModalWrapper = styled.div`
  position: relative;
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  text-align: center;
  overflow-y: auto;
  max-height: 90vh;
  z-index: 10001;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: calc(30px * var(--fs, 1));
  cursor: pointer;
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: #e74c3c;
  }
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 15px;
  font-size: calc(2.2rem * var(--fs, 1));
  color: #2c3e50;
  line-height: 1.3;
`;

const Subtitle = styled.h3`
  margin: 10px 0;
  font-size: calc(1.5rem * var(--fs, 1));
  color: #e74c3c;
  font-weight: 600;
`;

const Description = styled.p`
  margin: 15px 0;
  font-size: calc(1.1rem * var(--fs, 1));
  color: #555;
  line-height: 1.6;
`;

const Deadline = styled.div`
  background: #fff3cd;
  border-left: 4px solid #ffc107;
  padding: 15px;
  margin: 20px 0;
  border-radius: 4px;
`;

const DeadlineText = styled.p`
  margin: 0;
  font-size: calc(1.2rem * var(--fs, 1));
  color: #856404;
  font-weight: 600;
`;

const PDFLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 25px;
`;

const ImageWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

const ContestImage = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ConcursoRelatosModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Comprobar si el modal ya se mostró en esta sesión
    const modalShown = sessionStorage.getItem("concursoRelatosModalShown");

    if (!modalShown) {
      // Mostrar el modal después de un pequeño delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem("concursoRelatosModalShown", "true");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <Overlay onClick={handleClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose} aria-label="Cerrar">&times;</CloseButton>

        <ImageWrapper>
          <ContestImage
            src={concursoImage}
            alt="Ilustración de dos personas escribiendo y leyendo para el concurso de relatos cortos"
          />
        </ImageWrapper>

        <Title>XV Concurso de Relatos Cortos para Personas con Discapacidad Intelectual</Title>

        <Subtitle>Un Sueño que Quiero Cumplir</Subtitle>

        <Description>
          Participa en nuestro concurso literario y comparte tu creatividad.
          Todos tenemos sueños que nos gustaría cumplir: un viaje, aprender algo nuevo,
          vivir una experiencia especial, encontrar un trabajo o un amor.
        </Description>

        <Deadline>
          <DeadlineText>
            ⏰ Plazo de presentación: hasta el 6 de noviembre de 2026
          </DeadlineText>
        </Deadline>

        <Description>
          <strong>Premios:</strong> 70€ + diploma por categoría
          <br />
          <strong>Gala de entrega:</strong> 21 de noviembre de 2026
        </Description>

        <PDFLinksContainer>
          <AccessiblePDFLink
            href={pdfBases}
            target="_blank"
            rel="noopener noreferrer"
            fileSize="332 KB"
          >
            📄 Descargar Bases del Concurso
          </AccessiblePDFLink>

          <AccessiblePDFLink
            href={pdfLecturaFacil}
            target="_blank"
            rel="noopener noreferrer"
            fileSize="4.3 MB"
          >
            📖 Descargar Bases en Lectura Fácil
          </AccessiblePDFLink>
        </PDFLinksContainer>
      </ModalWrapper>
    </Overlay>
  ) : null;
};

export default ConcursoRelatosModal;
