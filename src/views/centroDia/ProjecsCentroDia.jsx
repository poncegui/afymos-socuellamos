import {
  centroDiaDataOne,
  centroDiaDataThree,
  centroDiaDataTwo,
} from "./services/centroDiaData";
import {
  colaboradoresData,
  partnersData,
} from "../../components/Partners/services/partnersListData";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnertList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import TitleSection from "../../components/TitleSection";

const ProjectsCentroDia = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Centro de Día" />
      <TitleSection title="Nuestro Centro de día" size />
      <ContentProjects {...centroDiaDataOne} inverse />
      <ContentProjects {...centroDiaDataTwo} reverse />
      <ContentProjects {...centroDiaDataThree} inverse />
      <PartnertList
        size
        marginBottom
        data={colaboradoresData}
        title="Socios Colaboradores"
      />
      <PartnertList
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
export default ProjectsCentroDia;
