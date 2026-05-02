import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AccessibilityControls from '../../../components/Accessibility/AccessibilityControls';
import SectionLabel from '../../../components/SectionLabel';

const STORAGE_KEY = 'afymos_fontScale';

const Video = ({
  videoSrc,
  urlMoreInformation,
  title,
  subtitle,
  description,
  coverImage,
  sectionTitle,
  inverse = false,
}) => {
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

  const changeScale = next => {
    try {
      localStorage.setItem(STORAGE_KEY, String(next));
      document.documentElement.style.setProperty('--fs', String(next));
      setScale(next);
    } catch {}
  };

  return (
    <Wrapper $inverse={inverse}>
      <Inner>
        {/* ── Columna vídeo ── */}
        <VideoCol>
          {!play ? (
            <Thumbnail
              role="button"
              tabIndex={0}
              aria-label={`Reproducir vídeo: ${title}`}
              onClick={() => setPlay(true)}
              onKeyDown={e => e.key === 'Enter' && setPlay(true)}
            >
              {coverImage ? (
                <img
                  src={coverImage}
                  alt={`Portada del vídeo ${title}`}
                  loading="lazy"
                />
              ) : (
                <img
                  src={`https://i.ytimg.com/vi/${
                    videoSrc.split('embed/')[1]
                  }/hqdefault.jpg`}
                  alt={`Miniatura del vídeo ${title}`}
                  loading="lazy"
                />
              )}
              <PlayBtn aria-hidden="true">
                <PlayIcon />
              </PlayBtn>
            </Thumbnail>
          ) : (
            <IframeWrap>
              <iframe
                src={`${videoSrc}?autoplay=1`}
                title={`Vídeo: ${title}`}
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </IframeWrap>
          )}
        </VideoCol>

        {/* ── Columna texto ── */}
        <TextCol>
          {sectionTitle && (
            <SectionLabel inverse={inverse}>
              {sectionTitle}
            </SectionLabel>
          )}

          {title && <Heading $inverse={inverse}>{title}</Heading>}

          {subtitle && <Subtitle $inverse={inverse}>{subtitle}</Subtitle>}

          {description && <Body $inverse={inverse}>{description}</Body>}

          {urlMoreInformation && (
            <Cta
              to={urlMoreInformation}
              aria-label={`Leer más sobre ${title}`}
              $inverse={inverse}
            >
              Leer más →
            </Cta>
          )}

          <AccessibilityControls text={description} inverse={inverse} />
        </TextCol>
      </Inner>
    </Wrapper>
  );
};

export default Video;

/* ─── Styles ─────────────────────────────────────────────────────────────── */

const Wrapper = styled.section`
  background: ${({ $inverse }) => ($inverse ? '#f9f8fb' : '#071c2f')};
  padding: 4rem clamp(1.25rem, 5%, 5rem);
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

/* Vídeo */
const VideoCol = styled.div`
  width: 100%;
`;

const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.03);
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
  background: rgba(7, 28, 47, 0.35);
  transition: background 0.25s ease;

  ${Thumbnail}:hover & {
    background: rgba(7, 28, 47, 0.5);
  }
`;

const PlayIcon = styled.div`
  width: 64px;
  height: 64px;
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
    border-width: 11px 0 11px 20px;
    border-color: transparent transparent transparent #071c2f;
    margin-left: 4px;
  }

  ${Thumbnail}:hover & {
    transform: scale(1.1);
    box-shadow: 0 6px 28px rgba(0, 0, 0, 0.4);
  }
`;

const IframeWrap = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);

  iframe {
    width: 100%;
    height: 100%;
    display: block;
    border: 0;
  }
`;

/* Texto */
const TextCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const Heading = styled.h2`
  font-size: calc(clamp(1.4rem, 3vw, 2rem) * var(--fs, 1));
  font-weight: 700;
  line-height: 1.2;
  color: ${({ $inverse }) => ($inverse ? '#071c2f' : '#ffffff')};
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: calc(0.975rem * var(--fs, 1));
  font-weight: 600;
  font-style: italic;
  line-height: 1.6;
  color: ${({ $inverse }) => ($inverse ? '#4a4a4a' : 'rgba(232, 212, 235, 0.95)')};
  margin: 0;
`;

const Body = styled.p`
  font-size: calc(0.94rem * var(--fs, 1));
  line-height: 1.8;
  color: ${({ $inverse }) => ($inverse ? '#4a4a4a' : 'rgba(255,255,255,0.95)')};
  margin: 0;
`;

const Cta = styled(Link)`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  padding: 0.65rem 1.5rem;
  border-radius: 999px;
  font-size: calc(0.9rem * var(--fs, 1));
  font-weight: 700;
  text-decoration: none;
  background: ${({ $inverse }) => ($inverse ? '#0b4a6f' : '#d4b8d9')};
  color: ${({ $inverse }) => ($inverse ? '#fff' : '#071c2f')};
  transition: background 0.2s ease, transform 0.15s ease;

  &:hover {
    background: ${({ $inverse }) => ($inverse ? '#071c2f' : '#c6b1c9')};
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 3px;
  }
`;
