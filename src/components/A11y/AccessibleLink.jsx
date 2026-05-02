import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente de enlace accesible con SEO optimizado
 *
 * Diferencia entre atributos para evitar redundancia:
 * - aria-label: Descripción completa para lectores de pantalla
 * - title: Versión corta para SEO y tooltip (hover)
 * - children: Texto visible del enlace
 *
 * @example
 * <AccessibleLink
 *   to="/donaciones"
 *   ariaLabel="Ir a la página de donaciones de Afymos"
 *   title="Donaciones - Afymos"
 * >
 *   Dona ahora
 * </AccessibleLink>
 */
const AccessibleLink = ({
  to,
  href,
  ariaLabel,
  title,
  external = false,
  children,
  className,
  ...props
}) => {
  // Para enlaces externos
  if (external || href) {
    return (
      <a
        href={href || to}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        title={title}
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Para enlaces internos (React Router)
  return (
    <Link
      to={to}
      aria-label={ariaLabel}
      title={title}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};

export default AccessibleLink;
