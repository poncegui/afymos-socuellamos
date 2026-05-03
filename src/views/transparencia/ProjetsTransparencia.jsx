import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import ProjectsIntro from "./components/ProjectsIntro";
import { React } from "react";
const ProjectsTransparencia = () => {
  return (
    <>
      <NavBarViews title="Transparencia" />
      <ProjectsIntro />
      <PartnersList />
          </>
  );
};

export default ProjectsTransparencia;
