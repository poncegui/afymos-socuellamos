import React from "react";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>noticias generales</h2>
      </div>
<Carousel
plugins={['arrows','infinite','autoplay']}
slides={Slides}




/>
 
    </div>
  );
};

export default Slider;
