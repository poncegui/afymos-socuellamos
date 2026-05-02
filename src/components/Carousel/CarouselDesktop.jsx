import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import LazyResponsiveImage from "../Image/LazyResponsiveImage";
import styled from "styled-components";

const CarouselDesktop = ({ items }) => {
  const [page, setPage] = useState(0);
  const [cols, setCols] = useState(3);
  const total = items.length;

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCols(3);
      else if (window.innerWidth >= 640) setCols(2);
      else setCols(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pages = Math.ceil(total / cols);
  const startX = useRef(null);

  const prev = () => setPage((p) => Math.max(p - 1, 0));
  const next = () => setPage((p) => Math.min(p + 1, pages - 1));

  const handleTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    startX.current = null;
  };

  const visible = items.slice(page * cols, page * cols + cols);

  return (
    <Board
      role="region"
      aria-label="Tablón de noticias"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Grid $cols={cols}>
        {visible.map((item, i) => (
          <NewsCard key={item.id ?? i} item={item} />
        ))}
        {/* Relleno si la última página tiene menos items */}
        {Array.from({ length: cols - visible.length }).map((_, i) => (
          <Placeholder key={`ph-${i}`} aria-hidden="true" />
        ))}
      </Grid>

      <Controls>
        <NavBtn onClick={prev} disabled={page === 0} aria-label="Noticias anteriores">
          &#8249;
        </NavBtn>

        <Dots aria-label="Página de noticias">
          {Array.from({ length: pages }).map((_, i) => (
            <Dot
              key={i}
              $active={page === i}
              onClick={() => setPage(i)}
              aria-label={`Página ${i + 1} de ${pages}`}
              aria-current={page === i ? "true" : undefined}
            />
          ))}
        </Dots>

        <NavBtn onClick={next} disabled={page === pages - 1} aria-label="Noticias siguientes">
          &#8250;
        </NavBtn>
      </Controls>
    </Board>
  );
};

/* Tarjeta individual ───────────────────────────────────────── */
const NewsCard = ({ item }) => (
  <Card>
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
);

export default CarouselDesktop;

/* ─── Styles ─────────────────────────────────────────────────────────────── */

const Board = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols}, 1fr);
  gap: 1.25rem;
`;

const Placeholder = styled.div`
  background: transparent;
`;

const Card = styled.article`
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 14px rgba(7, 28, 47, 0.07);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.25s ease, transform 0.25s ease;

  &:hover {
    box-shadow: 0 8px 28px rgba(7, 28, 47, 0.13);
    transform: translateY(-3px);
  }
`;

/* Contenedor de imagen: controla el alto y fuerza object-fit */
const CardImageWrap = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  background: #e8e2ec;
  flex-shrink: 0;

  /* LazyResponsiveImage: span > picture > img */
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
    transition: transform 0.4s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

const CardBody = styled.div`
  flex: 1;
  padding: 1.1rem 1.25rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CardTitle = styled.h3`
  font-size: calc(0.95rem * var(--fs, 1));
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
  font-size: calc(0.85rem * var(--fs, 1));
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
  margin-top: 0.4rem;
  font-size: calc(0.82rem * var(--fs, 1));
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

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const NavBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: #fff;
  color: #071c2f;
  font-size: calc(1.5rem * var(--fs, 1));
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(7, 28, 47, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;

  &:hover:not(:disabled) {
    background: #071c2f;
    color: #fff;
  }

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 3px;
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`;

const Dot = styled.button`
  width: ${({ $active }) => ($active ? "22px" : "8px")};
  height: 8px;
  border-radius: 999px;
  border: none;
  padding: 0;
  background: ${({ $active }) => ($active ? "#224464" : "#c6b1c9")};
  cursor: pointer;
  transition: width 0.3s ease, background 0.3s ease;

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 3px;
  }
`;
