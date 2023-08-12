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
    id: "logopedia",
    name: "Logopedia",
    src: logopediaData,
    target: target,
    alt: "pictograma-logopedia",
    url: "terapia-logopedia",
  },
  {
    id: "fisioterapia",
    name: "Fisioterapia",
    src: fisioterapiaData,
    target: target,
    alt: "pictograma-fisioterapia",
    url: "fisioterapia",
  },
  {
    id: "terapia-ocupacional",
    name: "Terapia Ocupacional",
    src: terapiaOcupacionalData,
    target: target,
    alt: "pictograma-terapia-ocupacional",
    url: "terapia-ocupacional",
  },
  {
    id: "psicopedagogia",
    name: "Psicopedagogía",
    src: psicopedagogia,
    target: target,
    alt: "pictograma-psicopedagogia",
    url: "psicopedagogia",
  },
  {
    id: "neuropsicologia",
    name: "Neuropsicologia",
    src: neuropsicologiaData,
    target: target,
    alt: "pictograma-psicologia",
    url: "neuropsicologia",
  },
  {
    id: "auditiva",
    name: "Auditiva",
    src: auditivaData,
    target: target,
    alt: "terapia-auditiva",
    url: "auditiva",
  },
  {
    id: "visual",
    name: "Visual",
    src: visualData,
    target: target,
    alt: "terapia-auditiva",
    url: "visual",
  },
  {
    id: "psicologia",
    name: "Psicologia",
    src: psicologiaData,
    target: target,
    alt: "terapia-psicologia",
    url: "psicologia",
  },
];
