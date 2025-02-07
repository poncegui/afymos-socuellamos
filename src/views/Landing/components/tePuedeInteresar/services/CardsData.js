import acuerdo from "../assets/pdf/acuerdo.pdf";
import amaltea from "../assets/icons/amaltea.jpg";
import castilla from "../assets/icons/logo-castillaLaMancha.png";
import charlas from "../assets/icons/comment-regular.svg";
import compromiso from "../assets/icons/compromiso.jpg";
import diverses from "../assets/icons/diverses.jpg";
import diversesDoc from '../assets/pdf/diverses.pdf';
import docCompromiso from '../assets/pdf/compromiso.pdf';
import events from "../assets/icons/face-smile-wink-solid.svg";
import graduation from "../assets/icons/graduation.svg";
import mujer from "../assets/icons/institutoDeLaMujer.png";
import pdf from './crea_2025.pdf'
import planIgualdad from '../assets/pdf/planIgualdad.pdf';
import podcast2 from "../../../assets/images-cover/afymos-show.jpg";
import protocolo from '../assets/pdf/protocoloPrevencion.pdf';

export const cardsServiceData = [
  {
    key: 1,
    title: "THE AFYMOS SHOW PODCAST",
    description:
      "Alumnos y trabajadores nos cuentan su experiencia en el NUEVO CREA 2025.",
    image: podcast2,
    alt: "!Afymos estrena podcast!",
    url: "https://acortar.link/RGYfzQ",
    color: "#f5f5f5",
  },
  {
    key: 2,
    title: "NUEVO CREA 2025",
    description:
      "Afymos es entidad promotora del Proyecto de Formación y Empleo en el seno de la empresa NUEVO CREA",
    image: graduation,
    alt: "proyecto-crea",
    url: pdf,
    color: "#224464",
  },
  {
    key: 3,
    title: "CHARLAS EDUCATIVAS",
    description:
      "LA EDUCACIÓN INCLUSIVA con la colaboración de los docentes de IES Fernando de Mena  y Centro Concertado Virgen de Loreto.",
    image: charlas,
    alt: "Charlas profesionales",
    url: "https://fb.watch/r896b1s2MT/",
    color: "#c6b1c9",
  },
  {
    key: 4,
    title: "ACUERDO ADEVI y FEDA",
    description:
      "FEDA y ADEVI firman un acuerdo por el que facilitarán contratos de formación a los participantes de Asprona",
    image: events,
    alt: "acuerdo con Feda y Adevi",
    url:"https://villarrobledonoticias.com/noticias/2024-06-feda-y-adevi-firman-un-acuerdo-por-el-que-facilitaran-contratos-de-formacion-a-los-participantes-de-asprona-en-la-formacion-para-personas-con-discapacidad-de-la-asociacion-afymos/",
    color: "#f5f5f5",

  },
];



export const cardsIgualdadData = [
  {
    key: 1,
    title: "Compromiso con la igualdad",
    description:
      "Alumnos y trabajadores nos cuentan su experiencia en el NUEVO CREA 2025.",
    image: compromiso,
    alt: "Compromiso con la igualdad",
    url: docCompromiso,
    color: "#f5f5f5",
  },
  {
    key: 2,
    title: "Plan de Igualdad",
    description:
      "Afymos es entidad promotora del Proyecto de Formación y Empleo en el seno de la empresa NUEVO CREA",
    image: amaltea,
    alt: "Plan de Igualdad",
    url: planIgualdad,
    color: "#224464",
  },
  {
    key: 3,
    title: "Acuerdo Igualdad",
    description:
      "LA EDUCACIÓN INCLUSIVA con la colaboración de los docentes de IES Fernando de Mena  y Centro Concertado Virgen de Loreto.",
    image: castilla,
    alt: "Acuerdo Igualdad",
    url: acuerdo,
    color: "#c6b1c9",
  },
  {
    key: 4,
    title: "Protocolo para Prevención y Actuación",
    description:
      "FEDA y ADEVI firman un acuerdo por el que facilitarán contratos de formación a los participantes de Asprona",
    image: mujer,
    alt: "Protocolo para Prevención y Actuación",
    url:protocolo,
    color: "#f7f5f7",
  },
  {
    key: 4,
    title: "Diverses",
    description:
      "FEDA y ADEVI firman un acuerdo por el que facilitarán contratos de formación a los participantes de Asprona",
    image: diverses,
    alt: "Diverses",
    url:diversesDoc,
  color:'',
  }
];
