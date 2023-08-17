import { heroOne, heroThree, heroTwo } from "./components/services/HeroData";

import Carousel from "./components/carouselNoticias/Carousel";
import ContactForm from "./components/ContactForm";
import { Content } from "../../components/Content/Content";
import Cookies from "../../components/Cookies";
import Footer from "../../components/Footer/Footer";
import NavBarLanding from "../../components/Header/NavBarLanding";
import PartnertList from "../../components/Partners/PartnerList";
import ProjectCreaVideo from "./components/ProjectCreaVideo";
import ScrollToTop from "../../components/ScrollToUp";
import SectionAboutUs from "./components/SectionAboutUs";
import SectionServices from "./components/SectionServices";
import Testimonials from "./components/Testimonials";

const LandingView = () => {
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
      <Carousel />
      <ContactForm />
      <PartnertList size inverse marginBottom />
      <Cookies />
      <Footer />
    </>
  );
};
export default LandingView;
