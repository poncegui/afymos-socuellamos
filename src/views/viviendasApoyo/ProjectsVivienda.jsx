import {
  colaboradoresData,
  partnersData,
} from "../../components/Partners/services/partnersListData";
import {
  viviendasDataOne,
  viviendasDataThree,
  viviendasDataTwo,
} from "./services/viviendasData";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import TitleSection from "../../components/TitleSection";

const ProjectsViviendas = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Viviendas" />
      <TitleSection title="Apoyo acceso viviendas" size />
      <ContentProjects {...viviendasDataOne} inverse />
      <ContentProjects {...viviendasDataTwo} reverse />
      <ContentProjects {...viviendasDataThree} inverse />
      <PartnersList
        size
        marginBottom
        data={colaboradoresData}
        title="Socios Colaboradores"
      />
      <PartnersList
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

export default ProjectsViviendas;
