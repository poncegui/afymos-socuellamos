import React from 'react';
import styled from 'styled-components';
import { a11yColors } from '../../styles/a11yColors';

/**
 * Componente de texto accesible con contraste WCAG AA
 *
 * @param {Object} props
 * @param {('p'|'span'|'div'|'strong'|'em')} props.as - Elemento HTML (default: 'p')
 * @param {('dark'|'light')} props.theme - Tema de fondo (default: 'light')
 * @param {('normal'|'secondary')} props.variant - Variante de texto (default: 'normal')
 * @param {string} props.size - Tamaño de fuente (ej: '1rem', '14px')
 * @param {string} props.weight - Peso de fuente (ej: '400', 'bold')
 * @param {string} props.className - Clases CSS adicionales
 * @param {React.ReactNode} props.children - Contenido del texto
 */
const AccessibleText = ({
  as = 'p',
  theme = 'light',
  variant = 'normal',
  size,
  weight,
  className,
  children,
  ...props
}) => {
  return (
    <StyledText
      as={as}
      className={className}
      $theme={theme}
      $variant={variant}
      $size={size}
      $weight={weight}
      {...props}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.p`
  /* Color con contraste accesible según el tema y variante */
  color: ${({ $theme, $variant }) => {
    if ($theme === 'dark') {
      return $variant === 'secondary'
        ? a11yColors.gray.lightOnDark
        : a11yColors.purple.lightOnDark;
    }
    return $variant === 'secondary'
      ? a11yColors.gray.darkOnLight
      : a11yColors.primary.dark;
  }};

  font-size: ${({ $size }) => $size || '1rem'};
  font-weight: ${({ $weight }) => $weight || '400'};
  line-height: 1.5;
  margin: 0 0 1rem 0;

  /* Mantener contraste en enlaces dentro del texto */
  a {
    color: ${({ $theme }) =>
      $theme === 'dark'
        ? a11yColors.purple.lighterOnDark
        : a11yColors.link.default};
    text-decoration: underline;

    &:hover {
      color: ${({ $theme }) =>
        $theme === 'dark'
          ? a11yColors.purple.lightOnDark
          : a11yColors.link.hover};
    }

    &:focus-visible {
      outline: 3px solid ${a11yColors.focus};
      outline-offset: 2px;
      border-radius: 2px;
    }
  }

  /* Énfasis accesible */
  strong,
  b {
    font-weight: 700;
    color: inherit;
  }

  em,
  i {
    font-style: italic;
    color: inherit;
  }
`;

export default AccessibleText;
