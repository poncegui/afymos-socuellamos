import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LazyResponsiveImage from '../Image/LazyResponsiveImage';
import placeholderImg from '../../views/Landing/assets/images-noticias/news.png';
import { typography } from '../../styles/typography';
import { AccessiblePDFLink } from '../A11y';

const SpeakerIcon = () => (
  <Svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M4 10.5v3h3.5l4.5 4V6.5L7.5 10.5H4Z"
      fill="currentColor"
      opacity="0.9"
    />
    <path
      d="M16.5 9.3a4.7 4.7 0 0 1 0 5.4M18.8 6.6a8.2 8.2 0 0 1 0 10.8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </Svg>
);

const GalleryIcon = () => (
  <Svg viewBox="0 0 24 24" aria-hidden="true">
    <rect
      x="3.5"
      y="5.5"
      width="11"
      height="9.5"
      rx="1.8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M7 13.5l2.4-2.6 2.3 2.1 2.5-2.8 4.3 5.4H5.3l1.7-2.1Z"
      fill="currentColor"
      opacity="0.9"
    />
    <circle cx="16.8" cy="8.2" r="1.6" fill="currentColor" />
    <path
      d="M13.8 16.8h6.7a2.1 2.1 0 0 0 2.1-2.1V7.9a2.1 2.1 0 0 0-2.1-2.1h-6.7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Svg = styled.svg`
  width: 1.05rem;
  height: 1.05rem;
  display: block;
  flex-shrink: 0;
`;

const NewsArticle = ({ item }) => {
  const [modalIndex, setModalIndex] = useState(null);
  const [fontSize, setFontSize] = useState(1);
  const [speakActive, setSpeakActive] = useState(false);

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 0.25, 2));
  const decreaseFontSize = () =>
    setFontSize(prev => Math.max(prev - 0.25, 0.75));
  const resetFontSize = () => setFontSize(1);

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      if (speakActive) {
        window.speechSynthesis.cancel();
        setSpeakActive(false);
      } else {
        const text = item.excerpt;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-ES';
        utterance.onstart = () => setSpeakActive(true);
        utterance.onend = () => setSpeakActive(false);
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  if (!item) return null;

  return (
    <ArticlePage $fontSize={fontSize}>
      <HeroArea>
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
            <iframe
              title={item.title}
              width="100%"
              height="600"
              src={`https://www.youtube-nocookie.com/embed/${item.videoId}?rel=0&modestbranding=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                borderRadius: '16px',
                boxShadow: '0 16px 40px rgba(198, 177, 201, 0.15)',
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'block',
              }}
            />
          </VideoWrapper>
        ) : (
          <HeroImage>
            <LazyResponsiveImage
              src={item.image || placeholderImg}
              webp={item.imageWebp}
              alt={item.alt || item.title}
              width="1400"
              height="700"
              variant="hero"
            />
          </HeroImage>
        )}

        <Band aria-hidden={false}>
          <BandInner>
            <BandTitle>
              {item.subtitle || 'Oportunidades que cambian vidas'}
            </BandTitle>
          </BandInner>
        </Band>
      </HeroArea>

      <Container>
        <AccessibilityBar>
          <AccessibilityGroup>
            <span>Tamaño de fuente:</span>
            <ButtonGroup>
              <A11yButton
                onClick={decreaseFontSize}
                disabled={fontSize <= 0.75}
                aria-label="Reducir tamaño de texto"
              >
                A−
              </A11yButton>
              <A11yButton
                onClick={resetFontSize}
                aria-label="Restablecer tamaño de texto"
              >
                {(fontSize * 100).toFixed(0)}%
              </A11yButton>
              <A11yButton
                onClick={increaseFontSize}
                disabled={fontSize >= 2}
                aria-label="Aumentar tamaño de texto"
              >
                A+
              </A11yButton>
            </ButtonGroup>
          </AccessibilityGroup>

          <A11yButton
            onClick={handleSpeak}
            active={speakActive}
            aria-label={speakActive ? 'Detener lectura' : 'Leer en voz alta'}
          >
            <SpeakerIcon />
            {speakActive ? 'Pausar' : 'Leer'}
          </A11yButton>
        </AccessibilityBar>

        <ContentGrid>
          <MainContent>
            <Header aria-hidden>
              <Title>{item.title}</Title>
              {item.subtitle && <Subtitle>{item.subtitle}</Subtitle>}
              <Meta>
                <time dateTime={item.date}>{formatDate(item.date)}</time>
              </Meta>
            </Header>

            <Body>
              <div className="body-inner">
                {item.excerpt.split('\n').map((p, i) => (
                  <Paragraph key={i}>{p}</Paragraph>
                ))}
              </div>
            </Body>

            {item.pdfs && item.pdfs.length > 0 && (
              <PDFSection>
                <PDFTitle>📄 Documentos relacionados</PDFTitle>
                <PDFList>
                  {item.pdfs.map((pdf, i) => (
                    <AccessiblePDFLink
                      key={i}
                      href={pdf.url}
                      fileSize={pdf.size}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pdf.title}
                    </AccessiblePDFLink>
                  ))}
                </PDFList>
              </PDFSection>
            )}

            {item.collageUrl && (
              <CollageButtonWrapper>
                <CollageButton
                  to={item.collageUrl}
                  aria-label={item.collageLabel || 'Ver collage completo'}
                >
                  <GalleryIcon />
                  {item.collageLabel || 'Ver collage completo'}
                </CollageButton>
              </CollageButtonWrapper>
            )}

            {item.images && item.images.length > 0 && (
              <GallerySection>
                <GalleryTitle>Galería de fotos</GalleryTitle>
                <Gallery>
                  {item.images.map((img, i) => (
                    <GalleryCard
                      key={i}
                      onClick={() => setModalIndex(i)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={e =>
                        e.key === 'Enter' ? setModalIndex(i) : null
                      }
                      aria-label={`Abrir imagen ${i + 1} de ${
                        item.images.length
                      }`}
                    >
                      <ImageContainer>
                        <LazyResponsiveImage
                          src={img || placeholderImg}
                          webp={item.imagesWebp && item.imagesWebp[i]}
                          alt={`${item.title} - ${i + 1}`}
                          width="400"
                          height="250"
                          variant="thumb"
                        />
                      </ImageContainer>
                      <ImageOverlay>
                        <ViewText>Ver imagen</ViewText>
                      </ImageOverlay>
                    </GalleryCard>
                  ))}
                </Gallery>
              </GallerySection>
            )}
          </MainContent>

          <SideBar>
            <SidebarBox>
              <strong>Publicado:</strong>
              <div>{formatDate(item.date)}</div>
            </SidebarBox>

            {item.author && (
              <SidebarBox>
                <strong>Autor:</strong>
                <div>{item.author}</div>
              </SidebarBox>
            )}

            <SidebarBox>
              <strong>Compartir</strong>
              <ShareList>
                <ShareButton
                  as="a"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </ShareButton>
                <ShareButton
                  as="a"
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    item.title,
                  )}&url=${window.location.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </ShareButton>
              </ShareList>
            </SidebarBox>
          </SideBar>
        </ContentGrid>

        {modalIndex !== null && (
          <Modal
            onClick={() => setModalIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Visor de galería"
          >
            <ModalInner onClick={e => e.stopPropagation()}>
              <ModalClose
                onClick={() => setModalIndex(null)}
                aria-label="Cerrar galería"
              >
                ×
              </ModalClose>
              <ModalContent>
                <ModalImg>
                  <LazyResponsiveImage
                    src={item.images[modalIndex]}
                    webp={item.imagesWebp && item.imagesWebp[modalIndex]}
                    alt={`${item.title} - ${modalIndex + 1}`}
                    width="1200"
                    height="800"
                    variant="modal"
                  />
                </ModalImg>
                <ModalCounter>
                  {modalIndex + 1} de {item.images.length}
                </ModalCounter>
              </ModalContent>
              <ModalNav>
                <NavButton
                  disabled={modalIndex === 0}
                  onClick={() => setModalIndex(i => Math.max(0, i - 1))}
                  aria-label="Imagen anterior"
                >
                  ‹
                </NavButton>
                <NavButton
                  disabled={modalIndex === item.images.length - 1}
                  onClick={() =>
                    setModalIndex(i => Math.min(item.images.length - 1, i + 1))
                  }
                  aria-label="Imagen siguiente"
                >
                  ›
                </NavButton>
              </ModalNav>
            </ModalInner>
          </Modal>
        )}
      </Container>
    </ArticlePage>
  );
};

