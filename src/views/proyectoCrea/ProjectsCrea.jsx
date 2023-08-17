import { creaDataOne, creaDataTwo } from "./services/creaData";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import VideoCrea from "./components/VideoCrea";

const ProjectsCrea = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Proyecto CREA 2023" />
      <ContentProjects {...creaDataOne} inverse />
      <ContentProjects {...creaDataTwo} reverse />
      <VideoCrea />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsCrea;
