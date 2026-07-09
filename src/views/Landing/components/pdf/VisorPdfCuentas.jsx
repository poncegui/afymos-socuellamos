import React, { useEffect } from "react";
import styled from "styled-components";
import cuentasPdf from "../../../transparencia/components/assets/docs_transparencia/cuentas-anuales-2024.pdf";
import ExternalLink from "../../../../components/ExternalLink";

const VisorPdfCuentas = () => {
  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(
      navigator.userAgent
    );
    if (isMobile) {
      window.open(cuentasPdf, "_blank", "noopener,noreferrer");
    }
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        paddingTop: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          padding: "12px",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5",
          borderBottom: "1px solid #e0e0e0",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <ExternalLink
          href={cuentasPdf}
          ariaLabel="Abrir cuentas anuales de Afymos en nueva pestaña"
          title="Cuentas Anuales 2024 - PDF"
        >
          <DocumentButton>
            <h3>Cuentas Anuales 2024</h3>
          </DocumentButton>
        </ExternalLink>

        <button
          style={{
            padding: "8px 12px",
            borderRadius: 6,
            border: "1px solid #071c2f",
            background: "#fff",
            color: "#071c2f",
            cursor: "pointer",
          }}
          onClick={() => window.history.back()}
          aria-label="Volver"
        >
          Volver
        </button>
      </div>

      <iframe
        src={cuentasPdf}
        title="Cuentas Anuales 2024"
        style={{
          width: "100%",
          height: "calc(100vh - 80px - 64px)",
          border: "none",
        }}
      />

      <noscript>
        <div style={{ padding: "1rem" }}>
          <p>Si tu navegador no muestra el PDF, puedes descargarlo aquí:</p>
          <a
            href={cuentasPdf}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Descargar Cuentas Anuales (PDF)
          </a>
        </div>
      </noscript>
    </div>
  );
};

const DocumentButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  padding: 1rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  background-color: #ffffff;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  h3 {
    margin: 0;
    font-size: calc(1.2rem * var(--fs, 1));
    color: #071c2f;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;

    h3 {
      font-size: calc(1rem * var(--fs, 1));
    }
  }
`;

export default VisorPdfCuentas;
