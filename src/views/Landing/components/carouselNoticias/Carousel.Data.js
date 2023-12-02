import basket1 from "../carouselNoticias/assets/images-noticias/campeonato-baloncesto/campeones-baloncesto-2.jpg";
import basket2 from "../carouselNoticias/assets/images-noticias/campeonato-baloncesto/campeones-baloncesto-3.jpg";
import basket3 from "../carouselNoticias/assets/images-noticias/campeonato-baloncesto/campeones-baloncesto-4.jpg";
import basket4 from "../carouselNoticias/assets/images-noticias/campeonato-baloncesto/campeones-baloncesto-5.jpg";
import concierto from "./assets/images-noticias/concierto-navidad/cartel.jpg";
import congreso from "./assets/images-noticias/congreso-con-apoyo-burgos/congreso.jpg";
import diptico from "./assets/images-noticias/concierto-navidad/diptico.png";
import diputacion1 from "../carouselNoticias/assets/images-noticias/campeonato-baloncesto/campeones-baloncesto-9.jpg";
import diputacion2 from "../carouselNoticias/assets/images-noticias/campeonato-baloncesto/campeones-baloncesto-8.jpg";
import diputacion3 from "../carouselNoticias/assets/images-noticias/campeonato-baloncesto/campeones-baloncesto-7.jpg";
import diputacion4 from "../carouselNoticias/assets/images-noticias/campeonato-baloncesto/campeones-baloncesto-6.jpg";
import fotografia from "./assets/images-noticias/concursos/fotografia.png";
import loteria from "./assets/images-noticias/loteria-navidad/loteria-navidad.png";
import proyectoCrea from "../../../proyectoCrea/assets/proyecto-crea/proyecto-crea-01.jpg";
import relatos from "./assets/images-noticias/concursos/relatos.png";
import somosPortada from "./assets/images-noticias/somos-portada/somos-portada.jpg";

export const ApiCarousel = [
  {
    title: "Concierto",
    description:
      "XI Gala de Capacidad -Día Internacional de Personas con alguna Discapacidad",
    image: concierto,
    alt: "concierto-navidad",
    url: "",
  },
  {
    title: "Actividades diciembre 2023",
    description: "Conoce las actividades que tendremos para despedir el año",
    image: diptico,
    alt: "concierto-navidad",
    url: "",
  },
  {
    title: "Lotería de Navidad",
    description: "Ya tenemos nuestra lotería para navidad!",
    image: loteria,
    alt: "loteria-navidad",
    url: "",
  },
  {
    title: "Concurso de Relatos Cortos",
    description:
      "Plazo de inscripción hasta el próximo 17 de noviembre, sólo mayores de 18 años",
    image: relatos,
    url: "",
    alt: "concurso-relatos-cortos",
  },
  {
    title: "Concurso de Fotografía",
    description:
      "Plazo de inscripción hasta el próximo 17 de noviembre, sin limite de edad",
    image: fotografia,
    alt: "concurso-de-fotografia",
    url: "",
  },
  {
    title: "PROYECTO NUEVO CREA 2023",
    description:
      "El pasado 18 de abril de 2023, se presentó la nueva convocatoria",
    image: proyectoCrea,
    alt: "proyecto-crea-2023",
    url: "",
  },
  {
    title: "Somos Portada de Periódico",
    description:
      "Desde Marzo, nuestra asociación ha cambiado su metodología de trabajo",
    image: somosPortada,
    url: "",
    alt: "somos-portada",
  },
  {
    title: "XIII CONGRESO DE EMPLEO CON APOYO",
    description:
      "Los días 13, 14 y 15 de junio se celebró el XIII Congreso de Empleo en la facultad de derecho de Burgos, organizado por AESE y Down Burgos.",
    image: congreso,
    alt: "un-día-en-afymos",
    url: "",
  },
];

export const sliderSettings = {
  arrows: false,
  slidesToShow: 3,
  focusOnselect: false,
  accessability: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const basket = [
  {
    id: 1,
    cover: basket1,
    title: "",
    alt: "foto baloncesto",
  },
  {
    id: 2,
    cover: basket2,
    title: "",
    alt: "foto baloncesto",
  },
  {
    id: 3,
    cover: basket3,
    title: "",
    alt: "foto baloncesto",
  },
  {
    id: 3,
    cover: basket4,
    title: "",
    alt: "foto baloncesto",
  },
];

export const diputacion = [
  {
    id: 1,
    cover: diputacion1,
    title: "",
    alt: "foto diputacion",
  },
  {
    id: 2,
    cover: diputacion2,
    title: "",
    alt: "foto diputacion",
  },
  {
    id: 3,
    cover: diputacion3,
    title: "",
    alt: "foto diputacion",
  },
  {
    id: 3,
    cover: diputacion4,
    title: "",
    alt: "foto diputacion",
  },
];
