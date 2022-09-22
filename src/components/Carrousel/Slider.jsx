import React from "react";
import Carousel from "@brainhubeu/react-carousel";
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
        plugins={['arrows','infinite']}
        slides={Slides}
        slidesPerPage={3}
        // animationSpeed={200}
        // offset={50}
        // itemWidth={400}
     
        
      />
    </div>
  );
};

export default Slider;
