import React from 'react';
import Video from './Video';
import portadaCrea from '../assets/portada-crea.png';

const VideoNuevoCrea = () => {
  return (
    <Video
      sectionTitle="Proyecto NUEVO CREA (Formación y empleo)"
      videoSrc="https://www.youtube.com/embed/oUmMhYVsFZE"
      coverImage={portadaCrea}
      urlMoreInformation="/proyecto-crea"
      title="Proyecto NUEVO CREA"
      subtitle="Formación, inclusión y oportunidades reales"
      description="El proyecto NUEVO CREA se ha llevado a cabo en AFYMOS para impulsar la inclusión laboral. Financiado por SEPE, el Gobierno de Castilla-La Mancha, y los Ministerios competentes, aprobado en 2024 y desarrollado de abril a noviembre de 2025."
    />
  );
};

export default VideoNuevoCrea;
