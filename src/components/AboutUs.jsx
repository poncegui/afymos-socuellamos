import React from "react";
import styled from "styled-components";
import SlidesShowAboutUs from "./SlidesShowAboutUs";
import centerAfymos from "../pictogramas/centro-afymos.png";

const AboutUs = (props) => {
  const links = document.querySelectorAll(".links");
  links.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      icon.classNameList.toggle("open");
    });
  });

  return (
    <>
      <Sections className="aboutUs">
        <div className="mainContainerAboutUs">
          <div className="mainContainerAboutUs__wrapPhoto">
            <div className="mainContainerAboutUs__wrapPhoto--photo">
              {/* <img src={children} alt="foto niños afymos" /> */}
              <SlidesShowAboutUs />
            </div>

            {/* <div className="mainContainerAboutUs__wrapPhoto--title">
                            <h4 className="children">entidad</h4>
                        </div> */}
          </div>

          <div className="mainContainerAboutUs__wrapText">
            <div className="mainContainerAboutUs__wrapText--icon">
              {/* <img
                src={centerAfymos}
                className="centro-afymos"
                alt="pictograma-centro"
              ></img> */}
              <div className="container--text">
                <h4>vida en comunidad:</h4>
                <h5>"Integración, inclusión y otra"</h5>
              </div>
            </div>
          </div>
        </div>
      </Sections>
    </>
  );
};

export default AboutUs;

const Sections = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
  }

  @media (min-width: 1090px) {
  }
`;
