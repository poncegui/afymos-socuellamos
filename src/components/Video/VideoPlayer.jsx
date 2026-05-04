import { useState } from 'react';
import styled from 'styled-components';

/**
 * Componente de reproductor de video reutilizable con lazy loading
 * Soporta YouTube y otras fuentes de video
 *
 * @param {string} videoSrc - URL del video (YouTube embed o directo)
 * @param {string} title - Título del video para accesibilidad
 * @param {string} coverImage - Imagen de portada personalizada (opcional)
 * @param {string} aspectRatio - Ratio de aspecto (default: '16/9')
 * @param {boolean} autoplay - Reproducir automáticamente al cargar (default: false)
 * @param {object} wrapperStyle - Estilos personalizados para el contenedor
 */
const VideoPlayer = ({
  videoSrc,
  title,
  coverImage,
  aspectRatio = '16/9',
  autoplay = false,
  wrapperStyle = {},
  className
}) => {
  const [play, setPlay] = useState(autoplay);

  // Extraer ID de video de YouTube si es una URL de YouTube
  const extractYouTubeId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([^?&"'>]+)/);
    return match ? match[1] : null;
  };

  const youtubeId = extractYouTubeId(videoSrc);
  const isYouTube = !!youtubeId;

  // Obtener URL de thumbnail
  const getThumbnail = () => {
    if (coverImage) return coverImage;
    if (isYouTube) return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
    return null;
  };

  // Obtener URL del iframe
  const getIframeSrc = () => {
    if (isYouTube) {
      return `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;
    }
    return videoSrc;
  };

  const thumbnail = getThumbnail();

  return (
    <Container $aspectRatio={aspectRatio} style={wrapperStyle} className={className}>
      {!play && thumbnail ? (
        <Thumbnail
          role="button"
          tabIndex={0}
          aria-label={`Reproducir vídeo: ${title}`}
          onClick={() => setPlay(true)}
          onKeyDown={e => e.key === 'Enter' && setPlay(true)}
        >
          <img
            src={thumbnail}
            alt={`Portada: ${title}`}
            loading="lazy"
          />
          <PlayOverlay aria-hidden="true">
            <PlayButton />
          </PlayOverlay>
        </Thumbnail>
      ) : (
        <IFrame
          src={getIframeSrc()}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </Container>
  );
};

export default VideoPlayer;

/* Styled Components Reutilizables */

const Container = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`;

const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 4px;
  }
`;

const PlayOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(7, 28, 47, 0.35);
  transition: background 0.3s ease;

  ${Thumbnail}:hover & {
    background: rgba(7, 28, 47, 0.5);
  }
`;

const PlayButton = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px 0 12px 22px;
    border-color: transparent transparent transparent #071c2f;
    margin-left: 5px;
  }

  ${Thumbnail}:hover & {
    transform: scale(1.1);
    box-shadow: 0 6px 28px rgba(0, 0, 0, 0.4);
  }
`;

const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;
