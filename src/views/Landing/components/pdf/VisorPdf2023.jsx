import React, { Component } from "react";

class Pdf extends Component {
  componentDidMount() {
    if (typeof window.orientation !== "undefined") {
      document.getElementById("enlaceDescargarPdf23").click();
      window.close();
    }
  }
  render() {
    return (
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        <object
          data={require("./docs_pdf/cuentas-anuales-2023.pdf")}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <br />
          <a
            href={require("./docs_pdf/cuentas-anuales-2023.pdf")}
            rel="noreferrer"
            target="_blank"
            id="enlaceDescargarPdf23"
            download="cuentas-anuales-2023.pdf"
          >
            Tu dispositivo no puede visualizar los PDF, da click aquí para
            descargarlo
          </a>
        </object>
      </div>
    );
  }
}

export default Pdf;
