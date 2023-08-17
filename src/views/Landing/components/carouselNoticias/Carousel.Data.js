import congreso from "./assets/images-noticias/congreso-con-apoyo-burgos/congreso.jpg";
import proyectoCrea from "../../../proyectoCrea/assets/proyecto-crea/proyecto-crea-01.jpg";
import somosPortada from "./assets/images-noticias/somos-portada/somos-portada.jpg";

export const ApiCarousel = [
  {
    title: "PROYECTO NUEVO CREA 2023",
    description:
      "El pasado 18 de abril de 2023, se presentó la nueva convocatoria",
    image: proyectoCrea,
    alt: "proyecto-crea-2023",
    url: "/proyecto-crea",
  },
  {
    title: "Somos Portada de Periódico",
    description:
      "Desde Marzo, nuestra asociación ha cambiado su metodología de trabajo",
    image: somosPortada,
    url: "/somos-portada",
    alt: "somos-portada",
  },
  {
    title: "XIII CONGRESO DE EMPLEO CON APOYO",
    description:
      "Los días 13, 14 y 15 de junio se celebró el XIII Congreso de Empleo en la facultad de derecho de Burgos, organizado por AESE y Down Burgos.",
    image: congreso,
    alt: "un-día-en-afymos",
    url: "/congreso-empleo-apoyo",
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
