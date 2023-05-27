import logopediaData from "../../../pictogramas/logopeda.png";
import fisioterapiaData from "../../../pictogramas/fisioterapeuta.png";
import terapiaOcupacionalData from "../../../pictogramas/terapeuta-ocupacional.png";
import psicologiaData from "../../../pictogramas/psicologa.png";
import neuropsicologiaData from "../../../pictogramas/neuropsicologia.png";
import psicopedagogia from "../../../pictogramas/psicopedagogia.png";
import auditivaData from "../../../pictogramas/terapia-auditiva.png";
import visualData from "../../../pictogramas/terapia-visual.png";

const target = "_blank";

export const introData = [
  {
    id: 1,
    name: "Logopedia",
    src: logopediaData,
    target: target,
    alt: "pictograma-logopedia",
    url: "/terapia-logopedia",
  },
  {
    id: 2,
    name: "Fisioterapia",
    src: fisioterapiaData,
    target: target,
    alt: "pictograma-fisioterapia",
    url: "/terapia-fisioterapia",
  },
  {
    id: 3,
    name: "Terapia Ocupacional",
    src: terapiaOcupacionalData,
    target: target,
    alt: "pictograma-terapia-ocupacional",
    url: "/terapia-ocupacional",
  },
  {
    id: 4,
    name: "Psicopedagogía",
    src: psicopedagogia,
    target: target,
    alt: "pictograma-psicopedagogia",
    url: "/terapia-psicopedagogia",
  },
  {
    id: 5,
    name: "Neuropsicologia",
    src: neuropsicologiaData,
    target: target,
    alt: "pictograma-psicologia",
    url: "/terapia-neuropsicologia",
  },
  {
    id: 6,
    name: "Auditiva",
    src: auditivaData,
    target: target,
    alt: "terapia-auditiva",
    url: "/donar",
  },
  {
    id: 7,
    name: "Visual",
    src: visualData,
    target: target,
    alt: "terapia-auditiva",
    url: "/terapia-visual",
  },
  {
    id: 8,
    name: "Psicologia",
    src: psicologiaData,
    target: target,
    alt: "terapia-psicologia",
    url: "/terapia-psicologica",
  },
];
