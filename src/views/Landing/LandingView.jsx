import {
  heroOne,
  heroThree,
  heroTwo,
} from "./components/services/landingBlocksData";

import CardsAboutUs from "./components/CardsAboutUs";
import ContactForm from "./components/contactForm/ContactForm";
import { Content } from "../../components/Content/Content";
import DonationInformation from "./components/DonationInformation";
import Footer from "../../components/Footer/Footer";
import Modal from "../Landing/components/tePuedeInteresar/NewsInformation";
import PartnertList from "../../components/Partners/PartnerList";
import ProjectCreaVideo from "./components/ProjectCreaVideo";
import React from "react";
import ScrollToTop from "../../components/ScrollToUp";
import SectionServices from "./components/SectionServices";
import TePuedeInteresar from "../Landing/components/tePuedeInteresar/TePuedeInteresar";
import Testimonials from "./components/testimonials/Testimonials";
import VideoLanding from "./components/VideoLanding";

const LandingView = () => {
  return (
    <>
      <ScrollToTop />
      <TePuedeInteresar />
      {/* <Modal /> */}
      <VideoLanding />
      <DonationInformation />
      <SectionServices />
      <CardsAboutUs />
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
