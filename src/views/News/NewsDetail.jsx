import { useParams } from "react-router-dom";
import React from "react";

import { sampleNews } from "../../components/News/newsData";
import styled from "styled-components";
import NewsArticle from "../../components/News/NewsArticle";
import NavBarViews from "../../components/Header/NavBarViews";
import Footer from "../../components/Footer/Footer";

const NewsDetail = () => {
  // We'll look up item by slug-ish id in the route param 'slug'
  const { slug } = useParams();
  const item = sampleNews.find((n) => n.id === slug) || sampleNews[0];

  if (!item) return <p>Noticia no encontrada</p>;

  return (
    <>
      <NavBarViews title="Noticias" alt="Logo de Afymos" />
      <Page>
        <NewsArticle item={item} />
      </Page>
      <Footer />
    </>
  );
};

export default NewsDetail;

const Page = styled.main`
  max-width: 1100px;
  margin: 2.25rem auto;
  padding: 1rem;
`;
