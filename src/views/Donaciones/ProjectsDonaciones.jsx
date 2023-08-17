import { Content } from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import { donacionDataOne } from "./services/donacionesData";

const ProjectsDonaciones = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Donaciones" />
      <Content {...donacionDataOne} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};
export default ProjectsDonaciones;
