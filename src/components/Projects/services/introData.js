import auditivaData from "../../../assets/pictogramas/terapia-auditiva.png";
import fisioterapiaData from "../../../assets/pictogramas/fisioterapeuta.png";
import logopediaData from "../../../assets/pictogramas/logopeda.png";
import neuropsicologiaData from "../../../assets/pictogramas/neuropsicologia.png";
import psicologiaData from "../../../assets/pictogramas/psicologa.png";
import psicopedagogia from "../../../assets/pictogramas/psicopedagogia.png";
import terapiaOcupacionalData from "../../../assets/pictogramas/terapeuta-ocupacional.png";
import visualData from "../../../assets/pictogramas/terapia-visual.png";

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
