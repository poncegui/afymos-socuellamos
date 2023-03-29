import sensibility from "../../logos/sensibilizacion.png";
import services from "../../logos/services.png";
import integracion from "../../../images-integracion-sociolaboral/tomas.jpg";

export const FeaturesData = {
  reverse: false,
  inverse: false,
  topLine: {
    text: "Vida en comunidad:",
  },
  headline: "Integración sociolaboral",
  description:
    "El Servicio de Capacitación de Afymos,  es un servicio de atención diurna que tiene como objetivo principal potenciar los puntos fuertes de las personas con discapacidad y facilitar el aprendizaje de nuevas capacidades en todos los ámbitos de la vida de la persona (autonomía personal, relaciones interpersonales, utilizaciónsiones).",
  buttonLabel: "Saber más",
  linkTo: "/donaciones",
  img: integracion,
};

export const heroTwo = {
  reverse: true,
  inverse: true,
  topLine: {
    text: "Sensibilización",
    facebook: "",
    instagram: "",
  },
  headline:
    "Síguenos para ver todas las actividades de sensibilización que llevamos a cabo.",
  description:
    "Nuestra organización sin ánimo de lucro se sustenta principalmente de las donaciones de sus miembros y personas afines.",
  buttonLabel: "Donaciones",
  linkTo: "/donaciones",
  img: sensibility,
};

export const heroThree = {
  reverse: false,
  inverse: false,
  topLine: {
    text: "Atención a familiares, ayuda a la inserción laboral, cursos de formación y terapia ocupacional",
  },
  headline: "Servicios y proyectos ",
  description:
    "También ofrecemos Servicios Terapéuticos de diferentes disciplinas con el fin de mejorar la calidad de vida de las personas.",
  buttonLabel: "Saber más",
  linkTo: "/trabaja-con-nosotros",
  img: services,
};
