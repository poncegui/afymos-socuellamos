import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LazyResponsiveImage from "../Image/LazyResponsiveImage";
import styled from "styled-components";

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

  if (!item) return null;

  return (
    <Wrapper role="region" aria-label={`Noticia destacada: ${item.title}`}>
      <Inner>
        <MediaCol>
          {item.image ? (
            <LazyResponsiveImage
              src={item.image}
              alt={item.alt || item.title}
              width="1200"
              height="700"
              priority={priorityImage}
            />
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
  overflow: hidden;
  background: #e8e2ec;

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
  font-size: 0.75rem;
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
  font-size: 0.72rem;
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
  font-size: 0.82rem;
  color: #6b6f76;
`;

const ReadMore = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 700;
  color: #fff;
  background: #224464;
  text-decoration: none;
  padding: 0.55rem 1.25rem;
  border-radius: 999px;
  transition: background 0.2s, transform 0.15s;

  &:hover {
    background: #071c2f;
    transform: translateX(2px);
  }

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 3px;
  }
`;
