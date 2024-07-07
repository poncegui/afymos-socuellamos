import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import ProjectsIntro from "./components/ProjectsIntro";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";

const ProjectsTransparencia = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Transparencia" />
      <ProjectsIntro />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsTransparencia;
