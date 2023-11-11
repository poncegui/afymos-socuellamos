import React, { useState } from "react";
import { heroOne, heroThree, heroTwo } from "./components/services/HeroData";

import Carousel from "./components/carouselNoticias/Carousel";
import ContactForm from "./components/ContactForm";
import { Content } from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import MainNew from "../Landing/components/MainNew";
import NavBarLanding from "../../components/Header/NavBarLanding";
import PartnertList from "../../components/Partners/PartnerList";
import ProjectCreaVideo from "./components/ProjectCreaVideo";
import ScrollToTop from "../../components/ScrollToUp";
import SectionAboutUs from "./components/SectionAboutUs";
import SectionServices from "./components/SectionServices";
import SliderDisplay from "./components/sliderDisplay/SliderDisplay";
import Testimonials from "./components/Testimonials";
import { basket } from "./components/carouselNoticias/Carousel.Data";

const LandingView = () => {
  const [picBasket] = useState(basket);
  return (
    <>
      <ScrollToTop />
      <NavBarLanding />
      <SectionServices />
      <SectionAboutUs />
      <Content {...heroOne} />
      <ProjectCreaVideo />
      <Testimonials />
      <Content {...heroTwo} />
      <Content {...heroThree} />

      <div className="App">
        <Carousel />
      </div>
      <MainNew />
      <SliderDisplay
        items={picBasket}
        title="Our Drinks & Cocktails"
        slides={3}
        datas={basket}
      />

      <ContactForm />
      <PartnertList size inverse marginBottom />
      <Footer />
    </>
  );
};
export default LandingView;
