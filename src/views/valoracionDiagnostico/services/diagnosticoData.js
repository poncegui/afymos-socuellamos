import diagnostico from "../assets/images-diagnostico/apoyo-familias-4.jpg";
import diagnostico2 from "../assets/images-diagnostico/apoyo-familias-2.jpg";
import diagnostico3 from "../assets/images-diagnostico/diagnostico.png";

export const diagnosticoDataOne = {
  id: "diagnosticoDataOne",
  reverse: false,
  inverse: false,
  topLine: {
    text: "Valoración y diagnóstico para personas con algún tipo de discapacidad",
  },
  headline:
    "Este servicio tiene como objetivo valoración con tests estandarizados y pruebas psicométricas objetivas en distintos ámbitos a nivel integral como la neuropsicología, psicología, psicopedagogía, logopedia, terapia ocupacional y fisioterapia.",
  description:
    "Nuestra valoración se lleva a cabo con tests estandarizados y pruebas psicométricas como la neuropsicología, psicología, psicopedagogía, logopedia, terapia ocupacional y fisioterapia.",

  img: diagnostico,
};

export const diagnosticoDataTwo = {
  id: "diagnosticoDataTwo",
  reverse: true,
  inverse: false,
  topLine: {
    text: "",
  },
  headline: "¿Cómo trabajamos?",
  description:
    "Se harán valoraciones globales de un trastorno concreto (TEA, TDAH) así como valoraciones de áreas específicas con dificultades, adaptándolo a las necesidades concretas de cada usuario.",
  img: diagnostico3,
};

export const diagnosticoDataThree = {
  id: "diagnosticoDataThree",
  reverse: false,
  inverse: false,
  topLine: {
    text: "Nuestra principal finalidad:",
  },
  headline: "Poner nombre a las necesidades de las personas",
  description:
    "Para ello, nuestros profesionales realizarán una o varias entrevistas con la persona a evaluar y sus familiares. Posteriormente se pasan los test y pruebas estandarizadas correspondientes y finalmente se elabora un informe con la información obtenida y se le transmite de manera verbal y escrita a la persona y la familia.",
  img: diagnostico2,
};
