import { React } from "react";

import NavBarTemplate from "../templates/NavBarTemplate";
import Footer from "../Footer";
import {
  socioLaboralDataOne,
  socioLaboralDataTwo,
  socioLaboralDataThree,
} from "./services/socioLaboralData";
import { ContentProjects } from "../Content/ContentProjects";
import PartnersList from "../main/PartnerList";

const ProjectsSocioLaboral = () => {
  return (
    <>
      <NavBarTemplate title="Centro de Formación" />
      <ContentProjects {...socioLaboralDataOne} inverse />
      <ContentProjects {...socioLaboralDataTwo} reverse />
      <ContentProjects {...socioLaboralDataThree} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsSocioLaboral;
