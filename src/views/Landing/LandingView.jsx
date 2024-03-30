import { heroOne, heroThree, heroTwo } from "./components/services/HeroData";

import ContactForm from "./components/ContactForm";
import { Content } from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import PartnertList from "../../components/Partners/PartnerList";
import ProjectCreaVideo from "./components/ProjectCreaVideo";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import SectionAboutUs from "./components/SectionAboutUs";
import SectionServices from "./components/SectionServices";
import TePuedeInteresar from "../Landing/components/tePuedeInteresar/TePuedeInteresar";
import Testimonials from "./components/Testimonials";

const LandingView = () => {
  return (
    <>
      <ScrollToTop />
      <TePuedeInteresar />
      <SectionServices />
      <SectionAboutUs />
      <Content {...heroOne} />
      <ProjectCreaVideo />
      <Content {...heroThree} />
      <Testimonials />
      <Content {...heroTwo} />
      <ContactForm />
      <PartnertList size inverse marginBottom />
      <Footer />
    </>
  );
};
export default LandingView;
