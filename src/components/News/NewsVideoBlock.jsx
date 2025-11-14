import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const STORAGE_KEY = 'afymos_fontScale';

const DEFAULT_VIDEO_ID = '2Jlyz_ExeyQ';

const NewsVideoBlock = ({ videoId = DEFAULT_VIDEO_ID, heading, children }) => {
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&amp;modestbranding=1`;

  // Use the global font scale so controls are synchronized across the site
  const [scale, setScale] = useState(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return v ? Number(v) : 1;
    } catch (e) {
      return 1;
    }
  });

  useEffect(() => {
    // ensure document root has the current scale
    try {
      document.documentElement.style.setProperty('--fs', String(scale));
    } catch (e) {}

    // listen for changes from other controls/tabs
    const onStorage = e => {
      if (e.key === STORAGE_KEY) {
        try {
          const v = e.newValue ? Number(e.newValue) : 1;
          setScale(v);
          document.documentElement.style.setProperty('--fs', String(v));
        } catch (err) {}
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [scale]);

  return (
    <Wrapper role="region" aria-label={heading || 'Video noticia'}>
      <Inner>
        <Controls>
          <ControlButton
            aria-label="Disminuir tamaño de texto"
            onClick={() => {
              try {
                const cur = Number(localStorage.getItem(STORAGE_KEY) || 1);
                const next = Math.max(0.8, Number((cur - 0.1).toFixed(2)));
                localStorage.setItem(STORAGE_KEY, String(next));
                document.documentElement.style.setProperty(
                  '--fs',
                  String(next)
                );
                setScale(next);
              } catch (e) {}
            }}
            type="button"
          >
            A-
          </ControlButton>
          <ControlButton
            aria-label="Tamaño por defecto"
            onClick={() => {
              try {
                localStorage.setItem(STORAGE_KEY, '1');
                document.documentElement.style.setProperty('--fs', '1');
                setScale(1);
              } catch (e) {}
            }}
            type="button"
          >
            A
          </ControlButton>
          <ControlButton
            aria-label="Aumentar tamaño de texto"
            onClick={() => {
              try {
                const cur = Number(localStorage.getItem(STORAGE_KEY) || 1);
                const next = Math.min(2, Number((cur + 0.1).toFixed(2)));
                localStorage.setItem(STORAGE_KEY, String(next));
                document.documentElement.style.setProperty(
                  '--fs',
                  String(next)
                );
                setScale(next);
              } catch (e) {}
            }}
            type="button"
          >
            A+
          </ControlButton>
        </Controls>

        <Heading>{heading || 'Vídeo destacado'}</Heading>

        <Media>
          <iframe
            title={heading || 'Vídeo de noticias'}
            src={src}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </Media>

        <Copy>{children}</Copy>
      </Inner>
    </Wrapper>
  );
};

export default NewsVideoBlock;

const Wrapper = styled.section`
  max-width: 1100px;
  margin: 2rem auto;
  padding: 1rem;
`;

const Inner = styled.div`
  background: var(--color-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--elevation-1);
  padding: 1.25rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  align-items: start;
  position: relative;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
  }
`;

const Heading = styled.h3`
  margin: 0;
  /* modest, modern heading that respects the global --fs scale */
  font-size: calc(clamp(1.4rem, 3vw, 1.9rem) * var(--fs, 1));
  line-height: 1.12;
  color: var(--color-primary);
  font-weight: 700;
  text-align: left;
  /* make heading span full width so it aligns with the video and copy */
  grid-column: 1 / -1;
`;

const Media = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(7, 28, 47, 0.08);
  grid-column: 1 / -1;

  iframe {
    width: 100%;
    height: 100%;
    display: block;
    border: 0;
  }
`;

const Copy = styled.div`
  color: var(--color-text);
  line-height: 1.7;
  /* clearer, slightly larger body text */
  font-size: calc(1.12rem * var(--fs, 1));
  white-space: pre-wrap;
  grid-column: 1 / -1;
  text-align: justify;
  text-justify: inter-word;
  hyphens: auto;
  text-indent: 0;

  @media (max-width: 640px) {
    font-size: calc(1rem * var(--fs, 1));
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

const ControlButton = styled.button`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(7, 28, 47, 0.06);
  color: var(--color-primary);
  padding: 0.35rem 0.6rem;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  font-size: calc(0.95rem * var(--fs, 1));
  min-width: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: 0 2px 6px rgba(7, 28, 47, 0.04);
  &:focus-visible {
    outline: 3px solid var(--color-cta);
    outline-offset: 3px;
  }
`;
