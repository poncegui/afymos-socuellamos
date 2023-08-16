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
    name: "Cuentas anuales 2020",
    src: contabilidad,
    target: target,
    alt: "logo-cuentas-anuales",
    url: "/pdf-cuentas-20",
  },
  {
    id: 4,
    name: "Cuentas anuales 2021",
    src: contabilidad,
    target: target,
    alt: "logo-cuentas-anuales",
    url: "/pdf-cuentas-21",
  },
];
