import { creaDataOne, creaDataTwo } from "./services/creaData";

import { ContentProjects } from "../Content/ContentProjects";
import Footer from "../Footer";
import NavBarTemplate from "../templates/NavBarTemplate";
import PartnersList from "../main/PartnerList";
import { React } from "react";

const ProjectsCrea = () => {
  return (
    <>
      <NavBarTemplate title="Proyecto CREA 2023" />
      <ContentProjects {...creaDataOne} inverse />
      <ContentProjects {...creaDataTwo} reverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsCrea;
