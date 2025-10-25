import React, { useEffect } from 'react';
import organigramaPdf from './docs_pdf/organigrama.pdf';
import ExternalLink from '../../../../components/ExternalLink';

const VisorPdfOrganigrama = () => {
  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(
      navigator.userAgent
    );
    if (isMobile) {
      window.open(organigramaPdf, '_blank', 'noopener,noreferrer');
    }
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        paddingTop: '80px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '8px',
          padding: '12px',
          alignItems: 'center',
          justifyContent: 'flex-start',
          background: '#f5f5f5',
          borderBottom: '1px solid #e0e0e0',
          height: '64px',
          paddingLeft: '1rem',
        }}
      >
        <ExternalLink
          href={organigramaPdf}
          ariaLabel="Abrir organigrama en nueva pestaña"
          title="Abrir organigrama en nueva pestaña"
        >
          <span
            style={{
              display: 'inline-block',
              padding: '8px 12px',
              borderRadius: 6,
              border: 'none',
              background: '#071c2f',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Abrir en nueva pestaña
          </span>
        </ExternalLink>

        <button
          style={{
            padding: '8px 12px',
            borderRadius: 6,
            border: '1px solid #071c2f',
            background: '#fff',
            color: '#071c2f',
            cursor: 'pointer',
          }}
          onClick={() => window.history.back()}
          aria-label="Volver"
        >
          Volver
        </button>
      </div>
      {/* Use iframe for broader compatibility; include a clear fallback link for download */}
      <iframe
        src={organigramaPdf}
        title="Organigrama Afymos"
        style={{
          width: '100%',
          height: 'calc(100vh - 80px - 64px)',
          border: 'none',
        }}
      />

      <noscript>
        <div style={{ padding: '1rem' }}>
          <p>Si tu navegador no muestra el PDF, puedes descargarlo aquí:</p>
          <a
            href={organigramaPdf}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Descargar organigrama (PDF)
          </a>
        </div>
      </noscript>
    </div>
  );
};

export default VisorPdfOrganigrama;
