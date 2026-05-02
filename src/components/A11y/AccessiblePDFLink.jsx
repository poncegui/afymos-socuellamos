import React from 'react';
import styled from 'styled-components';
import { a11yColors } from '../../styles/a11yColors';

/**
 * Componente de enlace accesible a documentos PDF
 *
 * Cumple con WCAG 2.1:
 * - Indica claramente que es un PDF
 * - Incluye icono visual
 * - Texto alternativo para lectores de pantalla
 * - Información de tamaño de archivo (opcional)
 * - Se abre en nueva pestaña con aviso
 *
 * @param {Object} props
 * @param {string} props.href - URL del PDF
 * @param {string} props.children - Texto descriptivo del enlace
 * @param {string} props.fileSize - Tamaño del archivo (ej: "2.5 MB") - opcional
 * @param {boolean} props.download - Si se debe descargar en lugar de abrir
 * @param {string} props.className - Clases CSS adicionales
 */
const AccessiblePDFLink = ({
  href,
  children,
  fileSize,
  download = false,
  className,
  ...props
}) => {
  // Crear aria-label descriptivo
  const ariaLabel = `${children} (Documento PDF${fileSize ? `, ${fileSize}` : ''}${
    download ? ', se descargará' : ', se abre en nueva pestaña'
  })`;

  return (
    <PDFLinkWrapper
      href={href}
      target={download ? undefined : '_blank'}
      rel={download ? undefined : 'noopener noreferrer'}
      download={download}
      aria-label={ariaLabel}
      className={className}
      {...props}
    >
      <PDFIcon aria-hidden="true">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 2V8H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="12"
            y="17"
            fontSize="6"
            fontWeight="bold"
            textAnchor="middle"
            fill="currentColor"
          >
            PDF
          </text>
        </svg>
      </PDFIcon>

      <TextContent>
        <LinkText>{children}</LinkText>
        {fileSize && <FileSize aria-hidden="true">({fileSize})</FileSize>}
      </TextContent>

      <ExternalIcon aria-hidden="true">
        {download ? '⬇' : '↗'}
      </ExternalIcon>
    </PDFLinkWrapper>
  );
};

export default AccessiblePDFLink;

const PDFLinkWrapper = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: ${a11yColors.background.white};
  border: 2px solid ${a11yColors.purple.darkOnLight};
  border-radius: 8px;
  color: ${a11yColors.purple.darkOnLight};
  text-decoration: none;
  font-size: calc(1rem * var(--fs, 1));
  font-weight: 600;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: ${a11yColors.purple.darkOnLight};
    color: ${a11yColors.background.white};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(107, 66, 117, 0.2);
  }

  &:focus-visible {
    outline: 3px solid ${a11yColors.focus};
    outline-offset: 3px;
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: calc(0.9rem * var(--fs, 1));
    padding: 0.65rem 1rem;
    gap: 0.5rem;
  }
`;

const PDFIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: currentColor;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const TextContent = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  flex: 1;
  min-width: 0;
`;

const LinkText = styled.span`
  line-height: 1.3;
`;

const FileSize = styled.span`
  font-size: calc(0.8125rem * var(--fs, 1));
  font-weight: 400;
  opacity: 0.8;
  line-height: 1;
`;

const ExternalIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.25rem;
  opacity: 0.7;
`;
