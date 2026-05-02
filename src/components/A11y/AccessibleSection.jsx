import React from 'react';
import styled from 'styled-components';
import { a11yColors } from '../../styles/a11yColors';

/**
 * Componente de sección accesible con fondos y contraste WCAG AA
 *
 * @param {Object} props
 * @param {('dark'|'light'|'purple')} props.variant - Variante de la sección (default: 'light')
 * @param {string} props.padding - Padding de la sección
 * @param {string} props.margin - Margin de la sección
 * @param {string} props.className - Clases CSS adicionales
 * @param {React.ReactNode} props.children - Contenido de la sección
 */
const AccessibleSection = ({
  variant = 'light',
  padding = '60px 0',
  margin,
  className,
  children,
  ...props
}) => {
  return (
    <StyledSection
      className={className}
      $variant={variant}
      $padding={padding}
      $margin={margin}
      {...props}
    >
      {children}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  /* Fondo según la variante con contraste accesible */
  background: ${({ $variant }) => {
    switch ($variant) {
      case 'dark':
        return a11yColors.primary.dark;
      case 'purple':
        return a11yColors.purple.bgWithDarkText;
      case 'light':
      default:
        return a11yColors.background.white;
    }
  }};

  /* Color de texto por defecto según el fondo */
  color: ${({ $variant }) => {
    switch ($variant) {
      case 'dark':
        return a11yColors.purple.lightOnDark;
      case 'purple':
        return a11yColors.primary.dark;
      case 'light':
      default:
        return a11yColors.primary.dark;
    }
  }};

  padding: ${({ $padding }) => $padding};
  margin: ${({ $margin }) => $margin || '0'};
  width: 100%;

  /* Asegurar que todos los textos hijos tengan buen contraste */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ $variant }) => {
      switch ($variant) {
        case 'dark':
          return a11yColors.purple.lightOnDark;
        case 'purple':
          return a11yColors.primary.dark;
        default:
          return a11yColors.purple.darkOnLight;
      }
    }};
  }

  p,
  span,
  li {
    color: ${({ $variant }) => {
      switch ($variant) {
        case 'dark':
          return a11yColors.gray.lightOnDark;
        case 'purple':
          return a11yColors.gray.darkOnLight;
        default:
          return a11yColors.gray.darkOnLight;
      }
    }};
  }

  /* Enlaces accesibles según el fondo */
  a {
    color: ${({ $variant }) =>
      $variant === 'dark'
        ? a11yColors.purple.lighterOnDark
        : a11yColors.link.default};
    text-decoration: underline;

    &:hover {
      color: ${({ $variant }) =>
        $variant === 'dark'
          ? a11yColors.purple.lightOnDark
          : a11yColors.link.hover};
    }

    &:focus-visible {
      outline: 3px solid ${a11yColors.focus};
      outline-offset: 2px;
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    padding: ${({ $smPadding }) => $smPadding || '50px 0'};
  }
`;

export default AccessibleSection;
