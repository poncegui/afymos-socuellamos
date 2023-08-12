import proyectos from "../../assets/images-centroDia/centroDia-2.jpg";
import sensibility from "../../assets/images-sensibilizacion/sensibilizacion-1.png";
import sociolaboral from "../../assets/images-integracion-sociolaboral/tomas.jpg";

export const heroOne = {
  reverse: false,
  inverse: false,
  topLine: {
    text: "Vida en comunidad:",
  },
  headline: "Integración sociolaboral",
  description:
    "Nuestro objetivo es potenciar los puntos fuertes de las personas con discapacidad y facilitar el aprendizaje de nuevas capacidades en todos los ámbitos de la vida de la persona (autonomía personal, relaciones interpersonales, utilización de los recursos comunitarios y capacidad de toma de decisiones), haciendo especial énfasis en las habilidades de carácter laboral para facilitar su acceso al empleo normalizado y siempre sobre la base de sus preferencias y con el uso de apoyos personales. Se diferencian del Centro de Día por la metodología de trabajo, por la definición de sus objetivos y por la forma de evaluación de los mismos.",
  buttonLabel: "Saber más",
  href: "#/servicio-capacitacion",
  img: sociolaboral,
};

export const heroTwo = {
  href: "#/donaciones",
  reverse: true,
  inverse: true,
  topLine: {
    text: "Sensibilización",
  },
  headline:
    "Sígue nuestras redes para ver todas las actividades de sensibilización que llevamos a cabo.",
  description:
    "Nuestra organización sin ánimo de lucro se sustenta principalmente de las donaciones de sus miembros y personas afines, por lo que siempre estamos abiertos a cualquier ayuda económica que nos puedan prestar.",
  buttonLabel: "Donaciones",

  img: sensibility,
};

export const heroThree = {
  reverse: false,
  inverse: false,
  topLine: {
    text: "Buscamos profesionales como tú",
  },
  headline: "Trabaja con nosotros ",
  description:
    "Buscamos personal cualificado para formar parte de la familia Afymos: Especialistas Sanitarios, administración y mucho más. Contacta con nosotros o envianos tu curriculum",
  buttonLabel: "Contacto",
  href: "contacto",
  img: proyectos,
};
