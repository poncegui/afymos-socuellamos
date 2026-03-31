import React, { useEffect } from "react";
import cuentasPdf from "../../../transparencia/components/assets/docs_transparencia/cuentas-anuales-2024.pdf";
import ExternalLink from "../../../../components/ExternalLink";
import { Icons } from "../../../transparencia/components/ProjectsIntro";

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
          ariaLabel="Abrir cuentas anuales en nueva pestaña"
          title="Abrir cuentas anuales en nueva pestaña"
        >
          <Icons>
            <h3>Cuentas Anuales 2024</h3>
          </Icons>
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

export default VisorPdfCuentas;
