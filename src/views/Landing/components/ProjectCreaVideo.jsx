import React from 'react';
import Video from './Video';
import portadaCrea from '../assets/portada-crea.png';

const VideoNuevoCrea = () => {
  return (
    <Video
      sectionTitle="Proyecto Nuevo CREA 2025"
      videoSrc="https://www.youtube.com/embed/HZ-Xvy2ZSsk"
      coverImage={portadaCrea}
      urlMoreInformation="/proyecto-crea"
      title="Proyecto CREA"
      subtitle="Formación, inclusión y oportunidades reales"
      description="Descubre nuestro programa de formación y empleo dirigido a personas con discapacidad en Socuéllamos. Un espacio donde se fomenta la autonomía, el desarrollo personal y la integración laboral."
    />
  );
};

export default VideoNuevoCrea;
