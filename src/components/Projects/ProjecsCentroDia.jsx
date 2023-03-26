import { React } from "react";

import NavBarTemplate from "../templates/NavBarTemplate";
import Footer from "../Footer";
import {
  centroDiaDataOne,
  centroDiaDataTwo,
  centroDiaDataThree,
} from "./services/centroDiaData";
import { ContentProjects } from "../Content/ContentProjects";
import PartnersList from "../main/PartnerList";

const ProjectsCentroDia = () => {
  return (
    <>
      <NavBarTemplate title="Centro de Día" />
      <ContentProjects {...centroDiaDataOne} inverse />
      <ContentProjects {...centroDiaDataTwo} reverse />
      <ContentProjects {...centroDiaDataThree} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsCentroDia;
