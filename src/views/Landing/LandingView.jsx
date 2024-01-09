import React, { useState } from "react";
import {
  basket,
  diputacion,
} from "./components/carouselNoticias/Carousel.Data";
import { heroOne, heroThree, heroTwo } from "./components/services/HeroData";

import Carousel from "./components/carouselNoticias/Carousel";
import ContactForm from "./components/ContactForm";
import { Content } from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import MainNew from "../Landing/components/MainNew";
import NavBarLanding from "../../components/Header/NavBarLanding";
import PartnertList from "../../components/Partners/PartnerList";
import PlenaInclusion from "./components/PlenaInclusion";
import ProjectCreaVideo from "./components/ProjectCreaVideo";
import ScrollToTop from "../../components/ScrollToUp";
import SectionAboutUs from "./components/SectionAboutUs";
import SectionServices from "./components/SectionServices";
import SliderDisplay from "./components/sliderDisplay/SliderDisplay";
import Testimonials from "./components/Testimonials";

const LandingView = () => {
  const [diputacionData] = useState(diputacion);
  return (
    <>
      <ScrollToTop />
      <NavBarLanding />
      <PlenaInclusion />
      <div className="App">
        <Carousel />
      </div>
      <SliderDisplay
        items={diputacionData}
        title=""
        slides={3}
        datas={diputacionData}
      />
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
