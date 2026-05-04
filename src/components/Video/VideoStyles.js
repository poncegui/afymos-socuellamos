import styled from 'styled-components';

/**
 * Estilos compartidos para componentes de video
 * Reutilizables en toda la aplicación para mantener consistencia
 */

export const VideoThumbnail = styled.div`
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

export const VideoPlayOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $bgColor }) => $bgColor || 'rgba(7, 28, 47, 0.35)'};
  transition: background 0.3s ease;

  ${VideoThumbnail}:hover & {
    background: ${({ $hoverBgColor }) => $hoverBgColor || 'rgba(7, 28, 47, 0.5)'};
  }
`;

export const VideoPlayButton = styled.div`
  width: ${({ $size }) => $size || '68px'};
  height: ${({ $size }) => $size || '68px'};
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
    border-width: ${({ $size }) => {
      const size = parseInt($size) || 68;
      const borderSize = Math.round(size * 0.18);
      const borderWidth = Math.round(size * 0.32);
      return `${borderSize}px 0 ${borderSize}px ${borderWidth}px`;
    }};
    border-color: transparent transparent transparent ${({ $color }) => $color || '#071c2f'};
    margin-left: ${({ $size }) => {
      const size = parseInt($size) || 68;
      return `${Math.round(size * 0.07)}px`;
    }};
  }

  ${VideoThumbnail}:hover & {
    transform: scale(1.1);
    box-shadow: 0 6px 28px rgba(0, 0, 0, 0.4);
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || '16/9'};
  border-radius: ${({ $borderRadius }) => $borderRadius || '12px'};
  overflow: hidden;
  box-shadow: ${({ $shadow }) => $shadow || '0 8px 24px rgba(0, 0, 0, 0.2)'};
`;

export const VideoIFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

/**
 * Hook personalizado para manejar el estado de reproducción de video
 */
export const useVideoPlayer = (autoplay = false) => {
  const [play, setPlay] = React.useState(autoplay);

  const handlePlay = () => setPlay(true);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setPlay(true);
    }
  };

  return {
    play,
    setPlay,
    handlePlay,
    handleKeyDown
  };
};

// Importar React para el hook
import React from 'react';
