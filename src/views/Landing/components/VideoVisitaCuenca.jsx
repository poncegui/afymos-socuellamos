import { memo, useEffect, useRef, useState } from 'react';
import portadaVideo from '../assets/portada-cuenca.png';
import styled from 'styled-components';
import AccessibilityControls from '../../../components/Accessibility/AccessibilityControls';
import SectionLabel from '../../../components/SectionLabel';

const STORAGE_KEY = 'afymos_fontScale';

const VideoVisitaCuenca = () => {
  const [play, setPlay] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);
  const phoneRef = useRef(null);

  /* Carga diferida del vídeo mp4 */
  const handlePlay = async () => {
    const mod = await import('../assets/cuenca.mp4');
    setVideoSrc(mod.default);
    setPlay(true);
  };

  /* Animación de entrada al hacer scroll */
  useEffect(() => {
    const el = phoneRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Controles de tamaño de texto */
  const [scale, setScale] = useState(() => {
    try {
      return Number(localStorage.getItem(STORAGE_KEY) || 1);
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
          const v = Number(e.newValue || 1);
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
    <Wrapper aria-labelledby="cuenca-heading">
      <Inner>
        {/* ── Texto izquierdo ── */}
        <LeftCol>
          <SectionLabel>Viaje cultural</SectionLabel>
          <Heading id="cuenca-heading">Descubriendo Cuenca con Afymos</Heading>
          <Subtitle>
            Gracias a la subvención{' '}
            <BrandLink
              href="https://www.jccm.es/sede/tramite/KW8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conoce Castilla-La Mancha
            </BrandLink>
          </Subtitle>
          <Body>
            El pasado <strong>sábado 7 de junio</strong> pudimos descubrir los
            estupendos rincones de la ciudad de Cuenca. Visitamos el{' '}
            <strong>Museo de Ciencias</strong>, exploramos el universo en el
            planetario, paseamos por el centro histórico y por la tarde
            disfrutamos de la <strong>"Tierra de los dinosaurios"</strong> en el
            Museo de Paleontología.
          </Body>

          <AccessibilityControls inverse={false} />
        </LeftCol>

        {/* ── Teléfono central ── */}
        <PhoneWrap ref={phoneRef} className="animate-phone">
          <PhoneFrame>
            <PhoneScreen>
              {!play ? (
                <Thumbnail
                  role="button"
                  tabIndex={0}
                  aria-label="Reproducir vídeo de la visita a Cuenca"
                  onClick={handlePlay}
                  onKeyDown={e => e.key === 'Enter' && handlePlay()}
                >
                  <img
                    src={portadaVideo}
                    alt="Portada del vídeo de Cuenca"
                    loading="lazy"
                  />
                  <PlayBtn aria-hidden="true">
                    <PlayIcon />
                  </PlayBtn>
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
              <Reflection aria-hidden="true" />
            </PhoneScreen>
          </PhoneFrame>
        </PhoneWrap>

        {/* ── Texto derecho ── */}
        <RightCol>
          <Body>
            Fue un día cargado de <strong>aprendizajes</strong>,{' '}
            <strong>descubrimientos castellano manchegos</strong> y convivencia
            de toda nuestra familia Afymera.
          </Body>
          <Sponsors>
            Turismo Castilla-La Mancha · Economía, Empresas y Empleo · Junta de
            Comunidades de Castilla-La Mancha
            <br />
            <BrandLink
              href="https://www.jccm.es/sede/tramite/KW8"
              target="_blank"
              rel="noopener noreferrer"
            >
              #conocecastillalamancha
            </BrandLink>{' '}
            · <Hashtag>#Enunlugardetuvida</Hashtag>
          </Sponsors>
        </RightCol>
      </Inner>
    </Wrapper>
  );
};

export default memo(VideoVisitaCuenca);

/* ─── Styles ─────────────────────────────────────────────────────────────── */

const Wrapper = styled.section`
  background: #f9f8fb;
  padding: 4rem clamp(1.25rem, 5%, 5rem);
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 2rem;

    /* Teléfono arriba en móvil */
    & > *:nth-child(2) {
      order: -1;
      justify-self: center;
    }
  }
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Heading = styled.h2`
  font-size: calc(clamp(1.3rem, 2.8vw, 1.9rem) * var(--fs, 1));
  font-weight: 700;
  line-height: 1.2;
  color: #071c2f;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: calc(0.95rem * var(--fs, 1));
  font-style: italic;
  font-weight: 600;
  color: #444;
  line-height: 1.6;
  margin: 0;
`;

const Body = styled.p`
  font-size: calc(0.94rem * var(--fs, 1));
  line-height: 1.8;
  color: #555;
  margin: 0;

  strong {
    font-weight: 700;
    color: #071c2f;
  }
`;

const Sponsors = styled.p`
  font-size: calc(0.82rem * var(--fs, 1));
  color: #6b6f76;
  line-height: 1.7;
  margin: 0;
`;

const Hashtag = styled.strong`
  color: #224464;
  font-weight: 700;
`;

const BrandLink = styled.a`
  color: #224464;
  font-weight: 700;
  text-decoration: none;
  border-bottom: 2px solid #c6b1c9;
  padding-bottom: 1px;
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: #071c2f;
    border-color: #071c2f;
  }
  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 3px;
    border-radius: 2px;
  }
`;

/* ── Phone frame ── */
const PhoneWrap = styled.div`
  opacity: 0;
  transform: translateY(32px) rotate(-5deg);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0) rotate(-5deg);
  }

  @media (max-width: 860px) {
    transform: translateY(32px) rotate(0deg);
    &.visible {
      transform: translateY(0) rotate(0deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none !important;
    transition: none;
  }
`;

const PhoneFrame = styled.div`
  width: 240px;
  aspect-ratio: 9 / 19;
  border-radius: 32px;
  background: #111;
  border: 5px solid #1a1a1a;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.28),
    inset 0 0 0 1px rgba(255, 255, 255, 0.06);
  overflow: hidden;

  @media (max-width: 860px) {
    width: min(260px, 70vw);
  }
`;

const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 27px;
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
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 9px 0 9px 16px;
    border-color: transparent transparent transparent #071c2f;
    margin-left: 3px;
  }

  ${Thumbnail}:hover & {
    transform: scale(1.1);
  }
`;

const Reflection = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.07) 0%,
    transparent 50%
  );
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