const formatDate = dateStr => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default NewsArticle;

const ArticlePage = styled.main`
  max-width: 1100px;
  margin: 2.25rem auto;
  padding: 1rem;
  --fs: ${props => props.$fontSize};
`;

const HeroArea = styled.div`
  position: relative;
`;

const HeroImage = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(198, 177, 201, 0.15);
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
  width: 100%;
  height: clamp(220px, 40vh, 520px);
  position: relative;

  picture,
  img,
  span {
    display: block;
    width: 100%;
    height: 100%;
  }

  /* subtle overlay to improve text contrast */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(7, 28, 47, 0.04),
      rgba(7, 28, 47, 0.18)
    );
    pointer-events: none;
    mix-blend-mode: multiply;
  }

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    height: 220px;
    border-radius: 12px;
  }
`;

const VideoWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
`;

const NativeVideo = styled.video`
  width: 100%;
  height: auto;
  max-height: 70vh;
  border-radius: 16px;
  background: #000;
  display: block;
  box-shadow: 0 16px 40px rgba(198, 177, 201, 0.15);
`;

const Container = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #fafbfc 100%);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 12px 36px rgba(7, 28, 47, 0.08);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const AccessibilityBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 1.25rem;
  background: linear-gradient(135deg, #f0f2f5 0%, #e8eaf0 100%);
  border-radius: 12px;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  label {
    font-weight: 600;
    color: #071c2f;
    font-size: calc(0.95rem * var(--fs, 1));
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const AccessibilityGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  border-radius: 8px;
  background: white;
  padding: 0.5rem;
  border: 1px solid #ddd;
`;

const A11yButton = styled.button`
  padding: 0.6rem 1rem;
  background: ${props => (props.active ? '#224464' : 'white')};
  border: 1.5px solid
    ${props => (props.active ? '#224464' : props.disabled ? '#ccc' : '#c6b1c9')};
  border-radius: 6px;
  color: ${props =>
    props.active ? 'white' : props.disabled ? '#999' : '#071c2f'};
  font-weight: 600;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background: #224464;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(34, 68, 100, 0.2);
  }

  &:focus-visible {
    outline: 2px solid #224464;
    outline-offset: 2px;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid rgba(198, 177, 201, 0.2);
`;

const Title = styled.h1`
  margin: 0;
  font-size: ${typography.fontSize.h1};
  font-weight: ${typography.fontWeight.extrabold};
  line-height: ${typography.lineHeight.tight};
  letter-spacing: ${typography.letterSpacing.tight};
  color: ${typography.color.primary};
`;

const Subtitle = styled.div`
  color: #666;
  font-size: calc(1.1rem * var(--fs));
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    background: #c6b1c9;
    border-radius: 50%;
  }
`;

const Meta = styled.div`
  color: #888;
  font-size: calc(0.95rem * var(--fs));
  font-weight: 500;
  margin-top: 0.5rem;

  time {
    font-style: italic;
  }
`;

const Body = styled.article`
  color: #333;
  font-size: calc(1.05rem * var(--fs));
  line-height: 1.75;
  text-align: justify;
  margin-bottom: 2.5rem;

  .body-inner {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Paragraph = styled.p`
  margin: 0 0 1.5rem 0;
  font-size: ${typography.fontSize.body};
  line-height: ${typography.lineHeight.relaxed};
  color: ${typography.color.secondary};

  &:last-child {
    margin-bottom: 0;
  }
`;

const GallerySection = styled.section`
  margin-top: 3rem;
`;
const GalleryTitle = styled.h2`
  margin: 0 0 1.5rem 0;
  font-size: calc(1.4rem * var(--fs));
  color: #071c2f;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 24px;
    background: linear-gradient(180deg, #c6b1c9 0%, #8e6b9c 100%);
    border-radius: 2px;
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1rem;
  }
`;
const GalleryCard = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(7, 28, 47, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(198, 177, 201, 0.2);
  }

  &:focus-within {
    outline: 3px solid #c6b1c9;
    outline-offset: 2px;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f0f0f0;
`;
const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(198, 177, 201, 0.8) 0%,
    rgba(142, 107, 156, 0.9) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${GalleryCard}:hover & {
    opacity: 1;
  }
`;
const ViewText = styled.span`
  color: white;
  font-weight: 700;
  font-size: calc(1rem * var(--fs, 1));
  text-align: center;
`;
const Modal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
  z-index: 9999;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const ModalInner = styled.div`
  max-width: 90vw;
  max-height: 90vh;
  background: white;
  border-radius: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;
const ModalClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(1.7rem * var(--fs, 1));
  color: #071c2f;
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    background: white;
    transform: rotate(90deg);
  }

  &:focus-visible {
    outline: 2px solid #c6b1c9;
  }
`;
const ModalContent = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const ModalImg = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
`;
const ModalCounter = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: calc(0.9rem * var(--fs, 1));
  font-weight: 600;
`;
const ModalNav = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  padding: 1rem;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.05) 100%);
`;
const NavButton = styled.button`
  background: #071c2f;
  color: white;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(1.6rem * var(--fs, 1));
  line-height: 1;
  transition: all 0.2s ease;
  opacity: ${props => (props.disabled ? 0.4 : 1)};

  &:hover:not(:disabled) {
    background: #c6b1c9;
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid #c6b1c9;
    outline-offset: 2px;
  }
`;
const Band = styled.div`
  position: absolute;
  left: 24px;
  bottom: 24px;
  background: linear-gradient(
    135deg,
    rgba(198, 177, 201, 0.95) 0%,
    rgba(167, 141, 181, 0.95) 100%
  );
  color: #071c2f;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  box-shadow: 0 8px 24px rgba(198, 177, 201, 0.18);
  z-index: 6;
`;
const BandInner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const BandTitle = styled.h3`
  margin: 0;
  color: #071c2f;
  font-size: calc(1rem * var(--fs));
  font-weight: 800;
  letter-spacing: 0.01em;
`;

/* Layout for article content + sidebar */
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 2rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div``;

const SideBar = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: start;

  @media (max-width: 980px) {
    order: 2;
  }
`;

const SidebarBox = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #fbfbfc 100%);
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(7, 28, 47, 0.06);
  font-size: calc(0.95rem * var(--fs));

  strong {
    display: block;
    margin-bottom: 0.35rem;
    color: #071c2f;
  }
`;

const ShareList = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const ShareButton = styled.button`
  background: #f0f2f5;
  color: #071c2f;
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background: #e6dcea;
    transform: translateY(-2px);
  }
`;
const CollageButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
`;
const CollageButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #c6b1c9 0%, #a78db5 100%);
  color: white;
  font-weight: 700;
  font-size: calc(1.1rem * var(--fs, 1));
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 24px rgba(198, 177, 201, 0.3);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(198, 177, 201, 0.4);
    background: linear-gradient(135deg, #d4c2d7 0%, #b89ac3 100%);
  }

  &:active {
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid #c6b1c9;
    outline-offset: 4px;
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    padding: 0.85rem 1.5rem;
    font-size: calc(1rem * var(--fs, 1));
  }
`;

const PDFSection = styled.section`
  margin: 2.5rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f8f6f9 0%, #f0eef2 100%);
  border-radius: 12px;
  border-left: 4px solid #c6b1c9;
`;

const PDFTitle = styled.h3`
  margin: 0 0 1.25rem 0;
  font-size: calc(1.3rem * var(--fs, 1));
  color: #071c2f;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PDFList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
