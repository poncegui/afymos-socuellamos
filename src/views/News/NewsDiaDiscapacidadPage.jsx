import React from "react";
import NavBarViews from "../../components/Header/NavBarViews";
import ScrollToTop from "../../components/ScrollToUp";
import TitleSection from "../../components/TitleSection";
import Footer from "../../components/Footer/Footer";
import NewsArticle from "../../components/News/NewsArticle";
import { sampleNews } from "../../components/News/newsData";

const NewsDiaDiscapacidadPage = () => {
  const item = sampleNews.find((n) => n.id === "dia-discapacidad-2025-12-03");

  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Día de la Discapacidad" />
      <TitleSection title={item ? item.title : "Día de la Discapacidad"} size />
      {item ? <NewsArticle item={item} /> : <p>Noticia no encontrada</p>}

      <Footer />
    </>
  );
};

export default NewsDiaDiscapacidadPage;

// page uses NewsArticle which renders the hero and media
