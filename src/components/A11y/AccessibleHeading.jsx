import React from 'react';
import styled from 'styled-components';
import { a11yColors } from '../../styles/a11yColors';

/**
 * Componente de heading accesible con contraste WCAG AA
 *
 * @param {Object} props
 * @param {('h1'|'h2'|'h3'|'h4'|'h5'|'h6')} props.level - Nivel del heading (default: 'h2')
 * @param {('dark'|'light')} props.theme - Tema de fondo (default: 'light')
 * @param {('center'|'left'|'right')} props.align - Alineación del texto (default: 'center')
 * @param {boolean} props.inverse - Usar colores invertidos
 * @param {string} props.className - Clases CSS adicionales
 * @param {React.ReactNode} props.children - Contenido del heading
 */
const AccessibleHeading = ({
  level = 'h2',
  theme = 'light',
  align = 'center',
  inverse = false,
  className,
  children,
  ...props
}) => {
  const Component = StyledHeading.withComponent(level);

  return (
    <Component
      className={className}
      $theme={theme}
      $align={align}
      $inverse={inverse}
      {...props}
    >
      {children}
    </Component>
  );
};

const StyledHeading = styled.h2`
  /* Color con contraste accesible según el tema */
  color: ${({ $theme, $inverse }) => {
    if ($inverse) {
      return $theme === 'dark'
        ? a11yColors.purple.darkOnLight
        : a11yColors.purple.lightOnDark;
    }
    return $theme === 'dark'
      ? a11yColors.purple.lightOnDark
      : a11yColors.purple.darkOnLight;
  }};

  /* Tamaños responsivos según el nivel */
  font-size: clamp(1.6rem, 3.2vw, 2.4rem);
  line-height: 1.15;
  margin: 0 0 0.5rem 0;
  letter-spacing: 0.4px;
  text-align: ${({ $align }) => $align};
  width: 100%;

  /* Variaciones según el nivel del heading */
  ${({ as }) => {
    switch (as) {
      case 'h1':
        return `
          font-size: clamp(2rem, 5.5vw, 3.6rem);
          line-height: 1.08;
          letter-spacing: 2px;
        `;
      case 'h2':
        return `
          font-size: clamp(1.6rem, 3.2vw, 2.4rem);
          line-height: 1.15;
          letter-spacing: 1px;
        `;
      case 'h3':
        return `
          font-size: clamp(1.25rem, 2.6vw, 1.6rem);
          line-height: 1.25;
          letter-spacing: 0.5px;
        `;
      case 'h4':
        return `
          font-size: 1.125rem;
          line-height: 1.3;
          letter-spacing: 0.3px;
        `;
      default:
        return '';
    }
  }}

  /* Foco accesible para headings interactivos */
  &:focus-visible {
    outline: 3px solid ${a11yColors.focus};
    outline-offset: 3px;
    border-radius: 2px;
  }
`;

export default AccessibleHeading;
