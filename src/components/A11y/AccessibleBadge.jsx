import React from 'react';
import styled from 'styled-components';
import { a11yColors } from '../../styles/a11yColors';

/**
 * Componente de badge/etiqueta accesible con contraste WCAG AA
 *
 * @param {Object} props
 * @param {('purple'|'gray'|'info'|'success'|'warning'|'error')} props.variant - Variante del badge (default: 'purple')
 * @param {('small'|'medium'|'large')} props.size - Tamaño del badge (default: 'medium')
 * @param {string} props.className - Clases CSS adicionales
 * @param {React.ReactNode} props.children - Contenido del badge
 */
const AccessibleBadge = ({
  variant = 'purple',
  size = 'medium',
  className,
  children,
  ...props
}) => {
  return (
    <StyledBadge
      className={className}
      $variant={variant}
      $size={size}
      {...props}
    >
      {children}
    </StyledBadge>
  );
};

const StyledBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;

  /* Tamaño del badge */
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return `
          padding: 4px 8px;
          font-size: 0.75rem;
        `;
      case 'large':
        return `
          padding: 10px 16px;
          font-size: 1rem;
        `;
      case 'medium':
      default:
        return `
          padding: 6px 12px;
          font-size: 0.875rem;
        `;
    }
  }}

  /* Colores según variante (todos con contraste WCAG AA) */
  ${({ $variant }) => {
    switch ($variant) {
      case 'purple':
        return `
          background: ${a11yColors.purple.bgWithLightText};
          color: ${a11yColors.background.white};
          border: 2px solid ${a11yColors.purple.bgWithLightText};
        `;
      case 'gray':
        return `
          background: ${a11yColors.gray.darkOnLight};
          color: ${a11yColors.background.white};
          border: 2px solid ${a11yColors.gray.darkOnLight};
        `;
      case 'info':
        return `
          background: ${a11yColors.state.info.bg};
          color: ${a11yColors.state.info.text};
          border: 2px solid ${a11yColors.state.info.border};
        `;
      case 'success':
        return `
          background: ${a11yColors.state.success.bg};
          color: ${a11yColors.state.success.text};
          border: 2px solid ${a11yColors.state.success.border};
        `;
      case 'warning':
        return `
          background: ${a11yColors.state.warning.bg};
          color: ${a11yColors.state.warning.text};
          border: 2px solid ${a11yColors.state.warning.border};
        `;
      case 'error':
        return `
          background: ${a11yColors.state.error.bg};
          color: ${a11yColors.state.error.text};
          border: 2px solid ${a11yColors.state.error.border};
        `;
      default:
        return '';
    }
  }}

  /* Foco accesible */
  &:focus-visible {
    outline: 3px solid ${a11yColors.focus};
    outline-offset: 3px;
    border-radius: 8px;
  }

  /* Hover suave */
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export default AccessibleBadge;
