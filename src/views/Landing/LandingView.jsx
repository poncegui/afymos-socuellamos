import { colaboradoresData, partnersData } from "../../components/Partners/services/partnersListData";
import {
  heroOne,
  heroThree,
  heroTwo,
} from "./components/services/landingBlocksData";

import CardsAboutUs from "./components/CardsAboutUs";
import CarouselSwitcher from "../../components/Carousel/CarouselSwitcher";
import ContactForm from "./components/contactForm/ContactForm";
import { Content } from "../../components/Content/Content";
import DonationInformation from "./components/DonationInformation";
import Footer from "../../components/Footer/Footer";
// import Modal from "../Landing/components/tePuedeInteresar/NewsInformation";
import PartnertList from "../../components/Partners/PartnerList";
import PlanDeIgualdad from "../Landing/components/tePuedeInteresar/PlanDeIgualdad";
import ProjectClubDeportivoAfymos from "./components/ProjectClubDeportivo";
import ProjectCreaVideo from "./components/ProjectCreaVideo";
import React from "react";
import ScrollToTop from "../../components/ScrollToUp";
import SectionServices from "./components/SectionServices";
import TePuedeInteresar from "../Landing/components/tePuedeInteresar/TePuedeInteresar";
import Testimonials from "./components/testimonials/Testimonials";
import VideoLanding from "./components/VideoLanding";
import { items } from "./services/CaruselData";

const LandingView = () => {
  return (
    <>
      <ScrollToTop />
      <TePuedeInteresar />
      <CarouselSwitcher items={items} />
      <VideoLanding />
      <DonationInformation />
      <SectionServices />
      {/* <Modal /> */}
      <CardsAboutUs />
      <ProjectClubDeportivoAfymos />
      <PlanDeIgualdad />
      <Content {...heroOne} />
      <ProjectCreaVideo />
      <Content {...heroThree} />
      <Testimonials />
      <Content {...heroTwo} />
      <ContactForm />
      <PartnertList size inverse marginBottom data={colaboradoresData} title='Socios Colaboradores' />
      <PartnertList size inverse marginBottom data={partnersData} title='Cofinanciaciones'/>
      <Footer />
    </>
  );
};
export default LandingView;
