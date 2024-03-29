import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import TitleSection from "../../components/TitleSection";
import VideoCapacidad from "./VideoCapacidad";

const SemanaCapacidad = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Semana Capacidad" />
      <TitleSection title="Actividades en I.E.S Fernando de Mena" size />
      <VideoCapacidad />
      <PartnersList inverse size />
      <Footer />
    </>
  );
};
export default SemanaCapacidad;
