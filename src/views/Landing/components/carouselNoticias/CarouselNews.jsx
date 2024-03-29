import "./CarouselNews.css"; // Archivo CSS para estilos personalizados
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselNews.css";

import { ApiCarousel } from "./CarouselData";
import React from "react";
import Slider from "react-slick";
import TitleSection from "../../../../components/TitleSection";

const SlideNews = ({ image, title, description }) => (
  <div className="slide">
    <img src={image} alt={title} />
    <div className="slide-content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

const CarouselNews = ({ slides }) => {
  const settingsNews = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <TitleSection title="Hoy es noticia" marginBottom />
      <div className="custom-slider">
        <Slider {...settingsNews}>
          {ApiCarousel.map((slide, index) => (
            <SlideNews key={index} {...slide} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CarouselNews;
