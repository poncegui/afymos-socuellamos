import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import TitleSection from "../../components/TitleSection";
import { donacionDataOne } from "./services/donacionesData";

const ProjectsDonaciones = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Donaciones" />
      <TitleSection title="Crecemos contigo" size />
      <ContentProjects {...donacionDataOne} inverse />
      <PartnersList inverse size />
      <Footer />
    </>
  );
};
export default ProjectsDonaciones;
