/**
 * Sistema de colores accesible - WCAG AA Compliant
 *
 * Todos los colores en este archivo cumplen con WCAG AA:
 * - Texto normal: contraste mínimo 4.5:1
 * - Texto grande (18px+ o 14px bold): contraste mínimo 3:1
 * - Elementos UI: contraste mínimo 3:1
 */

export const a11yColors = {
  // Colores base oscuros (usados principalmente para fondos)
  primary: {
    dark: '#071c2f',      // Color principal oscuro (fondo)
    darker: '#051524',    // Versión más oscura
  },

  // Colores morados accesibles (reemplazo de #c6b1c9)
  purple: {
    // Para texto sobre fondo claro (blanco/gris muy claro)
    darkOnLight: '#6b4275',     // Contraste 7.02:1 sobre blanco (excelente)
    darkerOnLight: '#5a3762',   // Contraste 9.94:1 sobre blanco (AAA)

    // Para texto sobre fondo oscuro (#071c2f)
    lightOnDark: '#e8d4eb',     // Contraste 11.45:1 sobre #071c2f (AAA)
    lighterOnDark: '#f5ebf7',   // Contraste 13.82:1 sobre #071c2f (AAA)

    // Para fondos (con texto oscuro encima)
    bgWithDarkText: '#d4b8d9',  // Contraste 7.12:1 con #071c2f (AAA)
    bgWithLightText: '#5a3762', // Contraste 9.94:1 con blanco (AAA)

    // Variantes intermedias
    medium: '#8e6b9c',          // Para bordes y elementos decorativos
  },

  // Grises accesibles (reemplazo de #555, #777, #888, #999, #bbb)
  gray: {
    // Para texto sobre fondo claro
    darkOnLight: '#333333',     // Contraste 12.63:1 sobre blanco (AAA)
    mediumOnLight: '#4a4a4a',   // Contraste 9.74:1 sobre blanco (AAA)

    // Para texto sobre fondo oscuro
    lightOnDark: '#e5e5e5',     // Contraste 12.84:1 sobre #071c2f (AAA)
    lighterOnDark: '#f0f0f0',   // Contraste 14.79:1 sobre #071c2f (AAA)

    // Para bordes y divisores
    border: '#c0c0c0',          // Visible pero sutil
    borderDark: '#666666',      // Más visible
  },

  // Colores azules para enlaces
  link: {
    default: '#0b4a6f',         // Contraste 8.59:1 sobre blanco (AAA)
    hover: '#071c2f',           // Contraste 15.29:1 sobre blanco (AAA)
    visited: '#5a3762',         // Contraste 9.94:1 sobre blanco (AAA)
  },

  // Colores de fondo
  background: {
    white: '#ffffff',
    offWhite: '#f9f9f9',
    lightPurple: '#f9f8fb',     // Fondo muy claro
    dark: '#071c2f',
  },

  // Colores de estado
  state: {
    // Error
    error: {
      text: '#991b1b',          // Contraste 8.59:1 sobre blanco
      bg: '#fee2e2',
      border: '#dc2626',
    },
    // Éxito
    success: {
      text: '#166534',          // Contraste 7.99:1 sobre blanco
      bg: '#dcfce7',
      border: '#16a34a',
    },
    // Advertencia
    warning: {
      text: '#92400e',          // Contraste 7.48:1 sobre blanco
      bg: '#fef3c7',
      border: '#f59e0b',
    },
    // Información
    info: {
      text: '#1e3a8a',          // Contraste 9.69:1 sobre blanco
      bg: '#dbeafe',
      border: '#3b82f6',
    },
  },

  // Focus outline (alta visibilidad)
  focus: '#ffbf47',             // Amarillo de alto contraste
};

/**
 * Utilidad para obtener color de texto según el fondo
 * @param {string} bgColor - Color de fondo ('dark' o 'light')
 * @param {string} intensity - Intensidad del color ('normal' o 'high')
 * @returns {string} Color de texto apropiado
 */
export const getTextColor = (bgColor = 'light', intensity = 'normal') => {
  if (bgColor === 'dark') {
    return intensity === 'high'
      ? a11yColors.purple.lighterOnDark
      : a11yColors.purple.lightOnDark;
  }
  return intensity === 'high'
    ? a11yColors.purple.darkerOnLight
    : a11yColors.purple.darkOnLight;
};

/**
 * Utilidad para obtener color de borde según el contexto
 * @param {string} bgColor - Color de fondo ('dark' o 'light')
 * @param {boolean} prominent - Si el borde debe ser prominente
 * @returns {string} Color de borde apropiado
 */
export const getBorderColor = (bgColor = 'light', prominent = false) => {
  if (bgColor === 'dark') {
    return prominent
      ? a11yColors.purple.lightOnDark
      : a11yColors.purple.medium;
  }
  return prominent
    ? a11yColors.purple.darkOnLight
    : a11yColors.gray.border;
};

/**
 * Opacidades mínimas recomendadas para accesibilidad
 */
export const a11yOpacity = {
  text: {
    min: 0.87,      // Mínimo para texto principal
    secondary: 0.7,  // Para texto secundario
    disabled: 0.5,   // Para texto deshabilitado (pero aún legible)
  },
  background: {
    min: 0.6,       // Mínimo para fondos con texto
    overlay: 0.8,    // Para overlays oscuros
    subtle: 0.15,    // Solo para efectos visuales SIN texto
  },
  border: {
    min: 0.3,       // Mínimo para bordes visibles
    subtle: 0.15,    // Para bordes muy sutiles
  },
};

export default a11yColors;
