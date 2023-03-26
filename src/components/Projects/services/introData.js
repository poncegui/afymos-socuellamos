import logopediaData from "../../../pictogramas/logopeda.png";
import fisioterapiaData from "../../../pictogramas/fisioterapeuta.png";
import terapiaOcupacionalData from "../../../pictogramas/terapeuta-ocupacional.png";
import psicologiaData from "../../../pictogramas/donacion.png";
// import neuroPsicologiaData from "../../../pictogramas/donacion.png";
import neuroPsicologiaData from "../../../images/foto1.jpg";
const target = "_blank";

export const introData = [
  {
    id: 1,
    name: "Logopedia",
    src: logopediaData,
    target: target,
    alt: "pictograma-logopedia",
    url: "/organigrama",
  },
  {
    id: 2,
    name: "Fisioterapia",
    src: fisioterapiaData,
    target: target,
    alt: "pictograma-logopedia",
    url: "/descargar-cuentas",
  },
  {
    id: 3,
    name: "Terapia Ocupacional",
    src: terapiaOcupacionalData,
    target: target,
    alt: "pictograma-logopedia",
    url: "/artesania",
  },
  {
    id: 4,
    name: "Psicopedagogía",
    src: psicologiaData,
    target: target,
    alt: "pictograma-psicologia",
    url: "/donar",
  },
  {
    id: 5,
    name: "NeuroPsicologia",
    src: neuroPsicologiaData,
    target: target,
    alt: "pictograma-neuroPsicologia",
    url: "/donar",
  },
];
