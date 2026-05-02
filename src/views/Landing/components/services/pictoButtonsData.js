import capacitacion from "../assets/pictogramas/promocion.png";
import centroDia from "../assets/pictogramas/proteger.png";
import diagnostico from "../assets/pictogramas/historial-medico.png";
import familias from "../assets/pictogramas/familia.png";
import formacion from "../assets/pictogramas/educacion.png";
import servicios from "../../../terapias/components/assets/pictogramas/terapia-fisica.png";
import viviendaSocial from "../assets/pictogramas/vivienda-social.png";
import voluntariado from "../assets/pictogramas/apoyo.png";

export const servicesData = [
  {
    id: 1,
    name: "Centro de Dia",
    img: centroDia,
    alt: "Centro de Dia",
    url: "/centro-de-dia",
    browserTitle: "Ir a Centro de Día de Afymos",
    seoTitle: "Centro de Día - Afymos",
  },
  {
    id: 2,
    name: "Servicio de capacitación",
    img: capacitacion,
    alt: "Servicio de capacitación",
    url: "/servicio-capacitacion",
    browserTitle: "Ir a Servicio de Capacitación de Afymos",
    seoTitle: "Capacitación - Afymos",
  },
  {
    id: 3,
    name: "Viviendas con apoyo",
    img: viviendaSocial,
    alt: "Viviendas con apoyo",
    url: "/viviendas-con-apoyo",
    browserTitle: "Ir a Viviendas con Apoyo de Afymos",
    seoTitle: "Viviendas con Apoyo - Afymos",
  },

  {
    id: 4,
    name: "Centro de Formación",
    img: formacion,
    alt: "formacion",
    url: "/formacion",
    browserTitle: "Ir a Centro de Formación de Afymos",
    seoTitle: "Formación - Afymos",
  },
  {
    id: 5,
    name: "Ocio y voluntariado",
    img: voluntariado,
    alt: "Ocio y voluntariado",
    url: "/ocio-y-voluntariado",
    browserTitle: "Ir a Ocio y Voluntariado de Afymos",
    seoTitle: "Ocio y Voluntariado - Afymos",
  },
  {
    id: 6,
    name: "Valoración y Diagnóstico",
    img: diagnostico,
    alt: "Valoración y Diagnóstico",
    url: "/valoracion-y-diagnostico",
    browserTitle: "Ir a Valoración y Diagnóstico de Afymos",
    seoTitle: "Valoración y Diagnóstico - Afymos",
  },
  {
    id: 7,
    name: "Terapias",
    img: servicios,
    alt: "terapias",
    url: "/terapias",
    browserTitle: "Ir a Terapias de Afymos",
    seoTitle: "Terapias - Afymos",
  },
  {
    id: 8,
    name: "Atención familias",
    img: familias,
    alt: "Atención familias",
    url: "/apoyo-familias",
    browserTitle: "Ir a Atención a Familias de Afymos",
    seoTitle: "Atención a Familias - Afymos",
  },
];
