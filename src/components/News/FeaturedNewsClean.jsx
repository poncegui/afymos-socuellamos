import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LazyResponsiveImage from "../Image/LazyResponsiveImage";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import SectionLabel from "../SectionLabel";

const STORAGE_KEY = "afymos_fontScale";

const FeaturedNews = ({ item, priorityImage = false }) => {
  const [scale, setScale] = useState(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return v ? Number(v) : 1;
    } catch {
      return 1;
    }
  });
  const [speakActive, setSpeakActive] = useState(false);

  useEffect(() => {
    try {
      const v = Number(localStorage.getItem(STORAGE_KEY) || 1);
      document.documentElement.style.setProperty("--fs", String(v));
      setScale(v);
    } catch {}

    const onStorage = (ev) => {
      if (ev.key === STORAGE_KEY) {
        try {
          const val = Number(ev.newValue || 1);
          document.documentElement.style.setProperty("--fs", String(val));
          setScale(val);
        } catch {}
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const updateScale = (newScale) => {
    try {
      localStorage.setItem(STORAGE_KEY, String(newScale));
      document.documentElement.style.setProperty("--fs", String(newScale));
      setScale(newScale);
    } catch {}
  };

  const increaseFontSize = () => {
    const newScale = Math.min(scale + 0.25, 2);
    updateScale(newScale);
  };

  const decreaseFontSize = () => {
    const newScale = Math.max(scale - 0.25, 0.75);
    updateScale(newScale);
  };

  const resetFontSize = () => {
    updateScale(1);
  };

  const handleSpeak = () => {
    if ("speechSynthesis" in window) {
      if (speakActive) {
        window.speechSynthesis.cancel();
        setSpeakActive(false);
      } else {
        const text = item.excerpt;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "es-ES";
        utterance.onstart = () => setSpeakActive(true);
        utterance.onend = () => setSpeakActive(false);
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  if (!item) return null;

  return (
    <Wrapper role="region" aria-label={`Noticia destacada: ${item.title}`}>
      <Inner>
        <MediaCol>
          {item.image ? (
            <>
              <LazyResponsiveImage
                src={item.image}
                alt={item.alt || item.title}
                width="1200"
                height="700"
                priority={priorityImage}
              />
              <ImageCaption>Oportunidades que cambian vidas</ImageCaption>
            </>
          ) : (
            <EmptyMedia aria-hidden="true" />
          )}
        </MediaCol>

        <ContentCol>
          <TopRow>
            <Label aria-hidden="true">Noticia destacada</Label>
            {item.tags && item.tags.length > 0 && (
              <TagList>
                {item.tags.slice(0, 3).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </TagList>
            )}
          </TopRow>

          <AccessibilityBar>
            <AccessibilityGroup>
              <span>Tamaño de fuente:</span>
              <ButtonGroup>
                <A11yButton
                  onClick={decreaseFontSize}
                  disabled={scale <= 0.75}
                  aria-label="Reducir tamaño de texto"
                >
                  <FontAwesomeIcon icon={faMinus} /> A
                </A11yButton>
                <A11yButton
                  onClick={resetFontSize}
                  aria-label="Restablecer tamaño de texto"
                >
                  Escala actual: {(scale * 100).toFixed(0)}%
                </A11yButton>
                <A11yButton
                  onClick={increaseFontSize}
                  disabled={scale >= 2}
                  aria-label="Aumentar tamaño de texto"
                >
                  <FontAwesomeIcon icon={faPlus} /> A
                </A11yButton>
              </ButtonGroup>
            </AccessibilityGroup>

            <A11yButton
              onClick={handleSpeak}
              active={speakActive}
              aria-label={speakActive ? "Detener lectura" : "Leer en voz alta"}
            >
              <FontAwesomeIcon icon={faVolumeUp} />
              {speakActive ? " Pausar" : " Leer"}
            </A11yButton>
          </AccessibilityBar>

          <Title>{item.title}</Title>

          <Excerpt>
            {item.excerpt
              .split("\n")
              .slice(0, 4)
              .map((p, i) => (
                <p key={i}>{p}</p>
              ))}
          </Excerpt>

          <Footer>
            {item.date && (
              <PublishDate dateTime={item.date}>
                {new Date(item.date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </PublishDate>
            )}
            {item.href && (
              <ReadMore to={item.href} aria-label={`Leer el artículo completo: ${item.title}`}>
                Leer artículo completo →
              </ReadMore>
            )}
          </Footer>
        </ContentCol>
      </Inner>
    </Wrapper>
  );
};

export default FeaturedNews;

/* ─── Styles ─────────────────────────────────────────────────────────────── */

const Wrapper = styled.section`
  background: #fff;
  padding: 3.5rem clamp(1.25rem, 5%, 5rem);
`;

const Inner = styled.article`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  background: #f9f8fb;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(7, 28, 47, 0.07);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const MediaCol = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: visible;
  background: #e8e2ec;
  position: relative;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media (max-width: 860px) {
    aspect-ratio: 16 / 9;
    border-radius: 0;
  }
`;

const EmptyMedia = styled.div`
  width: 100%;
  height: 100%;
  background: #e8e2ec;
`;

const ImageCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(34, 68, 100, 0.95), rgba(34, 68, 100, 0.75));
  color: #fff;
  padding: 1.5rem 2rem;
  font-size: calc(1.5rem * var(--fs, 1));
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.02em;
  backdrop-filter: blur(4px);

  @media (max-width: 860px) {
    font-size: calc(1.2rem * var(--fs, 1));
    padding: 1rem 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: calc(1rem * var(--fs, 1));
    padding: 0.75rem 1rem;
  }
`;

const ContentCol = styled.div`
  padding: 2.5rem 2.5rem 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 860px) {
    padding: 1.75rem 1.5rem 2rem;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Label = styled.span`
  font-size: calc(0.75rem * var(--fs, 1));
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #224464;
  border-left: 3px solid #c6b1c9;
  padding-left: 0.6rem;
`;

const TagList = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: rgba(198, 177, 201, 0.2);
  color: #224464;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  font-size: calc(0.72rem * var(--fs, 1));
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Title = styled.h2`
  font-size: calc(clamp(1.3rem, 2.8vw, 1.85rem) * var(--fs, 1));
  font-weight: 800;
  line-height: 1.2;
  color: #071c2f;
  margin: 0;
`;

const Excerpt = styled.div`
  color: #555;
  line-height: 1.8;

  p {
    font-size: calc(0.95rem * var(--fs, 1));
    margin: 0 0 0.6rem 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(7, 28, 47, 0.08);
`;

const PublishDate = styled.time`
  font-size: calc(0.82rem * var(--fs, 1));
  color: #6b6f76;
`;

const ReadMore = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: calc(0.9rem * var(--fs, 1));
  font-weight: 700;
  color: #fff;
  background: #224464;
  text-decoration: none;
  padding: 0.55rem 1.25rem;
  border-radius: 999px;
  transition: all 0.2s, transform 0.15s;

  &:hover {
    background: #c6b1c9;
    color: #071c2f;
    transform: translateX(2px);
    box-shadow: 0 2px 8px rgba(198, 177, 201, 0.4);
  }

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 3px;
  }

  &:active {
    transform: translateX(0);
  }
`;

const AccessibilityBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #f0f2f5 0%, #e8eaf0 100%);
  border-radius: 10px;
  flex-wrap: wrap;

  label {
    font-weight: 600;
    color: #071c2f;
    font-size: calc(0.85rem * var(--fs, 1));
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const AccessibilityGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const A11yButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.8rem;
  background: ${(props) =>
    props.active ? "#224464" : props.disabled ? "#e8e8e8" : "#fff"};
  color: ${(props) =>
    props.active ? "#fff" : props.disabled ? "#666" : "#071c2f"};
  border: 1.5px solid
    ${(props) =>
      props.active ? "#224464" : props.disabled ? "#ccc" : "#c6b1c9"};
  border-radius: 8px;
  font-size: calc(0.8rem * var(--fs, 1));
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};

  &:hover:not(:disabled) {
    background: #224464;
    color: #fff;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(34, 68, 100, 0.2);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  svg {
    font-size: calc(0.75rem * var(--fs, 1));
  }
`;
