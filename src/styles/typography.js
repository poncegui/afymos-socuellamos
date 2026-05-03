/**
 * Sistema de tipografía consistente para Afymos
 * Escalas, pesos, alturas de línea y colores unificados
 */

export const typography = {
  // Escalas de tamaño con clamp responsive
  fontSize: {
    h1: 'calc(clamp(2rem, 4vw, 2.5rem) * var(--fs, 1))',
    h2: 'calc(clamp(1.5rem, 3vw, 2rem) * var(--fs, 1))',
    h3: 'calc(clamp(1.25rem, 2.5vw, 1.5rem) * var(--fs, 1))',
    h4: 'calc(clamp(1.1rem, 2vw, 1.25rem) * var(--fs, 1))',
    body: 'calc(1rem * var(--fs, 1))',
    bodyLarge: 'calc(1.125rem * var(--fs, 1))',
    bodySmall: 'calc(0.875rem * var(--fs, 1))',
    caption: 'calc(0.75rem * var(--fs, 1))',
  },

  // Pesos de fuente
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Alturas de línea
  lineHeight: {
    tight: 1.1,
    snug: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },

  // Colores de texto
  color: {
    // Textos sobre fondos claros
    primary: '#071c2f',        // Títulos principales
    secondary: '#333333',      // Párrafos importantes (WCAG AA)
    tertiary: '#555555',       // Texto secundario
    muted: '#777777',          // Texto desenfatizado

    // Textos sobre fondos oscuros
    inverse: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.95)',
      tertiary: 'rgba(255, 255, 255, 0.8)',
      muted: 'rgba(255, 255, 255, 0.6)',
    },

    // Colores de marca
    brand: {
      purple: '#c6b1c9',
      darkBlue: '#224464',
      navy: '#071c2f',
    },
  },

  // Letter spacing para diferentes tamaños
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
    wider: '0.05em',
  },
};

// Mixins de utilidad para componentes styled
export const textStyles = {
  h1: `
    font-size: ${typography.fontSize.h1};
    font-weight: ${typography.fontWeight.extrabold};
    line-height: ${typography.lineHeight.tight};
    letter-spacing: ${typography.letterSpacing.tight};
    color: ${typography.color.primary};
    margin: 0;
  `,

  h2: `
    font-size: ${typography.fontSize.h2};
    font-weight: ${typography.fontWeight.bold};
    line-height: ${typography.lineHeight.snug};
    color: ${typography.color.primary};
    margin: 0;
  `,

  h3: `
    font-size: ${typography.fontSize.h3};
    font-weight: ${typography.fontWeight.semibold};
    line-height: ${typography.lineHeight.snug};
    color: ${typography.color.primary};
    margin: 0;
  `,

  h4: `
    font-size: ${typography.fontSize.h4};
    font-weight: ${typography.fontWeight.semibold};
    line-height: ${typography.lineHeight.normal};
    color: ${typography.color.primary};
    margin: 0;
  `,

  body: `
    font-size: ${typography.fontSize.body};
    font-weight: ${typography.fontWeight.regular};
    line-height: ${typography.lineHeight.relaxed};
    color: ${typography.color.secondary};
    margin: 0;
  `,

  bodyLarge: `
    font-size: ${typography.fontSize.bodyLarge};
    font-weight: ${typography.fontWeight.regular};
    line-height: ${typography.lineHeight.relaxed};
    color: ${typography.color.secondary};
    margin: 0;
  `,

  bodySmall: `
    font-size: ${typography.fontSize.bodySmall};
    font-weight: ${typography.fontWeight.regular};
    line-height: ${typography.lineHeight.normal};
    color: ${typography.color.tertiary};
    margin: 0;
  `,

  caption: `
    font-size: ${typography.fontSize.caption};
    font-weight: ${typography.fontWeight.medium};
    line-height: ${typography.lineHeight.normal};
    color: ${typography.color.muted};
    margin: 0;
  `,
};

export default typography;
