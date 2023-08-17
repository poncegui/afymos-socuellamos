import capacitacion from "../assets/pictogramas/promocion.png";
import centroDia from "../menuServices/assets/pictogramas/proteger.png";
import centroDiversidad from "../assets/pictogramas/campus-universitario.png";
import contabilidad from "../menuServices/assets/pictogramas/contabilidad.png";
import diagnostico from "../assets/pictogramas/historial-medico.png";
import familias from "../menuServices/assets/pictogramas/familia.png";
import formacion from "../menuServices/assets/pictogramas/educacion.png";
import junta from "../assets/pictogramas/junta.png";
import organigrama from "../assets/pictogramas/organigrama.png";
import servicios from "../../../terapias/components/assets/pictogramas/terapia-fisica.png";
import viviendaSocial from "../menuServices/assets/pictogramas/vivienda-social.png";
import voluntariado from "../assets/pictogramas/apoyo.png";

export const servicesData = [
  {
    id: 1,
    name: "Centro de Dia",
    img: centroDia,
    alt: "centro-de-dia",
    url: "/centro-de-dia",
  },
  {
    id: 2,
    name: "Servicio de capacitación",
    img: capacitacion,
    alt: "servicio-capacitacion",
    url: "/servicio-capacitacion",
  },
  {
    id: 3,
    name: "Viviendas con apoyo",
    img: viviendaSocial,
    alt: "viviendas-con-apoyo",
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
    alt: "ocio-y-voluntariado",
    url: "/ocio-y-voluntariado",
  },
  {
    id: 6,
    name: " Valoración y Diagnóstico",
    img: diagnostico,
    alt: "/valoración-y-diagnóstico",
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
    name: " Atención familias",
    img: familias,
    alt: "apoyo-familias",
    url: "/apoyo-familias",
  },
];

export const aboutUsData = [
  {
    id: 1,
    name: "Instalaciones Centro",
    img: centroDiversidad,
    alt: "instalaciones-centro-diversidad",
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
    alt: "junta-directiva",
    url: "/junta-directiva",
  },
  {
    id: 4,
    name: "Cuentas anuales 2021",
    img: contabilidad,
    alt: "logo-cuentas-anuales",
    url: "/pdf-cuentas-21",
  },
];
