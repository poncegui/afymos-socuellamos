import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import TePuedeInteresar from "../Landing/components/tePuedeInteresar/TePuedeInteresar";
import TitleSection from "../../components/TitleSection";
import { charlasDataOne } from "./services/charlasData";

const Charlas = () => {
  return (
    <>
      {/* <ScrollToTop />
      <NavBarViews title="charlas" />
      <TitleSection title="Charlas Profesionales" size /> */}
      {/* <ContentProjects {...charlasDataOne} inverse /> */}
      <TePuedeInteresar />
      {/* <PartnersList />
      <Footer /> */}
    </>
  );
};

export default Charlas;
