import podcast from "./assets/images-noticias/podcast/portada-spotify.jpg";
import proyectoCrea from "../../../proyectoCrea/assets/proyecto-crea/crea2024.png";

export const ApiCarousel = [
  {
    title: "Afymos estrena podcast!",
    description:
      "LA EDUCACIÓN INCLUSIVA con la colaboración de los docentes de IES Fernando de Mena  y Centro Concertado Virgen de Loreto.",
    image: podcast,
    alt: "Afymos estrena podcast!",
    url: "https://acortar.link/RGYfzQ",
  },
  {
    title: "PROYECTO NUEVO CREA 2024",
    description:
      "Afymos es entidad promotora del Proyecto de Formación y Empleo en el seno de la empresa NUEVO CREA",
    image: proyectoCrea,
    alt: "proyecto-crea",
    url: "/proyecto-crea",
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
