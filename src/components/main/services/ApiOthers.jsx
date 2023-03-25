import organigrama from "../../../pictogramas/organigrama.png";
import contabilidad from "../../../pictogramas/contabilidad.png";
import artesania from "../../../pictogramas/artesania.png";
import donaciones from "../../../pictogramas/donacion.png";

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
    name: "Cuentas anuales",
    src: contabilidad,
    target: target,
    alt: "logo-cuentas-anuales",
    url: "/descargar-cuentas",
  },
  {
    id: 3,
    name: "Servicio de artesanía",
    src: artesania,
    target: target,
    alt: "logo-servicio-de-artesania",
    url: "/artesania",
  },
  {
    id: 4,
    name: "Donaciones",
    src: donaciones,
    target: target,
    alt: "logo-donaciones",
    url: "/donar",
  },
];
