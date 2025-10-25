import LazyResponsiveImage from '../Image/LazyResponsiveImage';
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

/**
 * NewsList
 * Props:
 * - items: Array of { id, title, excerpt, image, alt, date, href, tags }
 * - ariaLabel: string for the list region
 *
 * Accessibility:
 * - Uses semantic <article> for each news item
 * - Card is keyboard accessible (Enter/Space) and contains a visible focus style
 * - Images include alt text
 */
const NewsList = ({ items = [], ariaLabel = 'Noticias recientes' }) => {
  if (!items || items.length === 0) return null;

  return (
    <Section aria-label={ariaLabel}>
      <Grid>
        {items.map(item => (
          <Article
            key={item.id}
            tabIndex={0}
            aria-labelledby={`news-title-${item.id}`}
            onKeyDown={e => handleKeyDown(e, item.href)}
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
                <Placeholder aria-hidden="true">No image</Placeholder>
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
  if (e.key === 'Enter' || e.key === ' ') {
    // emulate link activation
    e.preventDefault();
    window.location.href = href;
  }
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
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
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Article = styled.article`
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  outline: none;

  &:hover {
    transform: translateY(-4px);
    transition: transform 180ms ease;
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

const Placeholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  color: #777;
`;

const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1 1 auto;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  color: #071c2f;
`;

const Meta = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  color: #6b4b6e;
  font-size: 0.85rem;
`;

const Tags = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const Tag = styled.span`
  background: #eef6fb;
  color: #0b708a;
  padding: 0.15rem 0.45rem;
  border-radius: 999px;
  font-size: 0.75rem;
`;

const Excerpt = styled.p`
  margin: 0;
  color: #222;
  line-height: 1.4;
  font-size: 0.95rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ReadMore = styled(Link)`
  text-decoration: none;
  color: #071c2f;
  font-weight: 700;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 2px;
  }
`;
