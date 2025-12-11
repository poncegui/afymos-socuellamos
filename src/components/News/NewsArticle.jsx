import React, { useState } from "react";
import styled from "styled-components";
import LazyResponsiveImage from "../Image/LazyResponsiveImage";
import NewsVideoBlock from "./NewsVideoBlock";
import placeholderImg from "../../views/Landing/assets/images-noticias/news.png";

const NewsArticle = ({ item }) => {
  const [modalIndex, setModalIndex] = useState(null);

  if (!item) return null;

  return (
    <ArticlePage>
      <HeroArea>
        <HeroImage>
          <LazyResponsiveImage
            src={item.image || placeholderImg}
            alt={item.alt || item.title}
            width="1400"
            height="700"
          />
        </HeroImage>

        <Band aria-hidden={false}>
          <BandInner>
            <BandTitle>{item.subtitle || "Discurso de Carlos"}</BandTitle>
          </BandInner>
        </Band>

        {item.videoLocal ? (
          <VideoWrapper>
            <NativeVideo
              controls
              preload="metadata"
              poster={item.image || placeholderImg}
              aria-label={`Vídeo: ${item.title}`}
            >
              <source src={item.videoLocal} type="video/mp4" />
              Tu navegador no soporta reproducción de vídeo.
            </NativeVideo>
          </VideoWrapper>
        ) : item.videoId ? (
          <VideoWrapper>
            <NewsVideoBlock videoId={item.videoId} heading={item.title} />
          </VideoWrapper>
        ) : null}
      </HeroArea>

      <Container>
        <Header>
          <Title>{item.title}</Title>
          {item.subtitle && <Subtitle>{item.subtitle}</Subtitle>}
          <Meta>
            <time dateTime={item.date}>{item.date}</time>
          </Meta>
        </Header>

        <Body>
          <div className="body-inner">
            {item.excerpt.split("\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Body>

        {item.images && item.images.length > 0 && (
          <Gallery>
            {item.images.map((img, i) => (
              <Thumb
                key={i}
                onClick={() => setModalIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" ? setModalIndex(i) : null)}
                aria-label={`Abrir imagen ${i + 1}`}
              >
                <LazyResponsiveImage
                  src={img || placeholderImg}
                  alt={`${item.title} - ${i + 1}`}
                  width="400"
                  height="250"
                />
              </Thumb>
            ))}
          </Gallery>
        )}

        {modalIndex !== null && (
          <Modal
            onClick={() => setModalIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            <ModalInner onClick={(e) => e.stopPropagation()}>
              <ModalClose
                onClick={() => setModalIndex(null)}
                aria-label="Cerrar galería"
              >
                ✕
              </ModalClose>
              <ModalImg>
                <LazyResponsiveImage
                  src={item.images[modalIndex]}
                  alt={`${item.title} - ${modalIndex + 1}`}
                  width="1200"
                  height="800"
                />
              </ModalImg>
              <ModalNav>
                <NavButton
                  disabled={modalIndex === 0}
                  onClick={() => setModalIndex((i) => Math.max(0, i - 1))}
                  aria-label="Anterior"
                >
                  ◀
                </NavButton>
                <NavButton
                  disabled={modalIndex === item.images.length - 1}
                  onClick={() =>
                    setModalIndex((i) =>
                      Math.min(item.images.length - 1, i + 1)
                    )
                  }
                  aria-label="Siguiente"
                >
                  ▶
                </NavButton>
              </ModalNav>
            </ModalInner>
          </Modal>
        )}
      </Container>
    </ArticlePage>
  );
};

export default NewsArticle;

const ArticlePage = styled.main`
  max-width: 1100px;
  margin: 2.25rem auto;
  padding: 1rem;
`;

const HeroArea = styled.div``;

const HeroImage = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(7, 28, 47, 0.08);
  /* more spacing below hero for clearer separation */
  margin-bottom: 1.6rem;
`;

const VideoWrapper = styled.div`
  margin: 1.6rem 0;
  display: flex;
  justify-content: center;
`;

const NativeVideo = styled.video`
  width: 100%;
  height: auto;
  max-height: 70vh;
  border-radius: 12px;
  background: black;
  display: block;
`;

const Container = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: var(--elevation-1);
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  margin: 0;
  /* smaller, more balanced heading */
  font-size: calc(clamp(1.25rem, 2.5vw, 1.6rem) * var(--fs, 1));
  color: var(--color-primary);
  line-height: 1.06;
  font-weight: 800;
  text-align: left;
  margin-bottom: 0.2rem;
`;

const Subtitle = styled.div`
  color: var(--color-muted);
  font-size: calc(clamp(0.95rem, 1.6vw, 1.05rem) * var(--fs, 1));
  font-weight: 700;
  margin-top: 0.12rem;
  margin-bottom: 0.35rem;
`;

const Meta = styled.div`
  color: var(--color-muted);
  font-size: calc(var(--type-small) * var(--fs, 1));
`;

const Body = styled.article`
  color: var(--color-text);
  /* enforce larger, clear body text for accessibility */
  font-size: calc(14px * var(--fs, 1));
  line-height: 1.6;
  text-align: justify;

  .body-inner {
    max-width: 900px; /* match main content width for comfortable measure */
    margin: 0 auto;
  }

  p {
    margin: 0 0 1rem 0;
  }

  @media (max-width: 640px) {
    font-size: calc(15px * var(--fs, 1));
    line-height: 1.5;
    .body-inner {
      padding: 0 0.5rem;
    }
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.75rem;
  margin-top: 1rem;
`;

const Thumb = styled.div`
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(7, 28, 47, 0.06);
  &:focus-visible {
    outline: 3px solid var(--color-cta);
  }
`;

const Modal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
`;

const ModalInner = styled.div`
  max-width: 95%;
  max-height: 95%;
  background: white;
  border-radius: 8px;
  position: relative;
  padding: 1rem;
  overflow: hidden;
`;

const ModalClose = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
`;

const ModalImg = styled.div`
  width: 100%;
  height: 70vh;
  overflow: hidden;
`;

const ModalNav = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 0.5rem;
`;

const NavButton = styled.button`
  background: #071c2f;
  color: white;
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;

/* Full-bleed separator band placed between hero and media */
const Band = styled.div`
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  position: relative;
  background: var(--color-cta);
  color: white;
  padding: 0.6rem 1rem;
  margin: 0.6rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BandInner = styled.div`
  width: 100%;
  max-width: 1100px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.9),
    rgba(245, 245, 250, 0.9)
  );
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid rgba(7, 28, 47, 0.04);
`;

const BandTitle = styled.h3`
  margin: 0;
  color: #071c2f; /* strong dark color for contrast */
  font-size: calc(clamp(1rem, 1.6vw, 1.1rem) * var(--fs, 1));
  font-weight: 800;
  letter-spacing: 0.02em;
  text-transform: none;
`;
