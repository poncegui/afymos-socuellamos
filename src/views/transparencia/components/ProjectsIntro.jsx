import styled from "styled-components";
import { FontAwesomeIcon, faFileLines, faScaleBalanced, faHandshake, faShieldHeart, faPeopleGroup, faChartLine, faFileContract, faFileInvoiceDollar } from "../../../utils/icons";
import doc12 from "./assets/docs_transparencia/cuentas-anuales-2024.pdf";
import doc4 from "./assets/docs_transparencia/plan-estrategico-2023-2024.pdf";
import doc6 from "./assets/docs_transparencia/plan-voluntariado-2025-2027.pdf";
import doc9 from "./assets/docs_transparencia/codigoEtico.pdf";
import auditoriaVvdaApoyo from "./assets/docs_transparencia/auditoria-vvda-apoyo.pdf";
import auditoria from "./assets/docs_transparencia/auditoria.pdf";
import memoriaActividades from "./assets/docs_transparencia/memoria-actividades.pdf";
import acuerdo from "../../Landing/components/tePuedeInteresar/assets/pdf/acuerdo.pdf";
import docCompromiso from "../../Landing/components/tePuedeInteresar/assets/pdf/compromiso.pdf";
import planIgualdad from "../../Landing/components/tePuedeInteresar/assets/pdf/planIgualdad.pdf";
import protocolo from "../../Landing/components/tePuedeInteresar/assets/pdf/protocoloPrevencion.pdf";
import diversesDoc from "../../Landing/components/tePuedeInteresar/assets/pdf/diverses.pdf";

const DescargaTransparencia = () => {
  const documents = [
    {
      id: 1,
      url: doc4,
      name: 'Plan Estratégico: "En ruta"',
      icon: faChartLine,
      color: "#224464",
      category: "Planificación",
      description: "Plan estratégico de la organización"
    },
    {
      id: 2,
      url: doc6,
      name: "Plan de Voluntariado: 2025-2027",
      icon: faPeopleGroup,
      color: "#81b71a",
      category: "Planificación",
      description: "Plan de voluntariado trienal"
    },
    {
      id: 3,
      url: doc9,
      name: "Código Ético",
      icon: faScaleBalanced,
      color: "#c6b1c9",
      category: "Normativa",
      description: "Código ético organizacional"
    },
    {
      id: 4,
      url: doc12,
      name: "Cuentas Anuales 2024",
      icon: faFileInvoiceDollar,
      color: "#224464",
      category: "Económico",
      description: "Cuentas anuales del ejercicio 2024"
    },
    {
      id: 5,
      url: planIgualdad,
      name: "Plan de Igualdad",
      icon: faScaleBalanced,
      color: "#c6b1c9",
      category: "Igualdad",
      description: "Plan de igualdad de género"
    },
    {
      id: 6,
      url: protocolo,
      name: "Protocolo para Prevención y Actuación",
      icon: faShieldHeart,
      color: "#81b71a",
      category: "Igualdad",
      description: "Protocolo de prevención y actuación"
    },
    {
      id: 7,
      url: docCompromiso,
      name: "Compromiso con la Igualdad",
      icon: faHandshake,
      color: "#224464",
      category: "Igualdad",
      description: "Documento de compromiso con la igualdad"
    },
    {
      id: 8,
      url: acuerdo,
      name: "Acuerdo Igualdad",
      icon: faFileContract,
      color: "#c6b1c9",
      category: "Igualdad",
      description: "Acuerdo de igualdad institucional"
    },
    {
      id: 9,
      url: diversesDoc,
      name: "Diverses",
      icon: faFileLines,
      color: "#81b71a",
      category: "Igualdad",
      description: "Documento Diverses"
    },
    {
      id: 10,
      url: auditoria,
      name: "Informe de Auditoría Centro de Día",
      icon: faFileInvoiceDollar,
      color: "#224464",
      category: "Auditoría",
      description: "Informe de auditoría del centro de día"
    },
    {
      id: 11,
      url: auditoriaVvdaApoyo,
      name: "Auditoría Vivienda de Apoyo",
      icon: faFileInvoiceDollar,
      color: "#c6b1c9",
      category: "Auditoría",
      description: "Auditoría de vivienda de apoyo"
    },
    {
      id: 12,
      url: memoriaActividades,
      name: "Memoria de Actividades",
      icon: faFileLines,
      color: "#81b71a",
      category: "Informes",
      description: "Memoria anual de actividades"
    },
  ];

  return (
    <TransparenciaSection aria-label="Sección de documentos de transparencia">
      <Header>
        <Title id="transparencia-title">Documentos de Transparencia</Title>
        <Subtitle id="transparencia-subtitle">
          Accede a toda nuestra documentación oficial en formato PDF
        </Subtitle>
      </Header>

      <DocumentsGrid
        role="list"
        aria-labelledby="transparencia-title"
        aria-describedby="transparencia-subtitle"
      >
        {documents.map((doc) => (
          <DocumentCard
            key={doc.id}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            $color={doc.color}
            role="listitem"
            aria-label={`Descargar ${doc.name}, ${doc.description}. Se abre en nueva pestaña como documento PDF de categoría ${doc.category}`}
            title={`${doc.name} - PDF`}
          >
            <IconWrapper $color={doc.color} aria-hidden="true">
              <FontAwesomeIcon icon={doc.icon} />
            </IconWrapper>
            <Category aria-label={`Categoría: ${doc.category}`}>
              {doc.category}
            </Category>
            <DocumentName as="h2">{doc.name}</DocumentName>
            <DownloadIndicator>
              <VisuallyHidden>Descargar PDF: </VisuallyHidden>
              <span aria-hidden="true">Ver documento</span>
              <Arrow aria-hidden="true">→</Arrow>
            </DownloadIndicator>
          </DocumentCard>
        ))}
      </DocumentsGrid>
    </TransparenciaSection>
  );
};

