import colaboradores from "../../../assets/pictogramas/donacion.png";
import contabilidad from "../../../assets/pictogramas/contabilidad.png";
import junta from "../../../assets/pictogramas/junta.png";
import organigrama from "../../../assets/pictogramas/organigrama.png";

const target = "_blank";

export const othersData = [
  {
    id: 1,
    name: "Organigrama",
    src: organigrama,
    target: target,
    alt: "organigrama",
    url: "/organigrama",
  },
  {
    id: 2,
    name: "Junta Directiva",
    src: junta,
    target: target,
    alt: "logo-junta-directiva",
    url: "/junta-directiva",
  },
  {
    id: 3,
    name: "Cuentas anuales",
    src: contabilidad,
    target: target,
    alt: "logo-cuentas-anuales",
    url: "/descargar-cuentas",
  },
  {
    id: 4,
    name: "Colaboradores",
    src: colaboradores,
    target: target,
    alt: "logo-donaciones",
    url: "/colaboradores",
  },
];
