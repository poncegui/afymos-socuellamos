// Example data for NewsList — single news item requested by the user

import heroImg from "../../views/Landing/assets/images-noticias/news.png";
import carlos1 from "../../views/Landing/assets/images-noticias/carlos-1.jpg";
import carlos2 from "../../views/Landing/assets/images-noticias/carlos-2.jpg";
import carlos3 from "../../views/Landing/assets/images-noticias/carlos-3.jpg";
import carlos4 from "../../views/Landing/assets/images-noticias/carlos-4.jpg";
// carlos5 was removed from the gallery; keep import commented for future use
// import carlos5 from "../../views/Landing/assets/images-noticias/carlos-5.jpg";
import carlosMp4 from "../../views/Landing/assets/images-noticias/carlos.mp4";

export const sampleNews = [
  {
    id: "juntos-2025",
    title:
      'Inician prácticas formativas laborales en el programa "Juntos Somos Capaces" (Fundación MAPFRE)',
    excerpt: `En septiembre se iniciaron prácticas formativas laborales enmarcadas en el programa Juntos Somos Capaces de Fundación MAPFRE.
Gracias a este programa, Afymos, Plena Inclusión Castilla La Mancha, Fundación MAPFRE y el Ayuntamiento de Socuéllamos
firmaron un convenio de colaboración para que seis personas de nuestro servicio de capacitación realizasen prácticas en las diferentes dependencias del consorcio municipal, en la categoría de conserje/recepcionista.

En la primera fase de estas prácticas, las personas participantes desarrollaron sus actividades en:
• Museo Torre del Vino de Socuéllamos
• Centro de Empresas
• Biblioteca Municipal

En la segunda fase, que se está desarrollando actualmente, las prácticas se realizarán en:
• Biblioteca Municipal
• Punto de Información del Ayuntamiento de Socuéllamos
• Instalaciones deportivas municipales

Al finalizar dichas prácticas, recibirán una beca por parte de la Fundación Mapfre por la realización de las mismas.
Gracias a la creación del Punto de Información en el Ayuntamiento, se ha realizado una adaptación pictográfica de los distintos departamentos del mismo, lo que facilitará el acceso a toda la población.

Esta actividad se engloba dentro de los objetivos del Servicio de Capacitación el cual está cofinanciado por el FSE+, la Consejería de Bienestar Social de Castilla-La Mancha y el Ayuntamiento de Socuéllamos.`,
    image: heroImg,
    images: [heroImg],
    alt: "Participantes en prácticas formativas",
    date: "2025-09-23",
    href: "/noticias/juntos-somos-capaces-practicas-2025",
    tags: [
      "afymos",
      "BienestarSocial",
      "FSE",
      "ministeriodetrabajo",
      "FondosEuropeos",
      "JuntosSomosCapaces",
      "LaRecompensaEmocional",
    ],
  },
  {
    id: "dia-discapacidad-2025-12-03",
    title:
      "Día Internacional de las personas con discapacidad — Pleno Diputación de Ciudad Real",
    excerpt: `3 de diciembre — Día Internacional de las personas con discapacidad. Hemos sido invitados por la Excma. Diputación de Ciudad Real para participar en el pleno con motivo del Día de la Discapacidad…

Y nuestro compañero CARLOS ha sido el gran protagonista.

Con mucha fuerza y mucha verdad, Carlos ha hablado sobre la necesidad de tener un trabajo estable que garantice la independencia.

Ha sido un momento emocionante y lleno de orgullo.

Cuando una persona con discapacidad toma la palabra en una institución, habla por todas y todos.

Gracias a la Diputación por abrir sus puertas, y gracias Carlos por representar a tantas y tantas personas con discapacidad intelectual que no consiguen un trabajo estable.

Hemos aprovechado para visitar el precioso Palacio de la Diputación de Ciudad Real junto con Natalia, Javier y Denisa.`,
    image: carlos4,
  images: [carlos1, carlos2, carlos3],
  subtitle: "Discurso de Carlos",
    videoLocal: carlosMp4,
    alt: "Pleno Diputación de Ciudad Real - Carlos representando",
    date: "2025-12-03",
    href: "/noticias/dia-discapacidad-diputacion-cr-2025",
    tags: ["discapacidad", "diputacion", "empleo", "afymos"],
  },
];
