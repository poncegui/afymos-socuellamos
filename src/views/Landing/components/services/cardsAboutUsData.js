import centroDiversidad from "../assets/pictogramas/campus-universitario.png";
import contabilidad from "../assets/pictogramas/contabilidad.png";
import junta from "../assets/pictogramas/junta.png";
import organigrama from "../assets/pictogramas/organigrama.png";
import pdfCuentas from "../../../transparencia/components/assets/docs_transparencia/cuentas-anuales-2024.pdf";

export const aboutUsData = [
  {
    id: 1,
    title: "Instalaciones Centro",
    image: centroDiversidad,
    alt: "Instalaciones Centro",
    url: "/instalaciones-centro-diversidad",
    color: "#f5f5f5",
    ariaLabel: "Ir a instalaciones del centro de diversidad de Afymos",
    browserTitle: "Instalaciones Centro - Afymos",
  },
  {
    id: 2,
    title: "Organigrama",
    image: organigrama,
    alt: "organigrama",
    // Use internal route so the app will render the VisorPdfOrganigrama component
    url: "/organigrama",
    color: "#224464",
    ariaLabel: "Ver organigrama de Afymos",
    browserTitle: "Organigrama - Afymos",
  },
  {
    id: 3,
    title: "Junta Directiva",
    image: junta,
    alt: "Junta Directiva",
    url: "/junta-directiva",
    color: "#c6b1c9",
    ariaLabel: "Ir a la junta directiva de Afymos",
    browserTitle: "Junta Directiva - Afymos",
  },
  {
    id: 4,
    title: "Cuentas anuales 2024",
    image: contabilidad,
    alt: "Cuentas anuales 2024",
    url: pdfCuentas,
    color: "#f5f5f5",
    ariaLabel: "Descargar cuentas anuales 2024 de Afymos (archivo PDF)",
    browserTitle: "Cuentas Anuales 2024 - Afymos",
  },
];
