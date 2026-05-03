import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { typography } from '../../styles/typography';

/**
 * CTAButton - Botón de llamada a la acción unificado
 *
 * Props:
 * - to: ruta interna (react-router Link)
 * - href: URL externa (anchor tag)
 * - variant: 'primary' | 'secondary' | 'outline'
 * - children: texto del botón
 * - onClick: función callback
 * - disabled: boolean
 * - ariaLabel: etiqueta accesible
 * - className: clases CSS adicionales
 */
const CTAButton = ({
  to,
  href,
  variant = 'primary',
  children,
  onClick,
  disabled = false,
  ariaLabel,
  className,
  target,
  rel,
}) => {
  const commonProps = {
    'aria-label': ariaLabel || (typeof children === 'string' ? children : undefined),
    className,
    onClick: disabled ? undefined : onClick,
    $variant: variant,
    $disabled: disabled,
  };

  // Enlace externo
  if (href) {
    return (
      <StyledAnchor
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        {...commonProps}
      >
        {children}
      </StyledAnchor>
    );
  }

  // Enlace interno (React Router)
  if (to) {
    return (
      <StyledLink to={to} {...commonProps}>
        {children}
      </StyledLink>
    );
  }

  // Botón nativo
  return (
    <StyledButton type="button" disabled={disabled} {...commonProps}>
      {children}
    </StyledButton>
  );
};

export default CTAButton;

/* ─── Estilos base ──────────────────────────────────────────────────────── */

const baseStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.65rem 1.5rem;
  border-radius: 999px;
  font-size: ${typography.fontSize.body};
  font-weight: ${typography.fontWeight.bold};
  font-family: inherit;
  text-decoration: none;
  border: 2px solid transparent;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease,
              box-shadow 0.2s ease, border-color 0.2s ease;
  white-space: nowrap;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const getVariantStyles = (variant) => {
  switch (variant) {
    case 'primary':
      return `
        background: ${typography.color.brand.darkBlue};
        color: #ffffff;
        border-color: ${typography.color.brand.darkBlue};

        &:hover:not(:disabled) {
          background: ${typography.color.brand.purple};
          color: ${typography.color.brand.navy};
          border-color: ${typography.color.brand.purple};
          box-shadow: 0 4px 12px rgba(198, 177, 201, 0.3);
        }
      `;

    case 'secondary':
      return `
        background: ${typography.color.brand.purple};
        color: ${typography.color.brand.navy};
        border-color: ${typography.color.brand.purple};

        &:hover:not(:disabled) {
          background: ${typography.color.brand.darkBlue};
          color: #ffffff;
          border-color: ${typography.color.brand.darkBlue};
          box-shadow: 0 4px 12px rgba(34, 68, 100, 0.25);
        }
      `;

    case 'outline':
      return `
        background: transparent;
        color: ${typography.color.brand.darkBlue};
        border-color: ${typography.color.brand.darkBlue};

        &:hover:not(:disabled) {
          background: rgba(34, 68, 100, 0.06);
          border-color: ${typography.color.brand.navy};
          color: ${typography.color.brand.navy};
        }
      `;

    default:
      return '';
  }
};

/* ─── Componentes styled ────────────────────────────────────────────────── */

const StyledButton = styled.button`
  ${baseStyles}
  ${({ $variant }) => getVariantStyles($variant)}
`;

const StyledLink = styled(Link)`
  ${baseStyles}
  ${({ $variant }) => getVariantStyles($variant)}
`;

const StyledAnchor = styled.a`
  ${baseStyles}
  ${({ $variant }) => getVariantStyles($variant)}
`;
