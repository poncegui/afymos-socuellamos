import { Content } from "../Content/Content";
import Footer from "../Footer";
import NavBarTemplate from "../templates/NavBarTemplate";
import PartnersList from "../main/PartnerList";
import { React } from "react";
import ScrollToTop from "../ScrollToUp";
import { donacionDataOne } from "./services/donacionesData";

const ProjectsDonaciones = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarTemplate title="Donaciones" />
      <Content {...donacionDataOne} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default ProjectsDonaciones;
