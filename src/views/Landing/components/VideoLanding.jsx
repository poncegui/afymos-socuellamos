import React, { Suspense, lazy } from "react";

import portadaImg from "../assets/portada-un-dia-afymos.png";

const Video = lazy(() => import("./Video"));

const urlVideo = "https://www.youtube.com/embed/70xM5Dvf5Bk";

const VideoUnDiaEnAfymos = () => {
  return (
    <Suspense
      fallback={
        <div style={{ textAlign: "center", padding: "2rem" }}>
          Cargando video...
        </div>
      }
    >
      <Video
        backgroundWhite
        sectionTitle="Un día en Afymos..."
        urlMoreInformation="/proyecto-crea"
        videoSrc={urlVideo}
        title="¿Cómo es un día en Afymos?"
        subtitle="Nuestro propósito"
        description="Acompañamos a personas con discapacidad y a sus familias, ofreciendo atención integral, oportunidades de desarrollo y un entorno lleno de apoyo, empatía y autonomía."
        coverImage={portadaImg}
      />
    </Suspense>
  );
};

export default VideoUnDiaEnAfymos;
