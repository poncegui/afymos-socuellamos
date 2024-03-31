import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import PortadaCampeones from "./PortadaCampeones";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import TitleSection from "../../components/TitleSection";
import { campeonesOne } from "./services/somosCampeonesData";

const SomosCampeones = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Somos campeones" />
      <TitleSection title="20° CAMPEONATO REGIONAL BALONCESTO 2023" size />
      <PortadaCampeones />
      <ContentProjects {...campeonesOne} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default SomosCampeones;
