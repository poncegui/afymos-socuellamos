import { Link, useParams } from 'react-router-dom';
import React, { useState } from 'react';

import LazyResponsiveImage from '../../components/Image/LazyResponsiveImage';
import { sampleNews } from '../../components/News/newsData';
import styled from 'styled-components';

const NewsDetail = () => {
  // We'll look up item by slug-ish id in the route param 'slug'
  const { slug } = useParams();
  const item = sampleNews.find(n => n.id === slug) || sampleNews[0];

  const [modalIndex, setModalIndex] = useState(null);

  if (!item) return <p>Noticia no encontrada</p>;

  return (
    <Page>
      <Header>
        <Back to="/">← Volver</Back>
        <Title>{item.title}</Title>
        <Meta>
          <time dateTime={item.date}>{item.date}</time>
        </Meta>
      </Header>

      <Hero>
        {item.image && (
          <LazyResponsiveImage
            src={item.image}
            alt={item.alt}
            width="1200"
            height="600"
          />
        )}
      </Hero>

      <Container>
        <Content>
          <ArticleText>
            {item.excerpt.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </ArticleText>

          {item.images && item.images.length > 0 && (
            <Gallery>
              {item.images.map((img, i) => (
                <Thumb
                  key={i}
                  onClick={() => setModalIndex(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Abrir imagen ${i + 1}`}
                  onKeyDown={e => (e.key === 'Enter' ? setModalIndex(i) : null)}
                >
                  <LazyResponsiveImage
                    src={img}
                    alt={`${item.title} - imagen ${i + 1}`}
                    width="400"
                    height="250"
                  />
                </Thumb>
              ))}
            </Gallery>
          )}
        </Content>
      </Container>

      {modalIndex !== null && (
        <Modal
          role="dialog"
          aria-modal="true"
          aria-label="Galería de imágenes"
          onClick={() => setModalIndex(null)}
        >
          <ModalInner onClick={e => e.stopPropagation()}>
            <ModalClose
              onClick={() => setModalIndex(null)}
              aria-label="Cerrar galería"
            >
              ✕
            </ModalClose>
            <ModalImg>
              <LazyResponsiveImage
                src={item.images[modalIndex]}
                alt={`${item.title} - imagen ${modalIndex + 1}`}
                width="1200"
                height="800"
              />
            </ModalImg>
            <ModalNav>
              <NavButton
                disabled={modalIndex === 0}
                onClick={() => setModalIndex(i => Math.max(0, i - 1))}
                aria-label="Anterior"
              >
                ◀
              </NavButton>
              <NavButton
                disabled={modalIndex === item.images.length - 1}
                onClick={() =>
                  setModalIndex(i => Math.min(item.images.length - 1, i + 1))
                }
                aria-label="Siguiente"
              >
                ▶
              </NavButton>
            </ModalNav>
          </ModalInner>
        </Modal>
      )}
    </Page>
  );
};

export default NewsDetail;

const Page = styled.main`
  max-width: 1100px;
  margin: 2rem auto;
  padding: 1rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Back = styled(Link)`
  color: #071c2f;
  text-decoration: none;
  font-weight: 700;
`;

const Title = styled.h1`
  margin: 0.25rem 0;
  font-size: 2rem;
  color: #071c2f;
`;

const Meta = styled.div`
  color: #6b4b6e;
`;

const Hero = styled.div`
  margin-top: 1rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1rem;
`;

const Content = styled.article``;

const ArticleText = styled.div`
  color: #222;
  line-height: 1.6;
  p {
    margin: 0 0 1rem 0;
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  &:focus-visible {
    outline: 3px solid #ffbf47;
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
