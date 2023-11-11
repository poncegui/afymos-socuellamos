import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderDisplay.css";

import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import React from "react";
import Slider from "react-slick";
import TitleSection from "../../../../components/TitleSection";
import Ucard from "./Ucard";
import styled from "styled-components";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next" onClick={onClick}>
        <FaChevronCircleRight
          aria-label="next-picture"
          focusable
          size={30}
          color="white"
        />
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev" onClick={onClick}>
        <FaChevronCircleLeft
          aria-label="previous-picture"
          size={30}
          color="white"
        />
      </button>
    </div>
  );
};
const SliderDisplay = ({ slides, title, id, items, alt, buttons }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slides,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    speed: 2300,
    autoplaySpeed: 2300,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 867,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <SliderDisplaySection>
        <TitleSection title="Somos Campeones" inverse />
        <SliderDisplayContainer>
          <div className="heading flexSB"></div>
          <div className="content">
            <Slider {...settings}>
              {items.map((item) => {
                return (
                  <>
                    <Ucard key={item.id} item={item} alt={item.alt} />
                  </>
                );
              })}
            </Slider>
          </div>
        </SliderDisplayContainer>
      </SliderDisplaySection>
    </>
  );
};

export default SliderDisplay;

const SliderDisplaySection = styled.section`
  margin: 10% auto;
  background-color: #ffc0bc;
`;

const SliderDisplayContainer = styled.div`
  max-width: 90%;
  margin: 5% auto;
`;
