import React, { useState } from "react";
import {
  allNewsDataOne,
  allNewsDataTwo,
  diputacionData,
} from "./services/AllNewsData";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import ScrollToTop from "../../components/ScrollToUp";
import SliderDisplay from "../Landing/components/sliderDisplay/SliderDisplay";
import TitleSection from "../../components/TitleSection";

const AllNews = () => {
  const [diputacion] = useState(diputacionData);
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Todas las Noticias" />
      <TitleSection title="Actividades Pasadas" size />
      <ContentProjects {...allNewsDataOne} inverse />
      <SliderDisplay
        items={diputacion}
        title=""
        slides={3}
        datas={diputacion}
      />
      <ContentProjects {...allNewsDataTwo} reverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default AllNews;
