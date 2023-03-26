import { React } from "react";

import NavBarTemplate from "../templates/NavBarTemplate";
import Footer from "../Footer";
import {
  diagnosticoDataOne,
  diagnosticoDataTwo,
  diagnosticoDataThree,
} from "./services/diagnosticoData";
import { ContentProjects } from "../Content/ContentProjects";
import PartnersList from "../main/PartnerList";

const ProjectsDiagnostico = () => {
  return (
    <>
      <NavBarTemplate title="Centro de Formación" />
      <ContentProjects {...diagnosticoDataOne} inverse />
      <ContentProjects {...diagnosticoDataTwo} reverse />
      <ContentProjects {...diagnosticoDataThree} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsDiagnostico;
