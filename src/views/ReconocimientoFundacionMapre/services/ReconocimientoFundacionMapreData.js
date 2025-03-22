import reconocimiento1 from "../assets/images-reconocimiento-fundacion/reconocimientoFundacion-1.jpg";
import reconocimiento2 from "../assets/images-reconocimiento-fundacion/reconocimientoFundacion-2.jpg";
import reconocimiento3 from "../assets/images-reconocimiento-fundacion/reconocimientoFundacion-3.jpg";
import reconocimiento4 from "../assets/images-reconocimiento-fundacion/reconocimientoFundacion-4.jpg";

export const reconocimientDataOne = {
  id: "reconocimientoMapfre",
  reverse: false,
  inverse: false,
  title: "Reconocimiento Fundación MAPFRE",
  topLine: {
    text: "Programa Social de Empleo",
  },
  headline: "Afymos recibe una mención especial",
  description:
    "La Fundación MAPFRE nos ha otorgado una mención especial por nuestra trayectoria en la inclusión laboral de personas con discapacidad. Un reconocimiento entregado por S.A.R. la Infanta Doña Elena que impulsa nuestro compromiso con una sociedad más inclusiva, especialmente en el entorno rural.",
  img: reconocimiento1,
  buttonLabel: "Ver más sobre Fundación MAPFRE",
  href: "https://www.fundacionmapfre.org",
  alt: "Reconocimiento Fundación MAPFRE",
  target: "_blank",
};

export const reconocimientDataTwo = {
  id: "empresaCabezuelo",
  reverse: true,
  inverse: true,
  title: "Reconocimiento a Cabezuelo",
  topLine: {
    text: "Compromiso con la inclusión",
  },
  headline: "Gracias a las empresas que creen en la inclusión",
  description:
    "Uno de los momentos más emotivos fue el reconocimiento a Cabezuelo, empresa local comprometida con la inclusión laboral de personas con discapacidad. Su apoyo constante a nuestros programas formativo-laborales ha sido clave para seguir avanzando.",
  img: reconocimiento2,
  buttonLabel: "Ver más sobre RSE",
  href: "https://www.cabezuelo.es", // enlace ilustrativo
  alt: "Reconocimiento a Cabezuelo",
  target: "_blank",
};

export const reconocimientDataThree = {
  id: "tejidoEmpresarial",
  reverse: false,
  inverse: false,
  title: "Tejido empresarial comprometido",
  topLine: {
    text: "Socuéllamos, ejemplo de integración",
  },
  headline: "Empresas que apuestan por la igualdad de oportunidades",
  description:
    "En Socuéllamos contamos con un tejido empresarial implicado en la inclusión. Cada vez son más las empresas que se suman a nuestra causa, rompiendo barreras y construyendo una sociedad más equitativa.",
  img: reconocimiento3,
  buttonLabel: "Conoce nuestros proyectos",
  href: "/proyectos",
  alt: "Tejido empresarial en Socuéllamos",
  target: "_self",
};

export const reconocimientDataFour = {
  id: "dedicatoriaEmpresas",
  reverse: true,
  inverse: true,
  title: "Dedicado a quienes nos apoyan",
  topLine: {
    text: "Gracias por creer",
  },
  headline: "Un reconocimiento compartido",
  description:
    "Dedicamos este premio a todas las empresas, trabajadores y personas que apuestan por la inclusión laboral en el entorno rural. Juntos, seguimos construyendo un mundo más justo, con proyectos ambiciosos e innovadores.",
  img: reconocimiento4,
  buttonLabel: "Descubre nuestra misión",
  href: "/sobre-nosotros",
  alt: "Premio compartido con empresas",
  target: "_self",
};
