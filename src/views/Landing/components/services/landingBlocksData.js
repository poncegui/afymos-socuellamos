import proyectos from "../../../centroDia/assets/images-centroDia/centroDia-2.jpg";

const sensibility = "/images/landing/sensibilizacion-1.png";
const sociolaboral = "/images/landing/chica-trabajando.jpeg";

export const heroOne = {
  reverse: false,
  inverse: true,
  topLine: {
    text: "Servicio de Capacitación sociolaboral",
  },
  headline:
    "Un recurso de atención diurna y carácter transdisciplinar para la inclusión social y laboral",
  description:
    "El servicio de capacitación sociolaboral se define como un recurso de atención diurna y carácter transdisciplinar, diseñado para fomentar la inclusión social y laboral de las personas adultas con discapacidad intelectual, inteligencia límite y/o trastorno del espectro autista.\n\nEl servicio se presta mediante la provisión de apoyos personales, basados en las preferencias, intereses y capacidades de cada persona, con el uso de los recursos de carácter normalizado existentes en el entorno comunitario y desde una perspectiva del fomento de la conducta autodeterminada y de la capacitación comunitaria.\n\nLa prestación del servicio se sustenta en la Planificación Centrada en la Persona, a través de los planes personales de apoyo, poniendo especial atención en las capacidades, puntos fuertes, aspiraciones, talentos y motivaciones de la persona, que se constituye como el protagonista y centro del proceso de intervención.\n\nEl Servicio de Capacitación Sociolaboral está Cofinanciado por la Unión Europea y la Junta de Comunidades de Castilla La Mancha.",
  buttonLabel: "Saber más",
  href: "/servicio-capacitacion",
  browserTitle: "Ir a Servicio de Capacitación Sociolaboral",
  img: sociolaboral,
  alt: "persona trabajando en servicio de capacitación sociolaboral",
};

export const heroTwo = {
  href: "/donaciones",
  browserTitle: "Ir a Donaciones",
  reverse: true,
  inverse: false,
  topLine: {
    text: "Sensibilización",
  },
  headline:
    "Sígue nuestras redes para ver todas las actividades de sensibilización que llevamos a cabo.",
  description:
    "Nuestra organización sin ánimo de lucro se sustenta principalmente de las donaciones de sus miembros y personas afines, por lo que siempre estamos abiertos a cualquier ayuda económica que nos puedan prestar.",
  buttonLabel: "Donaciones",
  img: sensibility,
  alt: "donaciones",
};

export const heroThree = {
  reverse: false,
  inverse: true,
  topLine: {
    text: "Buscamos profesionales como tú",
  },
  headline: "Trabaja con nosotros ",
  description:
    "Buscamos personal cualificado para formar parte de la familia Afymos: Especialistas Sanitarios, administración y mucho más. Contacta con nosotros o envianos tu curriculum",
  buttonLabel: "Contacto",
  href: "#contacto",
  browserTitle: "Ir a contacto",
  img: proyectos,
  alt: "profesional haciendo terapia con paciente",
};
