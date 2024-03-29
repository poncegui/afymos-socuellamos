import basket from "../assets/icons/basketball-solid.svg";
import capacitacion from "../assets/pictogramas/promocion.png";
import capacity from "../assets/icons/hand-fist-solid.svg";
import centroDia from "../assets/pictogramas/proteger.png";
import centroDiversidad from "../assets/pictogramas/campus-universitario.png";
import contabilidad from "../assets/pictogramas/contabilidad.png";
import cursos from "../assets/icons/graduation-cap-solid.svg";
import diagnostico from "../assets/pictogramas/historial-medico.png";
import familias from "../assets/pictogramas/familia.png";
import formacion from "../assets/pictogramas/educacion.png";
import junta from "../assets/pictogramas/junta.png";
import organigrama from "../assets/pictogramas/organigrama.png";
import servicios from "../../../terapias/components/assets/pictogramas/terapia-fisica.png";
import visitas from "../assets/icons/van-shuttle-solid.svg";
import viviendaSocial from "../assets/pictogramas/vivienda-social.png";
import voluntariado from "../assets/pictogramas/apoyo.png";

export const servicesData = [
  {
    id: 1,
    name: "Centro de Dia",
    img: centroDia,
    alt: "Centro de Dia",
    url: "/centro-de-dia",
  },
  {
    id: 2,
    name: "Servicio de capacitación",
    img: capacitacion,
    alt: "Servicio de capacitación",
    url: "/servicio-capacitacion",
  },
  {
    id: 3,
    name: "Viviendas con apoyo",
    img: viviendaSocial,
    alt: "Viviendas con apoyo",
    url: "/viviendas-con-apoyo",
  },

  {
    id: 4,
    name: "Centro de Formación",
    img: formacion,
    alt: "formacion",
    url: "/formacion",
  },
  {
    id: 5,
    name: "Ocio y volunturariado",
    img: voluntariado,
    alt: "Ocio y volunturariado",
    url: "/ocio-y-voluntariado",
  },
  {
    id: 6,
    name: "Valoración y Diagnóstico",
    img: diagnostico,
    alt: "Valoración y Diagnóstico",
    url: "/valoracion-y-diagnostico",
  },
  {
    id: 7,
    name: "Terapias",
    img: servicios,
    alt: "terapias",
    url: "/terapias",
  },
  {
    id: 8,
    name: "Atención familias",
    img: familias,
    alt: "Atención familias",
    url: "/apoyo-familias",
  },
];

export const aboutUsData = [
  {
    id: 1,
    name: "Instalaciones Centro",
    img: centroDiversidad,
    alt: "Instalaciones Centro",
    url: "/instalaciones-centro-diversidad",
  },
  {
    id: 2,
    name: "Organigrama",
    img: organigrama,
    alt: "organigrama",
    url: "/organigrama",
  },
  {
    id: 3,
    name: "Junta Directiva",
    img: junta,
    alt: "Junta Directiva",
    url: "/junta-directiva",
  },
  {
    id: 4,
    name: "Cuentas anuales 2022",
    img: contabilidad,
    alt: "Cuentas anuales 2022",
    url: "/pdf-cuentas-22",
  },
];

export const activitiesDeprecated = [
  {
    id: 1,
    name: "Visita Diputación Ciudad Real",
    img: visitas,
    alt: "Instalaciones Centro",
    url: "/visitas",
  },
  {
    id: 2,
    name: "Somos campeones!",
    img: basket,
    alt: "Somos campeones!",
    url: "/somos-campeones",
  },
  {
    id: 3,
    name: "Cursos 2024",
    img: cursos,
    alt: "Cursos 2024",
    url: "/cursos-2024",
  },
  {
    id: 4,
    name: "Semana Capacidad",
    img: capacity,
    alt: "Semana Capacidad",
    url: "/semana-capacidad",
  },
];