export default DescargaTransparencia;

// Utilidad para ocultar visualmente pero mantener accesible para lectores de pantalla
const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const TransparenciaSection = styled.section`
  background: linear-gradient(135deg, #f9f8fb 0%, #ffffff 100%);
  padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem);
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: clamp(2rem, 4vw, 3rem) clamp(1rem, 2.5vw, 1.5rem);
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: clamp(2rem, 4vw, 3rem);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: #071c2f;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.2;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #4a4a4a;
  font-weight: 400;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;
`;

const DocumentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: clamp(1.25rem, 2.5vw, 2rem);
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 clamp(0.5rem, 2vw, 1rem);

  /* Desktop: 4 columnas */
  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  /* Laptop/Tablet landscape: 3 columnas */
  @media (min-width: 900px) and (max-width: 1399px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Tablet portrait: 2 columnas */
  @media (min-width: 600px) and (max-width: 899px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile: 1 columna */
  @media (max-width: 599px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const DocumentCard = styled.a`
  background: #ffffff;
  border-radius: 12px;
  padding: clamp(1.25rem, 3vw, 2rem);
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 1.5vw, 1rem);
  border: 2px solid transparent;
  min-height: 220px;

  /* Touch target mínimo 44x44px para accesibilidad */
  min-width: 44px;
  min-height: 44px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.$color || '#224464'};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    border-color: ${props => props.$color || '#224464'};

    &::before {
      transform: scaleX(1);
    }
  }

  &:focus-visible {
    outline: 3px solid ${props => props.$color || '#224464'};
    outline-offset: 3px;
  }

  &:active {
    transform: translateY(-4px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover,
    &:focus-visible {
      transform: none;
    }

    &::before {
      transition: none;
    }
  }

  @media (max-width: 599px) {
    min-height: 200px;
    padding: 1.5rem;
  }
`;

const IconWrapper = styled.div`
  width: clamp(50px, 10vw, 64px);
  height: clamp(50px, 10vw, 64px);
  border-radius: 12px;
  background: ${props => props.$color ? `${props.$color}20` : '#22446420'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  transition: all 0.25s ease;
  flex-shrink: 0;

  svg {
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: ${props => props.$color || '#224464'};
    transition: transform 0.25s ease;
  }

  ${DocumentCard}:hover &,
  ${DocumentCard}:focus-visible & {
    background: ${props => props.$color || '#224464'};

    svg {
      color: #ffffff;
      transform: scale(1.1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    svg {
      transition: none;
    }
  }
`;

const Category = styled.span`
  font-size: clamp(0.75rem, 1.5vw, 0.875rem);
  color: #666666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  line-height: 1.2;
`;

const DocumentName = styled.h2`
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  color: #071c2f;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
  flex-grow: 1;
  word-wrap: break-word;
  hyphens: auto;

  @media (max-width: 599px) {
    font-size: 1.1rem;
  }
`;

const DownloadIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: clamp(0.75rem, 1.5vw, 1rem);
  border-top: 1px solid #e8e8e8;
  gap: 0.5rem;

  span {
    font-size: clamp(0.875rem, 1.5vw, 1rem);
    color: #666666;
    font-weight: 500;
    line-height: 1.3;
  }
`;

const Arrow = styled.span`
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  color: #071c2f;
  transition: transform 0.25s ease;
  flex-shrink: 0;

  ${DocumentCard}:hover &,
  ${DocumentCard}:focus-visible & {
    transform: translateX(4px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    ${DocumentCard}:hover &,
    ${DocumentCard}:focus-visible & {
      transform: none;
    }
  }
`;
