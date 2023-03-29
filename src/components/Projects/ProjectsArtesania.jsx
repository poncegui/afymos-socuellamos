import { React } from "react";

import NavBarTemplate from "../templates/NavBarTemplate";
import Footer from "../Footer";
import { artesaniaDataOne, artesaniaDataTwo } from "./services/artesaniaData";
import { ContentProjects } from "../Content/ContentProjects";
import Diversity from "../Diversity";
import PartnersList from "../main/PartnerList";

const ProjectsArtesania = () => {
  return (
    <>
      <NavBarTemplate title="Servicio de Artesanía" />
      <ContentProjects {...artesaniaDataOne} inverse />
      <ContentProjects {...artesaniaDataTwo} reverse />
      <Diversity />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsArtesania;
