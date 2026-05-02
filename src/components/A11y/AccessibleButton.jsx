import React from 'react';
import styled from 'styled-components';
import { a11yColors } from '../../styles/a11yColors';

/**
 * Componente de botón accesible con contraste WCAG AA
 *
 * @param {Object} props
 * @param {('primary'|'secondary'|'outline')} props.variant - Variante del botón (default: 'primary')
 * @param {('small'|'medium'|'large')} props.size - Tamaño del botón (default: 'medium')
 * @param {boolean} props.disabled - Si el botón está deshabilitado
 * @param {string} props.className - Clases CSS adicionales
 * @param {React.ReactNode} props.children - Contenido del botón
 */
const AccessibleButton = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className,
  children,
  ...props
}) => {
  return (
    <StyledButton
      className={className}
      $variant={variant}
      $size={size}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 2px solid transparent;
  transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;

  /* Tamaño del botón */
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return `
          padding: 8px 16px;
          font-size: 0.875rem;
        `;
      case 'large':
        return `
          padding: 14px 28px;
          font-size: 1.125rem;
        `;
      case 'medium':
      default:
        return `
          padding: 10px 20px;
          font-size: 1rem;
        `;
    }
  }}

  /* Variantes con contraste accesible */
  ${({ $variant, disabled }) => {
    if (disabled) {
      return `
        background: ${a11yColors.gray.border};
        color: ${a11yColors.gray.darkOnLight};
        cursor: not-allowed;
        opacity: 0.6;
      `;
    }

    switch ($variant) {
      case 'primary':
        return `
          background: ${a11yColors.primary.dark};
          color: ${a11yColors.background.white};
          border-color: ${a11yColors.primary.dark};

          &:hover:not(:disabled) {
            background: ${a11yColors.primary.darker};
            border-color: ${a11yColors.primary.darker};
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(7, 28, 47, 0.2);
          }

          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;

      case 'secondary':
        return `
          background: ${a11yColors.purple.bgWithLightText};
          color: ${a11yColors.background.white};
          border-color: ${a11yColors.purple.bgWithLightText};

          &:hover:not(:disabled) {
            background: ${a11yColors.purple.darkerOnLight};
            border-color: ${a11yColors.purple.darkerOnLight};
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(90, 55, 98, 0.25);
          }

          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;

      case 'outline':
        return `
          background: transparent;
          color: ${a11yColors.purple.darkOnLight};
          border-color: ${a11yColors.purple.darkOnLight};

          &:hover:not(:disabled) {
            background: ${a11yColors.purple.darkOnLight};
            color: ${a11yColors.background.white};
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(107, 66, 117, 0.2);
          }

          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;

      default:
        return '';
    }
  }}

  /* Foco accesible con alto contraste */
  &:focus-visible {
    outline: 3px solid ${a11yColors.focus};
    outline-offset: 3px;
    border-radius: 8px;
  }

  /* Estado disabled */
  &:disabled {
    cursor: not-allowed;
  }
`;

export default AccessibleButton;
