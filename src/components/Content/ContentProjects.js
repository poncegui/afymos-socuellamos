import styled from "styled-components";
import AccessibilityControls from "../Accessibility/AccessibilityControls";
import { useFontScale } from "../../hooks/useFontScale";

// Función para parsear texto con negrita
const parseText = (text) => {
  if (!text) return text;

  // Reemplazar **texto** con <strong>texto</strong>
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    // Manejar saltos de línea
    return part.split('\n').map((line, lineIndex) => (
      <span key={`${index}-${lineIndex}`}>
        {line}
        {lineIndex < part.split('\n').length - 1 && <br />}
      </span>
    ));
  });
};

export const ContentProjects = ({
  topLine,
  headline,
  description,
  img,
  alt,
  reverse,
  inverse,
  id,
}) => {
  useFontScale();

  return (
    <Section
      id={id}
      $inverse={inverse}
      role="region"
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <Inner $reverse={reverse}>
        <TextCol>
          <Label $inverse={inverse}>{topLine.text}</Label>
          <Heading id={id ? `${id}-heading` : undefined} $inverse={inverse}>
            {parseText(headline)}
          </Heading>
          <Body $inverse={inverse}>{parseText(description)}</Body>
          <AccessibilityControls 
            text={description} 
            inverse={inverse}
          />
        </TextCol>

        <ImgCol>
          <StyledImg src={img} alt={alt} loading="lazy" />
        </ImgCol>
      </Inner>
    </Section>
  );
};

/* ─── Styles ─────────────────────────────────────────────────────────────── */

const Section = styled.section`
  background: ${({ $inverse }) => ($inverse ? "#f9f8fb" : "#071c2f")};
  padding: 4rem clamp(1.25rem, 5%, 4rem);
  transition: background 0.3s ease;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  align-items: center;
  gap: 3.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const TextCol = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.span`
  display: block;
  font-size: calc(0.72rem * var(--fs, 1));
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  /* Mejorado contraste: #224464 tiene mejor ratio sobre fondo claro */
  color: ${({ $inverse }) => ($inverse ? "#1a3349" : "#c6b1c9")};
  border-left: 3px solid ${({ $inverse }) => ($inverse ? "#c6b1c9" : "rgba(198,177,201,0.5)")};
  padding-left: 0.6rem;
  line-height: 1.5;
`;

const Heading = styled.h2`
  font-size: calc(clamp(1.15rem, 2.5vw, 1.6rem) * var(--fs, 1));
  font-weight: 700;
  line-height: 1.3;
  color: ${({ $inverse }) => ($inverse ? "#071c2f" : "#ffffff")};
  margin: 0;

  strong {
    font-weight: 800;
    /* Contraste WCAG AA: #5a3a5f (oscuro) sobre fondo claro, #c6b1c9 sobre oscuro */
    color: ${({ $inverse }) => ($inverse ? "#5a3a5f" : "#c6b1c9")};
  }
`;

const Body = styled.p`
  font-size: calc(clamp(0.88rem, 1.5vw, 0.97rem) * var(--fs, 1));
  line-height: 1.8;
  /* Cambio de #555 a #333 para mejorar contraste WCAG AA (4.5:1 mínimo) */
  color: ${({ $inverse }) => ($inverse ? "#333" : "rgba(255,255,255,0.95)")};
  margin: 0;

  strong {
    font-weight: 700;
    color: ${({ $inverse }) => ($inverse ? "#071c2f" : "#ffffff")};
  }

  /* Mejor formato para listas */
  ul, ol {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  br {
    display: block;
    margin-bottom: 0.5rem;
  }
`;

const ImgCol = styled.div`
  flex: 0 0 clamp(240px, 40%, 440px);
  align-self: stretch;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex: unset;
    width: 100%;
    max-width: 480px;
    align-self: auto;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  max-height: 380px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  display: block;
`;
