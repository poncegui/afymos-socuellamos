import actividades from "../../../pictogramas/conductor.png";
import centroDiversidad from "../../../pictogramas/centro-afymos.png";
import cuentas from "../../../pictogramas/cuentas.png";
import organigrama from "../../../pictogramas/presidenta-pelirroja.png";
import pictoAdmin from "../../../pictogramas/administracion.png";
import pt from "../../../pictogramas/pt.png";
import servicios from "../../../pictogramas/fisioterapeuta.png";
import terapeutaOcupacional from "../../../pictogramas/terapeuta-ocupacional.png";
import trabajadoraSocial from "../../../pictogramas/trabajadora-social.png";

export const pictoAccessibility = [
  {
    id: 1,
    name: "Centro Diversidad",
    src: terapeutaOcupacional,
    alt: "Centro Diversidad",
    url: "/centro",
  },
  {
    id: 2,
    name: "Organigrama",
    src: organigrama,
    alt: "Organigrama",
    url: "/organigrama",
  },
  {
    id: 3,
    name: "Servicios",
    src: servicios,
    alt: "Servicios",
    url: "/servicios-y-proyectos",
  },
  {
    id: 4,
    name: "Programas",
    src: pt,
    alt: "",
    url: "/programas",
  },
  {
    id: 5,
    name: "Cuentas",
    src: cuentas,
    alt: "Cuentas",
    url: "/cuentas",
  },
  {
    id: 6,
    name: "Viviendas",
    src: centroDiversidad,
    alt: "Viviendas",
    url: "/vivienda-social",
  },
  {
    id: 7,
    name: "Inserción laboral",
    src: trabajadoraSocial,
    alt: "Inserción-laboral",
    url: "/trabajos",
  },
  {
    id: 8,
    name: "Actividades",
    src: actividades,
    alt: "Actividades",
    url: "/proyectos",
  },
  {
    id: 9,
    name: "Hazte Socio",
    src: pictoAdmin,
    alt: "Hazte-Socio",
    url: "/contacto",
  },
];
