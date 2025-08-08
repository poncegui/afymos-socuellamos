import centroDiversidad from "../assets/pictogramas/campus-universitario.png";
import contabilidad from "../assets/pictogramas/contabilidad.png";
import junta from "../assets/pictogramas/junta.png";
import organigrama from "../assets/pictogramas/organigrama.png";
import organigramaPDF from "../pdf/docs_pdf/organigrama.pdf";
import pdfCuentas from "../../../transparencia/components/assets/docs_transparencia/cuentas-anuales-2024.pdf"

export const aboutUsData = [
  {
    id: 1,
    title: "Instalaciones Centro",
    image: centroDiversidad,
    alt: "Instalaciones Centro",
    url: "/instalaciones-centro-diversidad",
    color: "#f5f5f5",
    ariaLabel: "ir a instalaciones centro diversidad"
  },
  {
    id: 2,
    title: "Organigrama",
    image: organigrama,
    alt: "organigrama",
    url: organigramaPDF,
    color: "#224464",
    ariaLabel: "ir a organigrama"
  },
  {
    id: 3,
    title: "Junta Directiva",
    image: junta,
    alt: "Junta Directiva",
    url: "/junta-directiva",
    color: "#c6b1c9",
    ariaLabel:"ir a junta directiva"
  },
  {
    id: 4,
    title: "Cuentas anuales 2024",
    image: contabilidad,
    alt: "Cuentas anuales 2024",
    url: pdfCuentas,
    color: "#f5f5f5",
    ariaLabel: "Descargar archivo cuentas anuales en PDF"
  },
];
