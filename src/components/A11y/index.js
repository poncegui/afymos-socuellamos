/**
 * Componentes de accesibilidad (A11y)
 *
 * Todos estos componentes están diseñados para cumplir con WCAG AA:
 * - Contraste de color mínimo 4.5:1 para texto normal
 * - Contraste de color mínimo 3:1 para texto grande y elementos UI
 * - Estados de foco visibles
 * - Soporte para prefers-reduced-motion
 * - Soporte para prefers-contrast
 */

export { default as AccessibleHeading } from './AccessibleHeading';
export { default as AccessibleText } from './AccessibleText';
export { default as AccessibleSection } from './AccessibleSection';
export { default as AccessibleBadge } from './AccessibleBadge';
export { default as AccessibleButton } from './AccessibleButton';
export { default as AccessiblePDFLink } from './AccessiblePDFLink';
export { default as AccessibleYouTubeVideo } from './AccessibleYouTubeVideo';
