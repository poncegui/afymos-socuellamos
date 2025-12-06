import {
  clubDeportivoDataFour,
  clubDeportivoDataOne,
  clubDeportivoDataThree,
  clubDeportivoDataTwo,
} from "./services/ClubDeportivoData";
import {
  colaboradoresData,
  partnersData,
} from "../../components/Partners/services/partnersListData";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnerList from "../../components/Partners/PartnerList";
import React from "react";
import ScrollToTop from "../../components/ScrollToUp";
import TitleSection from "../../components/TitleSection";

const ClubDeportivo = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Club Deportivo Afymos" />
      <TitleSection title="Aymos también es deporte" size />
      <ContentProjects {...clubDeportivoDataOne} />
      <ContentProjects {...clubDeportivoDataTwo} />
      <ContentProjects {...clubDeportivoDataThree} />
      <ContentProjects {...clubDeportivoDataFour} />
      <PartnerList
        size
        marginBottom
        data={colaboradoresData}
        title="Socios Colaboradores"
      />
      <PartnerList
        size
        inverse
        marginBottom
        data={partnersData}
        title="Cofinanciaciones"
      />
      <Footer />
    </>
  );
};

export default ClubDeportivo;
