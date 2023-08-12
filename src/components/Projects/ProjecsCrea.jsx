import { creaDataOne, creaDataTwo } from "./services/creaData";

import { ContentProjects } from "../Content/ContentProjects";
import Footer from "../Footer";
import NavBarTemplate from "../templates/NavBarTemplate";
import PartnersList from "../main/PartnerList";
import { React } from "react";
import ScrollToTop from "../ScrollToUp";
import VideoCrea from "../VideosFeaatures/VideoCrea";

const ProjectsCrea = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarTemplate title="Proyecto CREA 2023" />
      <ContentProjects {...creaDataOne} inverse />
      <ContentProjects {...creaDataTwo} reverse />
      <VideoCrea />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsCrea;
