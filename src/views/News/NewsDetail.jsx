import { Link, useParams } from 'react-router-dom';
import React from 'react';

import { sampleNews } from '../../components/News/newsData';
import styled from 'styled-components';
import NewsArticle from '../../components/News/NewsArticle';

const NewsDetail = () => {
  // We'll look up item by slug-ish id in the route param 'slug'
  const { slug } = useParams();
  const item = sampleNews.find(n => n.id === slug) || sampleNews[0];

  if (!item) return <p>Noticia no encontrada</p>;

  return (
    <Page>
      <Header>
        <Back to="/">← Volver</Back>
      </Header>

      <NewsArticle item={item} />
    </Page>
  );
};

export default NewsDetail;

const Page = styled.main`
  max-width: 1100px;
  margin: 2.25rem auto;
  padding: 1rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Back = styled(Link)`
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 700;
  background: transparent;
  padding: 0.25rem 0.35rem;
  border-radius: 6px;
  transition: background 160ms ease;
  &:hover {
    background: rgba(7, 28, 47, 0.04);
  }
`;

// The detailed article rendering is handled in `NewsArticle` component.
