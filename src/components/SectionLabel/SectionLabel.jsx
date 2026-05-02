import styled from 'styled-components';
import { a11yColors } from '../../styles/a11yColors';

/**
 * SectionLabel - Componente reutilizable para etiquetas de sección
 *
 * Cumple con los requisitos de accesibilidad:
 * - Tamaño mínimo de fuente: 14px (0.875rem)
 * - Responsive con la variable --fs
 * - Contraste WCAG AA (7.02:1 sobre fondos claros)
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
  font-size: calc(0.875rem * var(--fs, 1)); /* 14px mínimo WCAG */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${({ $inverse }) =>
    $inverse
      ? a11yColors.purple.darkOnLight    // #6b4275 sobre fondo claro (7.02:1)
      : a11yColors.purple.lightOnDark};  // #e8d4eb sobre fondo oscuro (11.45:1)
  border-left: 3px solid ${({ $inverse }) =>
    $inverse
      ? a11yColors.purple.darkOnLight
      : a11yColors.purple.lightOnDark};
  padding-left: 0.6rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: calc(0.875rem * var(--fs, 1)); /* Mantener 14px en móvil (WCAG) */
  }
`;

export default SectionLabel;
