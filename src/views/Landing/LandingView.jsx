import { heroOne, heroThree, heroTwo } from "./components/services/HeroData";

import ContactForm from "./components/ContactForm";
import { Content } from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import MainNew from "../somosCampeones/PortadaCampeones";
import NavBarLanding from "../../components/Header/NavBarLanding";
import PartnertList from "../../components/Partners/PartnerList";
import ProjectCreaVideo from "./components/ProjectCreaVideo";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import SectionAboutUs from "./components/SectionAboutUs";
import SectionActivitiesDeprecated from "./components/SectionActivitiesDeprecated";
import SectionServices from "./components/SectionServices";
import Testimonials from "./components/Testimonials";

const LandingView = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarLanding />
      <SectionActivitiesDeprecated />
      <SectionServices />
      <SectionAboutUs />
      <Content {...heroOne} />
      <ProjectCreaVideo />
      <Content {...heroThree} />
      <Testimonials />
      <Content {...heroTwo} />
      <MainNew />
      <ContactForm />
      <PartnertList size inverse marginBottom />
      <Footer />
    </>
  );
};
export default LandingView;
