import {
  colaboradoresData,
  partnersData,
} from "../../components/Partners/services/partnersListData";
import {
  heroOne,
  heroThree,
  heroTwo,
} from "./components/services/landingBlocksData";

import CardsAboutUs from "./components/CardsAboutUs";
import React, { Suspense } from "react";
import ContactForm from "./components/contactForm/ContactForm";
import { Content } from "../../components/Content/Content";
import DonationInformation from "./components/DonationInformation";
import FeaturedNews from "../../components/News/FeaturedNewsClean";
import NewsVideoBlock from "../../components/News/NewsVideoBlock";
import Footer from "../../components/Footer/Footer";
import PartnertList from "../../components/Partners/PartnerList";
import PlanDeIgualdad from "../Landing/components/tePuedeInteresar/PlanDeIgualdad";
import ProjectClubDeportivoAfymos from "./components/ProjectClubDeportivo";
import ProjectCreaVideo from "./components/ProjectCreaVideo";
import ScrollToTop from "../../components/ScrollToUp";
import SectionServices from "./components/SectionServices";
import TePuedeInteresar from "../Landing/components/tePuedeInteresar/TePuedeInteresar";
import Testimonials from "./components/testimonials/Testimonials";
import VisitCounter from "./components/VisitCounter";
import { items } from "./services/CaruselData";
import { sampleNews } from "../../components/News/newsData";

const CarouselSwitcher = React.lazy(() =>
  import("../../components/Carousel/CarouselSwitcher")
);
const VideoLanding = React.lazy(() => import("./components/VideoLanding"));
const VideoVisitaCuenca = React.lazy(() =>
  import("./components/VideoVisitaCuenca")
);

// import Modal from "../Landing/components/tePuedeInteresar/NewsInformation";

const LandingView = () => {
  return (
    <>
      <ScrollToTop />
      <VisitCounter />
      <TePuedeInteresar />
      <Suspense fallback={null}>
        <CarouselSwitcher items={items} />
      </Suspense>
      <NewsVideoBlock heading={`Aventura en la naturaleza con "Un Paseo Real"`}>
        {`Gracias al programa "Un Paseo Real" de la Diputación de Ciudad Real, hemos vivido una jornada inolvidable en plena naturaleza, recorriendo la impresionante ruta de la Quebrada del Toro, con la experta guía del equipo de @RuideraActiva. Fue una actividad exigente a nivel físico, pero el esfuerzo valió la pena. Al finalizar, pudimos relajarnos y disfrutar de las espectaculares vistas de las Lagunas de Ruidera, que en esta época del año lucen especialmente hermosas. Pero estos viajes son mucho más que rutas de senderismo. Son espacios de convivencia, de aprendizaje y de cuidado mutuo. Nos permiten conocer mejor a las familias, compartir experiencias con las personas con discapacidad y fortalecer los lazos con los monitores que nos acompañan cada día.\n\nSeguimos apostando por este tipo de iniciativas que combinan naturaleza, inclusión y bienestar.`}
      </NewsVideoBlock>
      <FeaturedNews item={sampleNews[0]} priorityImage={true} />
      <Suspense fallback={null}>
        <VideoVisitaCuenca />
        <VideoLanding />
      </Suspense>
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
      <PartnertList
        size
        inverse
        marginBottom
        data={colaboradoresData}
        title="Socios Colaboradores"
      />
      <PartnertList
        size
        inverse
        marginBottom
        data={partnersData}
        title="Cofinanciaciones"
      />
      <Footer />
    </>
  );
};
export default LandingView;
