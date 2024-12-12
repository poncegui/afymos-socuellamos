import { colaboradoresData, partnersData } from "../../components/Partners/services/partnersListData";
import { creaDataOne, creaDataThree, creaDataTwo } from "./services/creaData";

import { Content } from "../../components/Content/Content";
import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnertList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import VideoCrea from "./components/VideoCrea";

const ProjectsCrea = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Proyecto CREA 2024" />
      <ContentProjects {...creaDataOne} inverse />
      <Content {...creaDataThree} inverse />
      <ContentProjects {...creaDataTwo} reverse />
      <VideoCrea />
      <PartnertList size inverse  marginBottom data={colaboradoresData} title='Socios Colaboradores' />
      <PartnertList size  marginBottom data={partnersData} title='Cofinanciaciones'/>
      <Footer />
    </>
  );
};

export default ProjectsCrea;
