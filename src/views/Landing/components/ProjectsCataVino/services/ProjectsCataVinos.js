import cata1 from "../assets/cata-vinos.jpg";
import cata2 from "../assets/cata-vinos-2.jpg";
import cata3 from "../assets/cata-vinos-3.jpg";
import cata4 from "../assets/cata-vinos-5.png";

export const cataDataOne = {
  id: "cata-exito",
  reverse: false,
  inverse: false,
  title: "III Cata de Vino Maridada",
  topLine: { text: "Evento Solidario" },
  headline: "Éxito rotundo: cultura, sabor y solidaridad",
  description:
    "El pasado sábado celebramos la III Cata de Vino Maridada a beneficio de AFYMOS: una jornada vibrante donde la gastronomía y la inclusión se unieron en una experiencia inolvidable. Gracias a todas las personas que asistieron y a los profesionales que hicieron posible este encuentro.",
  img: cata1,
  buttonLabel: "Ver galería",
  href: "/cata-vinos",
  alt: "Cata de Vinos - evento",
  target: "_self",
};

export const cataDataTwo = {
  id: "cata-formacion",
  reverse: true,
  inverse: true,
  title: "Formación y Empleo",
  topLine: { text: "Talento en sala" },
  headline: "Nuestros participantes, protagonistas del servicio",
  description:
    "El servicio de recepción y atención en mesa estuvo a cargo de personas del Servicio de Capacitación de AFYMOS, formadas en Atención al Cliente y Certificado de Profesionalidad en Cafetería y Bar. Una demostración clara de capacidades, profesionalidad y ganas de avanzar.",
  img: cata2,
  buttonLabel: "Conoce el programa",
  href: "/servicio-capacitacion",
  alt: "Equipo de servicio AFYMOS",
  target: "_self",
};

export const cataDataThree = {
  id: "cata-colaboradores",
  reverse: false,
  inverse: false,
  title: "Bodegas y colaboradores",
  topLine: { text: "Gracias por sumar" },
  headline: "Un brindis por quienes hacen posible la jornada",
  description:
    "Agradecemos la generosa colaboración de las bodegas —Bodegas Juan Pablo II, Bodegas Los Ángeles, Bodegas Delgado Collado, Cooperativa Cristo de la Vega y Finca Torre de Santiago— así como a Globalcaja y OLICEP por su apoyo y donaciones que enriquecieron el evento.",
  img: cata3,
  buttonLabel: "Nuestros patrocinadores",
  href: "/partners",
  alt: "Colaboradores y bodegas",
  target: "_self",
};

export const cataDataFour = {
  id: "cata-institucional",
  reverse: true,
  inverse: true,
  title: "Presencia institucional",
  topLine: { text: "Compromiso público" },
  headline: "Apoyos que impulsan inclusión",
  description:
    "Contamos con la presencia de autoridades y representantes institucionales que refrendan nuestro trabajo: Pilar Alarcón (presidenta de AFYMOS), Azucena López (concejalía de Bienestar Social), representantes de Fundación MAPFRE y otras personalidades que acompañaron la jornada.",
  img: cata4,
  buttonLabel: "Apoya la causa",
  href: "/donaciones",
  alt: "Autoridades en la Cata",
  target: "_self",
};

export const reconocimientoDataOne = cataDataOne;
export const reconocimientoDataTwo = cataDataTwo;
export const reconocimientoDataThree = cataDataThree;
export const reconocimientoDataFour = cataDataFour;
