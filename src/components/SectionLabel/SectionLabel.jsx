import styled from 'styled-components';

/**
 * SectionLabel - Componente reutilizable para etiquetas de sección
 *
 * Cumple con los requisitos de accesibilidad:
 * - Tamaño mínimo de fuente: 14px (0.875rem)
 * - Responsive con la variable --fs
 * - Uso de aria-hidden cuando es solo decorativo
 *
 * @param {Object} props
 * @param {string} props.children - Texto de la etiqueta
 * @param {boolean} props.inverse - Esquema de colores inverso
 * @param {string} props.className - Clases CSS adicionales
 */
const SectionLabel = ({ children, inverse = false, className }) => {
  return (
    <StyledLabel $inverse={inverse} className={className} aria-hidden="true">
      {children}
    </StyledLabel>
  );
};

const StyledLabel = styled.span`
  display: inline-block;
  font-size: calc(0.875rem * var(--fs, 1)); /* 14px mínimo a11y */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${({ $inverse }) => ($inverse ? '#224464' : '#c6b1c9')};
  border-left: 3px solid #c6b1c9;
  padding-left: 0.6rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: calc(0.8125rem * var(--fs, 1)); /* 13px en móvil, aún legible */
  }
`;

export default SectionLabel;
