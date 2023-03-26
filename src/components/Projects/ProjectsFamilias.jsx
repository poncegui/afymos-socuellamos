import { React } from "react";

import NavBarTemplate from "../templates/NavBarTemplate";
import Footer from "../Footer";
import {
  familyDataOne,
  familyDataTwo,
  familyDataThree,
} from "./services/familiasData";
import { ContentProjects } from "../Content/ContentProjects";
import PartnersList from "../main/PartnerList";

const ProjectsFamilias = () => {
  return (
    <>
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
