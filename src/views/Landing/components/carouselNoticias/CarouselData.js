import podcast from "./assets/images-noticias/podcast/portada-spotify.jpg";
import proyectoCrea from "./assets/images-noticias/crea-2024/crea-2024.png";
import semanaSanta from "./assets/images-noticias/crea-2024/semana-santa.png";
import spotyfy from "./assets/spotify.svg";

export const newsData = [
  {
    image: semanaSanta,
    title: "Semana Santa",
    description:
      "¡Descubre la Semana Santa en silencio para una experiencia única y accesible!.",
    link: "https://www.facebook.com/photo?fbid=730503209196120&set=a.417736193806158",
    buttonLabel: "Saber más",
    buttonIcon: spotyfy,
  },
  {
    image: podcast,
    title: "Afymos estrena podcast!",
    description:
      "LA EDUCACIÓN INCLUSIVA con la colaboración de los docentes de IES Fernando de Mena  y Centro Concertado Virgen de Loreto.",
    link: "https://acortar.link/RGYfzQ",
    buttonLabel: "Play",
    buttonIcon: spotyfy,
  },
  {
    image: proyectoCrea,
    title: "Inauguración Proyecto Crea 2024",
    description: "Descripción de la noticia 2",
    link: "https://www.facebook.com/photo/?fbid=730518849194556&set=pcb.730519255861182",
    buttonLabel: "Saber más",
    buttonIcon: "",
  },
];

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
