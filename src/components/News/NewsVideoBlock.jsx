import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AccessibilityControls from '../Accessibility/AccessibilityControls';
import SectionLabel from '../SectionLabel';

const STORAGE_KEY = 'afymos_fontScale';
const DEFAULT_VIDEO_ID = '2Jlyz_ExeyQ';

const NewsVideoBlock = ({ videoId = DEFAULT_VIDEO_ID, heading, children }) => {
  const [play, setPlay] = useState(false);
  const [scale, setScale] = useState(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return v ? Number(v) : 1;
    } catch {
      return 1;
    }
  });

  useEffect(() => {
    try {
      document.documentElement.style.setProperty('--fs', String(scale));
    } catch {}

    const onStorage = e => {
      if (e.key === STORAGE_KEY) {
        try {
          const v = e.newValue ? Number(e.newValue) : 1;
          setScale(v);
          document.documentElement.style.setProperty('--fs', String(v));
        } catch {}
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [scale]);


  return (
    <Wrapper role="region" aria-label={heading || 'Vídeo noticia'}>
      <Inner>
        {/* Columna texto */}
        <TextCol>
          <SectionLabel>Noticia destacada</SectionLabel>
          <Heading>{heading || 'Vídeo destacado'}</Heading>
          <Body>{children}</Body>
          <AccessibilityControls text={children} />
        </TextCol>

        {/* Columna vídeo */}
        <VideoCol>
          {!play ? (
            <Thumbnail
              role="button"
              tabIndex={0}
              aria-label={`Reproducir vídeo: ${heading || 'Vídeo de noticias'}`}
              onClick={() => setPlay(true)}
              onKeyDown={e => e.key === 'Enter' && setPlay(true)}
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={`Miniatura: ${heading || 'Vídeo de noticias'}`}
                loading="lazy"
              />
              <PlayBtn aria-hidden="true">
                <PlayIcon />
              </PlayBtn>
            </Thumbnail>
          ) : (
            <VideoFrame>
              <iframe
                title={heading || 'Vídeo de noticias'}
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoFrame>
          )}
        </VideoCol>
      </Inner>
    </Wrapper>
  );
};

export default NewsVideoBlock;

/* ─── Styles ─────────────────────────────────────────────────────────────── */

const Wrapper = styled.section`
  background: #071c2f;
  padding: 4rem clamp(1.25rem, 5%, 5rem);
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 860px) {
    order: 2;
  }
`;

const VideoCol = styled.div`
  @media (max-width: 860px) {
    order: 1;
  }
`;

const Heading = styled.h3`
  font-size: calc(clamp(1.3rem, 2.8vw, 1.8rem) * var(--fs, 1));
  line-height: 1.2;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`;

const Body = styled.div`
  font-size: calc(0.975rem * var(--fs, 1));
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.95);
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 860px) {
    -webkit-line-clamp: 5;
  }
`;

const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);

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

const PlayBtn = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(7, 28, 47, 0.4);
  transition: background 0.25s ease;

  ${Thumbnail}:hover & {
    background: rgba(7, 28, 47, 0.55);
  }
`;

const PlayIcon = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
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
    transform: scale(1.12);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
  }
`;

const VideoFrame = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);

  iframe {
    width: 100%;
    height: 100%;
    display: block;
    border: 0;
  }
`;
