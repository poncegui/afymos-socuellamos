import { Link } from "react-router-dom";
import LazyResponsiveImage from "../Image/LazyResponsiveImage";
import styled from "styled-components";

const CarouselMobile = ({ items }) => (
  <ScrollArea role="region" aria-label="Noticias recientes">
    {items.map((item, i) => (
      <Card
        key={item.id ?? i}
        role="group"
        aria-roledescription="slide"
        aria-label={`Noticia ${i + 1} de ${items.length}: ${item.title}`}
      >
        <CardImageWrap>
          <LazyResponsiveImage
            src={item.image}
            webp={item.imageWebp}
            alt={item.alt || item.title}
          />
        </CardImageWrap>
        <CardBody>
          <CardTitle>{item.title}</CardTitle>
          <CardDesc>{item.description}</CardDesc>
          {item.link && (
            <CardLink to={item.link} aria-label={`Leer más: ${item.title}`}>
              Leer más →
            </CardLink>
          )}
        </CardBody>
      </Card>
    ))}
  </ScrollArea>
);

export default CarouselMobile;

/* ─── Styles ─────────────────────────────────────────────────────────────── */

const ScrollArea = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 0.5rem 0 1rem;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.article`
  flex: 0 0 78%;
  scroll-snap-align: start;
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(7, 28, 47, 0.08);
  display: flex;
  flex-direction: column;
`;

const CardImageWrap = styled.div`
  width: 100%;
  height: 160px;
  overflow: hidden;
  background: #e8e2ec;
  flex-shrink: 0;

  span,
  picture {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const CardBody = styled.div`
  padding: 1rem 1.1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  flex: 1;
`;

const CardTitle = styled.h3`
  font-size: calc(0.9rem * var(--fs, 1));
  font-weight: 700;
  color: #071c2f;
  line-height: 1.35;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardDesc = styled.p`
  font-size: calc(0.82rem * var(--fs, 1));
  color: #6b6f76;
  line-height: 1.55;
  margin: 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardLink = styled(Link)`
  align-self: flex-start;
  font-size: calc(0.8rem * var(--fs, 1));
  font-weight: 700;
  color: #224464;
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
    outline-offset: 2px;
    border-radius: 2px;
  }
`;
