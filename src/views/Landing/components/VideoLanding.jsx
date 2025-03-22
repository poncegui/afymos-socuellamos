import React from "react";
import Video from "./Video";

const urlVideo = "https://www.youtube.com/embed/70xM5Dvf5Bk";

const VideoUnDiaEnAfymos = () => {
  return (
    <Video
    backgroundWhite
      sectionTitle="Un día en Afymos..."
      urlMoreInformation="/proyecto-crea"
      videoSrc={urlVideo}
      title="¿Cómo es un día en Afymos?"
      subtitle="Nuestro propósito"
      description="Acompañamos a personas con discapacidad y a sus familias, ofreciendo atención integral, oportunidades de desarrollo y un entorno lleno de apoyo, empatía y autonomía."
    />
  );
};

export default VideoUnDiaEnAfymos;
