import { React } from "react";

import NavBarTemplate from "../templates/NavBarTemplate";
import Footer from "../Footer";
import { donacionDataOne } from "./services/donacionesData";
import { ContentProjects } from "../Content/ContentProjects";
import PartnersList from "../main/PartnerList";

const ProjectsDonaciones = () => {
  return (
    <>
      <NavBarTemplate title="Donaciones" />
      <ContentProjects {...donacionDataOne} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsDonaciones;
