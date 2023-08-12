import {
  centroDiaDataOne,
  centroDiaDataThree,
  centroDiaDataTwo,
} from "./services/centroDiaData";

import { ContentProjects } from "../Content/ContentProjects";
import Footer from "../Footer";
import NavBarTemplate from "../templates/NavBarTemplate";
import PartnersList from "../main/PartnerList";
import { React } from "react";
import ScrollToTop from "../ScrollToUp";
import VideoCentroDia from "../VideosFeaatures/VideoCentroDia";

const ProjectsCentroDia = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarTemplate title="Centro de Día" />
      <VideoCentroDia />
      <ContentProjects {...centroDiaDataOne} inverse />
      <ContentProjects {...centroDiaDataTwo} reverse />
      <ContentProjects {...centroDiaDataThree} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsCentroDia;
