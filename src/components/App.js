//HOOKS
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { heroOne, heroTwo, heroThree } from "./Hero/HeroData";

//COMPONENTS

import "../styles/main.scss";
import AboutUs from "./AboutUs";
import Center from "./Center";
import Chart from "./Chart/Chart";
import ContactUs from "./ContactUs";
import Diversity from "./Diversity";
import Donation from "./Donation";
import Footer from "./Footer";
import Header from "./Header/Header";
import Job from "./Job";
import Main from "./main/Main";
import NavBar from "./Header/NavBar";
import PartnertList from "./main/PartnerList";
import PictoSection from "./main/PictoMenuList";
import Programs from "./Programs";
import Projects from "./Projects";
import Slider from "./Carousel/Slider";
import Carousel from "./Carousel/Carousel";
import { Content } from "./../components/Content/Content";
import Features from "./Features/Features";

const App = () => {
  //States
  const [textIsOpenMain, setTextIsOpenMain] = useState(false);

  //Events
  const handleToggleMain = () => {
    setTextIsOpenMain(!textIsOpenMain);
  };

  return (
    <>
      <Routes>
        <Route path="/contacto" element={<ContactUs />} />
        {/* <Route
                  path='*' element={<NotFoundPage />}
                  /> */}

        <Route path="/centro-diversidad" element={<Center />} />

        <Route path="/programas" element={<Programs />} />

        <Route path="/servicios-y-proyectos" element={<Projects />} />

        <Route path="/organigrama" element={<Chart />} />

        <Route path="/colaboradores" element={<Slider />} />

        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Main
                onClick={handleToggleMain}
                toggleStatusMain={textIsOpenMain}
              />

              <Features />
              {/* <AboutUs /> */}
              {/* <Job /> */}
              {/* <Slider /> */}
              <Content {...heroOne} />
              <Content {...heroTwo} />
              <Content {...heroThree} />
              <Carousel />
              <PartnertList />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
