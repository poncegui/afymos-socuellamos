import React,{useState}  from 'react';
import { heroOne, heroThree, heroTwo } from "./components/services/HeroData";

import ContactForm from "./components/ContactForm";
import { Content } from "../../components/Content/Content";
import DonationModal from "./components/DonationModal";
import Footer from "../../components/Footer/Footer";
import PartnertList from "../../components/Partners/PartnerList";
import ProjectCreaVideo from "./components/ProjectCreaVideo";
import ScrollToTop from "../../components/ScrollToUp";
import SectionAboutUs from "./components/SectionAboutUs";
import SectionServices from "./components/SectionServices";
import TePuedeInteresar from "../Landing/components/tePuedeInteresar/TePuedeInteresar";
import Testimonials from "./components/Testimonials";

const LandingView = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <ScrollToTop />
      <DonationModal open={modalOpen} onClose={handleCloseModal} />
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
