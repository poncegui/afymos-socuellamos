import LazyResponsiveImage from '../Image/LazyResponsiveImage';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const FeaturedNews = ({ item }) => {
  const [scale, setScale] = useState(() => {
    try {
      const v = localStorage.getItem('afymos_fontScale');
      return v ? Number(v) : 1;
    } catch (e) {
      return 1;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('afymos_fontScale', String(scale));
    } catch (e) {
      // ignore
    }
  }, [scale]);

  if (!item) return null;

  return (
    <Wrapper
      role="region"
      aria-label={`Noticia destacada: ${item.title}`}
      style={{ '--fs': scale }}
    >
      <Article>
        <Media>
          {item.image ? (
            <LazyResponsiveImage
              src={item.image}
              alt={item.alt || item.title}
              width="800"
              height="600"
            />
          ) : (
            <Empty>No image</Empty>
          )}
        </Media>

        <Body>
          <AccessibilityControls aria-hidden={false}>
            <ControlButton
              onClick={() => setScale(s => Math.max(1, Number((s - 0.1).toFixed(2))))}
              aria-label="Reducir tamaño de letra"
            >
              A-
            </ControlButton>
            <ControlButton
              onClick={() => setScale(1)}
              aria-label="Tamaño de letra por defecto"
            >
              A
            </ControlButton>
            <ControlButton
              onClick={() => setScale(s => Math.min(2, Number((s + 0.1).toFixed(2))))}
              aria-label="Aumentar tamaño de letra"
            >
              A+
            </ControlButton>
          </AccessibilityControls>
          <TagList>
            {item.tags &&
              item.tags.slice(0, 3).map(t => <Tag key={t}>#{t}</Tag>)}
          </TagList>
          <Title>{item.title}</Title>
          <Meta>
            <time dateTime={item.date}>
              {new Date(item.date).toLocaleDateString()}
            </time>
          </Meta>
          <Excerpt>
            {item.excerpt
              .split('\n')
              .slice(0, 6)
              .map((p, i) => (
                <p key={i}>{p}</p>
              ))}
          </Excerpt>

          <Actions>
            <ReadMore to={item.href} aria-label={`Leer más sobre ${item.title}`}>
              Leer más
            </ReadMore>
          </Actions>
        </Body>
      </Article>
    </Wrapper>
  );
};

export default FeaturedNews;

const Wrapper = styled.section`
  max-width: 1100px;
  margin: 2rem auto;
  padding: 1rem;
`;

const Article = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: stretch;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Media = styled.div`
  width: 100%;
  height: 100%;
  min-height: 320px;
  overflow: hidden;

  span,
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

const Empty = styled.div`
  background: #f3f3f3;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
`;

const Body = styled.div`
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const TagList = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  color: #0b708a;
  background: #eef6fb;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  font-size: calc(0.85rem * var(--fs, 1));
`;

const Title = styled.h2`
  margin: 0;
  color: #071c2f;
  font-size: calc(1.5rem * var(--fs, 1));
`;

const Meta = styled.div`
  color: #6b4b6e;
  font-size: calc(0.9rem * var(--fs, 1));
`;

const Excerpt = styled.div`
  color: #222;
  line-height: 1.6;
  flex: 1;
  overflow: hidden;
  p {
    margin: 0 0 0.75rem 0;
    font-size: calc(1rem * var(--fs, 1));
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const ReadMore = styled(Link)`
  background: #071c2f;
  color: #fff;
  padding: 0.6rem 0.9rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 2px;
  }
`;

const AccessibilityControls = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-bottom: 0.25rem;
`;

const ControlButton = styled.button`
  background: transparent;
  border: 1px solid #071c2f;
  color: #071c2f;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  line-height: 1;
  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 2px;
  }
`;
