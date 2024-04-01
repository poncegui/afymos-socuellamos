import React from "react";
import Video from "./Video";

const urlVideo = "https://www.youtube.com/embed/70xM5Dvf5Bk";

const VideoLanding = () => {
  return (
    <Video
      sectionTitle="Un día en Afymos..."
      urlMoreInformation="/proyecto-crea"
      videoSrc={urlVideo}
      title="¿Cómo es un día en Afymos?"
      subtile="Nuestro propósito:"
      text="Ofrecer apoyo a familias y personas con algún tipo de discapacidad física, intelectual o sensorial."
    />
  );
};

export default VideoLanding;
