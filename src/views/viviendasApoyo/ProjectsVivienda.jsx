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

const ProjectsViviendas = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Servicio de atención a Viviendas" />
      <ContentProjects {...viviendasDataOne} inverse />
      <ContentProjects {...viviendasDataTwo} reverse />
      <ContentProjects {...viviendasDataThree} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsViviendas;
