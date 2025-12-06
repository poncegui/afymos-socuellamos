import React, { useEffect, useState } from "react";

import portadaVideo from "../assets/portada-cuenca.png";
import styled from "styled-components";

const VideoVisitaCuenca = () => {
  const [play, setPlay] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);

  const handlePlay = async () => {
    const video = await import("../assets/cuenca.mp4");
    setVideoSrc(video.default);
    setPlay(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper>
      <ContentWrapper>
        <TextBlock>
          <Title>Descubriendo Cuenca con Afymos</Title>
          <Subtitle>
            Gracias a la subvención{" "}
            <StyledLinkExt
              href="https://www.jccm.es/sede/tramite/KW8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conoce Castilla-La Mancha
            </StyledLinkExt>
          </Subtitle>
          <Paragraph>
            El pasado <strong>sábado 7 de junio</strong> pudimos descubrir los
            estupendos rincones de la ciudad de Cuenca. Visitamos el{" "}
            <strong>Museo de Ciencias</strong>, exploramos el universo en el
            planetario, paseamos por el centro histórico y por la tarde
            disfrutamos de la <strong>“Tierra de los dinosaurios”</strong> en el
            Museo de Paleontología.
          </Paragraph>
        </TextBlock>

        <AnimatedPhone className="animate-on-scroll">
          <PhoneFrame>
            <PhoneScreen>
              {!play ? (
                <Thumbnail
                  role="button"
                  onClick={handlePlay}
                  aria-label="Reproducir vídeo"
                >
                  <img
                    src={portadaVideo}
                    alt="Portada del vídeo de Cuenca"
                    loading="lazy"
                  />
                  <Overlay>▶</Overlay>
                </Thumbnail>
              ) : (
                videoSrc && (
                  <VideoPlayer
                    src={videoSrc}
                    controls
                    autoPlay
                    playsInline
                    aria-label="Vídeo sobre la visita a Cuenca"
                  />
                )
              )}
              <Reflection />
            </PhoneScreen>
          </PhoneFrame>
        </AnimatedPhone>

        <TextBlock>
          <Paragraph>
            Fue un día cargado de <strong>aprendizajes</strong>,{" "}
            <strong>descubrimientos castellano manchegos</strong> y convivencia
            de toda nuestra familia Afymera.
          </Paragraph>
          <Sponsors>
            Turismo Castilla-La Mancha · Economía, Empresas y Empleo · Junta de
            Comunidades de Castilla-La Mancha
            <br />
            <StyledLinkExt
              href="https://www.jccm.es/sede/tramite/KW8"
              target="_blank"
              rel="noopener noreferrer"
            >
              conocecastillalamancha
            </StyledLinkExt>{" "}
            · <Hashtags>#Enunlugardetuvida</Hashtags>
          </Sponsors>
        </TextBlock>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default React.memo(VideoVisitaCuenca);

// --- Estilos ---

const SectionWrapper = styled.section`
  padding: 5rem 2rem;
  background-color: #f4f0fa;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 0 1.5rem;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  max-width: 360px;
  color: #1e2a38;
  padding: 0 1rem;

  @media (max-width: 900px) {
    max-width: 100%;
    padding: 0;
  }
`;

const Title = styled.h2`
  font-size: clamp(1.8rem, 2vw + 1rem, 2.6rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h3`
  font-size: clamp(1.4rem, 1.8vw, 1.8rem);
  font-weight: 500;
  font-style: italic;
  color: #555;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: clamp(1.4rem, 1.6vw, 1.6rem);
  line-height: 1.7;
  margin-bottom: 1.2rem;

  strong {
    font-weight: 600;
  }
`;

const Sponsors = styled.p`
  font-size: clamp(1.2rem, 1.4vw, 1.4rem);
  color: #444;
  margin-top: 1rem;
`;

const Hashtags = styled.strong`
  display: block;
  margin-top: 0.5rem;
  color: #333;
`;

const StyledLinkExt = styled.a`
  color: #6a4ba6;
  font-weight: 600;
  text-decoration: underline;
  transition: color 0.3s ease;

  &:hover {
    color: #4e338a;
  }
`;

const AnimatedPhone = styled.div`
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PhoneFrame = styled.div`
  width: 320px;
  aspect-ratio: 9 / 16;
  border-radius: 36px;
  background: #000;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  transform: rotate(-6deg);
  overflow: hidden;
  border: 6px solid #1a1a1a;

  @media (max-width: 900px) {
    transform: none;
    width: 100%;
    max-width: 360px;
  }
`;

const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 3rem;
  color: white;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.4);
  padding: 0.8rem 1.2rem;
  border-radius: 50%;
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Reflection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.01) 40%,
    transparent 100%
  );
`;
