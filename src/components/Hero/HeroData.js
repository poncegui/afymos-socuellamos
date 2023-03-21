import inclusion from "../../logos/inclusion.png";
import sensibility from "../../logos/sensibilizacion.png";
import services from "../../logos/services.png";

export const heroOne = {
  reverse: false,
  inverse: false,
  topLine: {
    text: "Vida en comunidad:",
  },
  headline: "Integración, inclusión y otra",
  description:
    "Afymos (Asociación de familiares y amigos de personas con alguna discapacidad) es una Asociación sin ánimo de lucro ubicada en la localidad de Socuéllamos (Ciudad Real) en la C/ Pedro Arias, 87.",
  buttonLabel: "Saber más",
  img: inclusion,
};

export const heroTwo = {
  reverse: true,
  inverse: true,
  topLine: {
    text: "Sensibilización",
  },
  headline:
    "Síguenos en Facebook y podrán ver todas las actividades de sensibilización que llevamos a cabo.",
  description:
    "Nuestra organización sin ánimo de lucro se sustenta principalmente de las donaciones de sus miembros y personas afines, por lo que siempre estamos abiertos a cualquier ayuda económica que nos puedan prestar.",
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
  linkTo: "/servicios-y-proyectos",
  img: services,
};
