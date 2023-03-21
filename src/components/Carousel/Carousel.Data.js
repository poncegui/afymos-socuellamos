import eventoGlobalcaja from "../../images-news/loteria.jpg.png";
import afymos from "../../images-news/un-dia-afymos.jpg";
import proyecto from "../../images-news/proyecto-crea.png";

export const ApiCarousel = [
  {
    title: "un día en afymos",
    description: "Loren Ipsum.",
    image: afymos,
    alt: "un-día-en-afymos",
  },
  {
    title: "Proyecto CREA",
    description: "inauguracion proyecto CREA - abril 2022",
    image: proyecto,
    alt: "un-día-en-afymos",
  },
  {
    title: "un día en afymos",
    description: "Loren Ipsum.",
    image: eventoGlobalcaja,
    alt: "un-día-en-afymos",
  },
  {
    title: "un día en afymos",
    description: "Servicio de Valoración y Diagnóstico",
    image: afymos,
    alt: "un-día-en-afymos",
  },
  {
    title: "un día en afymos",
    description: "Loren Ipsum.",
    image: afymos,
    alt: "un-día-en-afymos",
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
