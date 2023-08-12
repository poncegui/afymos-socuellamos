import {
  familyDataOne,
  familyDataThree,
  familyDataTwo,
} from "./services/familiasData";

import { ContentProjects } from "../Content/ContentProjects";
import Footer from "../Footer";
import NavBarTemplate from "../templates/NavBarTemplate";
import PartnersList from "../main/PartnerList";
import { React } from "react";
import ScrollToTop from "../ScrollToUp";

const ProjectsFamilias = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarTemplate title="Servicio de atención a familias" />
      <ContentProjects {...familyDataOne} inverse />
      <ContentProjects {...familyDataTwo} reverse />
      <ContentProjects {...familyDataThree} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsFamilias;
