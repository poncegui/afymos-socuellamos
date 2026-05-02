/**
 * Utilidades para verificar contraste de colores según WCAG
 */

/**
 * Convierte color hex a RGB
 * @param {string} hex - Color en formato hex (#RRGGBB)
 * @returns {Object} Objeto con propiedades r, g, b
 */
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

/**
 * Calcula la luminancia relativa de un color
 * @param {Object} rgb - Objeto con propiedades r, g, b (0-255)
 * @returns {number} Luminancia relativa (0-1)
 */
const getLuminance = (rgb) => {
  const { r, g, b } = rgb;

  // Convertir valores RGB a sRGB
  const [rs, gs, bs] = [r, g, b].map((val) => {
    const s = val / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });

  // Calcular luminancia relativa
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

/**
 * Calcula el ratio de contraste entre dos colores
 * @param {string} color1 - Primer color en formato hex
 * @param {string} color2 - Segundo color en formato hex
 * @returns {number} Ratio de contraste (1-21)
 */
export const getContrastRatio = (color1, color2) => {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  if (!rgb1 || !rgb2) {
    console.error('Invalid color format. Use hex format (#RRGGBB)');
    return 0;
  }

  const lum1 = getLuminance(rgb1);
  const lum2 = getLuminance(rgb2);

  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (lighter + 0.05) / (darker + 0.05);
};

/**
 * Verifica si el contraste cumple con WCAG AA
 * @param {string} textColor - Color del texto en formato hex
 * @param {string} bgColor - Color de fondo en formato hex
 * @param {Object} options - Opciones de verificación
 * @param {('normal'|'large')} options.fontSize - Tamaño de fuente ('normal' o 'large')
 * @param {('AA'|'AAA')} options.level - Nivel WCAG (default: 'AA')
 * @returns {Object} Resultado con pass, ratio y level
 */
export const checkContrast = (
  textColor,
  bgColor,
  options = { fontSize: 'normal', level: 'AA' }
) => {
  const ratio = getContrastRatio(textColor, bgColor);
  const { fontSize = 'normal', level = 'AA' } = options;

  // Requisitos WCAG
  const requirements = {
    AA: {
      normal: 4.5,
      large: 3.0,
    },
    AAA: {
      normal: 7.0,
      large: 4.5,
    },
  };

  const requiredRatio = requirements[level][fontSize];
  const pass = ratio >= requiredRatio;

  return {
    pass,
    ratio: ratio.toFixed(2),
    required: requiredRatio,
    level,
    fontSize,
    grade: getGrade(ratio, fontSize),
  };
};

/**
 * Obtiene la calificación del contraste
 * @param {number} ratio - Ratio de contraste
 * @param {string} fontSize - Tamaño de fuente
 * @returns {string} Calificación ('fail', 'AA', 'AAA')
 */
const getGrade = (ratio, fontSize) => {
  const thresholds = {
    normal: { AAA: 7.0, AA: 4.5 },
    large: { AAA: 4.5, AA: 3.0 },
  };

  if (ratio >= thresholds[fontSize].AAA) return 'AAA';
  if (ratio >= thresholds[fontSize].AA) return 'AA';
  return 'fail';
};

/**
 * Genera un informe de contraste para múltiples combinaciones
 * @param {Array} combinations - Array de objetos {text, bg, label, fontSize}
 * @returns {Array} Array de resultados
 */
export const generateContrastReport = (combinations) => {
  return combinations.map((combo) => {
    const { text, bg, label, fontSize = 'normal' } = combo;
    const result = checkContrast(text, bg, { fontSize });

    return {
      label: label || `${text} on ${bg}`,
      ...result,
      textColor: text,
      bgColor: bg,
    };
  });
};

/**
 * Imprime un informe de contraste en la consola
 * @param {Array} combinations - Array de objetos {text, bg, label, fontSize}
 */
export const logContrastReport = (combinations) => {
  const report = generateContrastReport(combinations);

  console.group('📊 Contrast Report');
  report.forEach((item) => {
    const emoji = item.pass ? '✅' : '❌';
    const style = item.pass ? 'color: green' : 'color: red';

    console.log(
      `%c${emoji} ${item.label}`,
      style,
      `\n  Ratio: ${item.ratio}:1 (required: ${item.required}:1)`,
      `\n  Grade: ${item.grade}`,
      `\n  Text: ${item.textColor} | BG: ${item.bgColor}`
    );
  });
  console.groupEnd();
};

/**
 * Hook para verificar contraste en desarrollo
 * Úsalo en un useEffect para verificar colores durante el desarrollo
 */
export const useContrastCheck = (combinations) => {
  if (process.env.NODE_ENV === 'development') {
    logContrastReport(combinations);
  }
};

export default {
  getContrastRatio,
  checkContrast,
  generateContrastReport,
  logContrastReport,
  useContrastCheck,
};
