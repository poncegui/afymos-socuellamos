import basket from "../assets/campeonato-baloncesto/campeones-baloncesto.jpg";
import basket2 from "../assets/campeonato-baloncesto/campeones-baloncesto-2.jpg";
import basket3 from "../assets/campeonato-baloncesto/campeones-baloncesto-3.jpg";
import basket4 from "../assets/campeonato-baloncesto/campeones-baloncesto-4.jpg";
import diputacion from "../assets/visita-diputacion/diputacion.jpg";
import diputacion2 from "../assets/visita-diputacion/diputacion-2.jpg";
import diputacion3 from "../assets/visita-diputacion/diputacion-3.jpg";
import diputacion4 from "../assets/visita-diputacion/diputacion-4.jpg";

export const allNewsDataOne = {
  reverse: false,
  inverse: false,
  topLine: {
    text: "Visitamos la Diputación de Ciudad Real",
  },
  headline: "",
  description: ".",
  img: diputacion,
};

export const allNewsDataTwo = {
  reverse: true,
  inverse: false,
  topLine: {
    text: "",
  },
  headline: "Somos Campeones:",
  description: "",
  img: diputacion,
};

export const diputacionData = [
  {
    id: 1,
    cover: diputacion,
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

export const basketData = [
  {
    id: 1,
    cover: basket,
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
