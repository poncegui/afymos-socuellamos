import creaOne from "../assets/proyecto-crea/nuevo-crea-actualizado.jpg";
import nuevoCrea26 from "../assets/proyecto-crea/nuevo-crea-26.png";
import creaTwo from "../assets/proyecto-crea/logos.jpg";
import dipticoCrea from "../assets/proyecto-crea/diptico-crea-26.pdf";
import dip1 from "../assets/proyecto-crea/diptico-crea-26-1.png";
import dip2 from "../assets/proyecto-crea/diptico-crea-26-2.png";

export const creaDataOne = {
  id: "creaDataOne",
  reverse: true,
  inverse: false,
  topLine: {
    text: "Proyecto NUEVO CREA: FORMACIÓN Y EMPLEO",
  },
  headline: "Impulsando la inclusión laboral en AFYMOS",
  description:
    "¿QUÉ ES EL NUEVO CREA? Es un proyecto de FORMACIÓN DUAL que combina formación profesional para el empleo con trabajo efectivo en la empresa, formalizado con un contrato de formación en alternancia con el empleo. DIRIGIDO A PERSONAS CON DISCAPACIDAD.",
  img: nuevoCrea26,
};

export const creaDataTwo = {
  id: "creaDataTwo",
  reverse: true,
  inverse: false,
  topLine: {
    text: "Empresas adheridas y Responsabilidad Social",
  },
  headline:
    "Empresas participantes y apoyo al desarrollo del proyecto",
  description:
    "Las empresas adheridas en esta convocatoria han sido: Cabezuelo Foods, EFA Molino de Viento, Centro Concertado Virgen de Loreto, Asociación de Alzheimer de Tomelloso, Asociación Alzheimer Villarrobledo, Victor Mateo, Félix Food Logistics y Afymos Asociación. Su compromiso de Responsabilidad Social Empresarial ha sido clave para el desarrollo del NUEVO CREA.",
  img: creaTwo,
};

export const creaDataThree = {
  id: "creaDataThree",
  reverse: false,
  inverse: false,
  topLine: {
    text: "Conoce nuestro NUEVO CREA",
  },
  headline: "Detalles del proyecto y requisitos",
  description:
    `FORMACIÓN DUAL. 35% Formación: Se impartirá la Especialidad Formativa "Operaciones Auxiliares en el Departamento de Administración y Recepción para Personas con Discapacidad Intelectual". Impartido en el Centro de Formación AFYMOS, Socuéllamos.

Horario de formación:\n- Lunes 9:00-14:00 y 15:30-18:30 (8 horas)\n- Martes 08:00-14:00 (6 horas)

65% Trabajo: Las horas de trabajo son en función del convenio laboral de la empresa. Horario: mañana y tarde. Tipo de contrato: Formación en Alternancia con el Empleo. Duración: aproximadamente 6 meses.

REQUISITOS DE ACCESO: Personas con discapacidad con un grado igual o superior al 33% reconocido; estar inscrito como demandante de empleo; no haber participado en otros proyectos CREA en los últimos 5 años o tener un nivel inferior de formación en la misma familia profesional (Administración y gestión).

INSCRIPCIÓN: https://e-empleo.jccm.es/formacion/jsp/solicitudes/busquedaGrupos.jsp

APOYO LABORAL: La persona contratada contará con el apoyo de un preparador laboral que guiará las tareas y las adaptaciones necesarias.`,
  img: creaOne,
  buttonLabel: "Inscripción",
  href: "https://e-empleo.jccm.es/formacion/jsp/solicitudes/busquedaGrupos.jsp",
  downloadLabel: "Descargar díptico informativo",
  downloadHref: dipticoCrea,
  gallery: [dip1, dip2],
};
