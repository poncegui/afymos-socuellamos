import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LazyResponsiveImage from '../Image/LazyResponsiveImage';

const STORAGE_KEY = 'afymos_fontScale';

const FeaturedNews = ({ item, priorityImage = false }) => {
  const [scale, setScale] = useState(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return v ? Number(v) : 1;
    } catch (e) {
      return 1;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(scale));
      document.documentElement.style.setProperty('--fs', String(scale));
    } catch (e) {}
  }, [scale]);

  useEffect(() => {
    try {
      const v = Number(localStorage.getItem(STORAGE_KEY) || 1);
      document.documentElement.style.setProperty('--fs', String(v));
      setScale(v);
    } catch (e) {}

    const onStorage = ev => {
      if (ev.key === STORAGE_KEY) {
        try {
          const val = Number(ev.newValue || 1);
          document.documentElement.style.setProperty('--fs', String(val));
          setScale(val);
        } catch (e) {}
      }
    };

    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  if (!item) return null;

  return (
    <Wrapper role="region" aria-label={`Noticia destacada: ${item.title}`}>
      <Article>
        <Media>
          {item.image ? (
            <LazyResponsiveImage
              src={item.image}
              alt={item.alt || item.title}
              width="1200"
              height="700"
              priority={priorityImage}
            />
          ) : (
            <Empty>No image</Empty>
          )}
        </Media>

        <Title>{item.title}</Title>

        <Excerpt>
          {item.excerpt
            .split('\n')
            .slice(0, 6)
            .map((p, i) => (
              <p key={i}>{p}</p>
            ))}
        </Excerpt>

        <Footer>
          <TagList>
            {item.tags &&
              item.tags.slice(0, 3).map(t => <Tag key={t}>{t}</Tag>)}
          </TagList>

          <Meta>
            <time dateTime={item.date}>
              {new Date(item.date).toLocaleDateString()}
            </time>
          </Meta>

          <Actions>
            <ReadMore to={item.href}>Leer más</ReadMore>
          </Actions>
        </Footer>

        <Controls aria-hidden={false}>
          <ControlButton
            onClick={() => {
              try {
                const cur = Number(localStorage.getItem(STORAGE_KEY) || 1);
                const next = Math.max(0.8, Number((cur - 0.1).toFixed(2)));
                localStorage.setItem(STORAGE_KEY, String(next));
                document.documentElement.style.setProperty(
                  '--fs',
                  String(next)
                );
                setScale(next);
              } catch (e) {}
            }}
          >
            A-
          </ControlButton>
          <ControlButton
            onClick={() => {
              try {
                localStorage.setItem(STORAGE_KEY, '1');
                document.documentElement.style.setProperty('--fs', '1');
                setScale(1);
              } catch (e) {}
            }}
          >
            A
          </ControlButton>
          <ControlButton
            onClick={() => {
              try {
                const cur = Number(localStorage.getItem(STORAGE_KEY) || 1);
                const next = Math.min(2, Number((cur + 0.1).toFixed(2)));
                localStorage.setItem(STORAGE_KEY, String(next));
                document.documentElement.style.setProperty(
                  '--fs',
                  String(next)
                );
                setScale(next);
              } catch (e) {}
            }}
          >
            A+
          </ControlButton>
        </Controls>
      </Article>
    </Wrapper>
  );
};

export default FeaturedNews;

/* Styled */
const Wrapper = styled.section`
  max-width: 1100px;
  margin: 2.25rem auto;
  padding: 0.5rem;
`;

const Article = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  background: linear-gradient(180deg, #fff, #fbfbfd);
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(7, 28, 47, 0.06);
  box-shadow: 0 10px 30px rgba(7, 28, 47, 0.08);
  padding: 1rem;
  position: relative;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    align-items: start;
  }
`;

const Media = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  background: #000;
`;

const Empty = styled.div`
  background: #f3f3f3;
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
`;

const Title = styled.h2`
  grid-column: 1 / -1;
  margin: 0.5rem 0 0.25rem 0;
  font-size: calc(clamp(1.4rem, 3vw, 1.9rem) * var(--fs, 1));
  line-height: 1.08;
  color: var(--color-primary);
  font-weight: 800;
  text-align: left;
`;

const Excerpt = styled.div`
  grid-column: 1 / -1;
  color: var(--color-text);
  line-height: 1.8;
  p {
    margin: 0 0 1rem 0;
    font-size: calc(1.12rem * var(--fs, 1));
  }
  text-align: justify;
  text-justify: inter-word;
  hyphens: auto;
  text-indent: 0;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 0.25rem;
`;

const TagList = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;
const Tag = styled.span`
  background: rgba(52, 120, 255, 0.08);
  color: var(--color-primary);
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: calc(0.78rem * var(--fs, 1));
  text-transform: uppercase;
`;

const Meta = styled.div`
  color: var(--color-muted);
  font-size: calc(var(--type-small) * var(--fs, 1));
  margin-left: auto;
`;

const Actions = styled.div`
  margin-left: auto;
`;
const ReadMore = styled(Link)`
  background: var(--color-cta);
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
`;

const Controls = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  display: flex;
  gap: 0.5rem;
`;

const ControlButton = styled.button`
  background: white;
  border: 1px solid rgba(7, 28, 47, 0.06);
  padding: 0.35rem 0.6rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
`;
