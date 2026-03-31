import LazyResponsiveImage from "../Image/LazyResponsiveImage";
import placeholderImg from "../../views/Landing/assets/images-noticias/news.png";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const NewsList = ({ items = [], ariaLabel = "Noticias recientes" }) => {
  if (!items || items.length === 0) return null;

  return (
    <Section aria-label={ariaLabel}>
      <Grid>
        {items.map((item) => (
          <Article
            key={item.id}
            tabIndex={0}
            aria-labelledby={`news-title-${item.id}`}
            onKeyDown={(e) => handleKeyDown(e, item.href)}
          >
            <Media>
              {item.image ? (
                <LazyResponsiveImage
                  src={item.image}
                  alt={item.alt || item.title}
                  width="800"
                  height="450"
                />
              ) : (
                <LazyResponsiveImage
                  src={placeholderImg}
                  alt="placeholder"
                  width="800"
                  height="450"
                />
              )}
            </Media>

            <Content>
              <header>
                <Title id={`news-title-${item.id}`}>{item.title}</Title>
                <Meta>
                  <time dateTime={item.date}>{formatDate(item.date)}</time>
                  {item.tags && (
                    <Tags>
                      {item.tags.slice(0, 3).map((t, i) => (
                        <Tag key={i}>{t}</Tag>
                      ))}
                    </Tags>
                  )}
                </Meta>
              </header>

              <Excerpt>{item.excerpt}</Excerpt>

              <Footer>
                <ReadMore
                  to={item.href}
                  aria-label={`Leer más sobre ${item.title}`}
                >
                  Leer más
                </ReadMore>
              </Footer>
            </Content>
          </Article>
        ))}
      </Grid>
    </Section>
  );
};

function handleKeyDown(e, href) {
  if (!href) return;
  if (e.key === "Enter" || e.key === " ") {
    // emulate link activation
    e.preventDefault();
    window.location.href = href;
  }
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (err) {
    return dateStr;
  }
}

export default NewsList;

const Section = styled.section`
  width: 100%;
  margin: 2rem auto;
  max-width: 1100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Article = styled.article`
  background: white;
  border-radius: 12px;
  box-shadow: var(--elevation-1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  outline: none;

  transition: transform 180ms ease, box-shadow 180ms ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--elevation-2);
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px rgba(11, 112, 170, 0.18);
  }
`;

const Media = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 */
  position: relative;

  span,
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Placeholder component replaced by image fallback (placeholderImg)

const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1 1 auto;
`;

const Title = styled.h3`
  margin: 0;
  /* match FeaturedNews smaller, professional title size; responsive and scalable */
  font-size: calc(clamp(1.05rem, 2vw, 1.4rem) * var(--fs, 1));
  color: var(--color-primary);
  line-height: 1.12;
  font-weight: 700;
`;

const Meta = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  color: var(--color-muted);
  font-size: calc(var(--type-small) * var(--fs, 1));
`;

const Tags = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const Tag = styled.span`
  background: color-mix(in srgb, var(--color-accent) 8%, white 92%);
  color: var(--color-accent);
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  font-size: calc(var(--type-small) * var(--fs, 1));
  font-weight: 700;
`;

const Excerpt = styled.p`
  margin: 0;
  color: var(--color-text);
  line-height: 1.5;
  font-size: calc(14px * var(--fs, 1));
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media (max-width: 640px) {
    font-size: calc(13px * var(--fs, 1));
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ReadMore = styled(Link)`
  text-decoration: none;
  color: var(--color-primary);
  font-weight: 800;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  font-size: calc(var(--type-base) * var(--fs, 1));

  &:focus-visible {
    outline: 3px solid var(--color-cta);
    outline-offset: 2px;
  }
`;
