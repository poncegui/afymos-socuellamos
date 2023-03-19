import React from "react";
import "./Slider.css";

import loteria from "../../images-news/loteria.jpg.png";
import afymos from "../../images-news/un-dia-afymos.jpg";
import proyecto from "../../images-news/proyecto-crea.png";

const slidesInfo = [
  {
    src: loteria,
    alt: "loteria navidad 2022",
    desc: "loteria navidad 2022",
  },
  {
    src: afymos,
    alt: "un día en afymos",
    desc: "un día en afymos",
  },
  {
    src: proyecto,
    alt: "Project 3",
    desc: "inauguracion proyecto CREA - abril 2022",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
