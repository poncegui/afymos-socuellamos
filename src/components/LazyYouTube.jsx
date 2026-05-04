import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  background-color: #000;
  cursor: ${props => props.$loaded ? 'default' : 'pointer'};
  overflow: hidden;
`;

const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 68px;
  height: 48px;
  background-color: rgba(255, 0, 0, 0.8);
  border-radius: 12px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 0, 0, 1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 0 10px 20px;
    border-color: transparent transparent transparent #fff;
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

const LazyYouTube = ({ videoId, title = "Video de YouTube" }) => {
  const [loaded, setLoaded] = useState(false);

  const handleClick = () => {
    setLoaded(true);
  };

  // Extraer videoId de URL completa si es necesario
  const extractVideoId = (input) => {
    if (!input) return '';

    // Si ya es un ID simple
    if (input.length === 11 && !input.includes('/')) {
      return input;
    }

    // Extraer de URL de YouTube
    const match = input.match(/(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([^?&"'>]+)/);
    return match ? match[1] : input;
  };

  const cleanVideoId = extractVideoId(videoId);

  return (
    <Container $loaded={loaded} onClick={!loaded ? handleClick : undefined}>
      {!loaded ? (
        <>
          <Thumbnail
            src={`https://img.youtube.com/vi/${cleanVideoId}/maxresdefault.jpg`}
            alt={title}
            loading="lazy"
          />
          <PlayButton aria-label="Reproducir video" />
        </>
      ) : (
        <IFrame
          src={`https://www.youtube-nocookie.com/embed/${cleanVideoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </Container>
  );
};

export default LazyYouTube;
