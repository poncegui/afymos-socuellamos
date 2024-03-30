// Carousel.js

import React, { useState } from "react";

import styled from "styled-components";
import tablonCards from "./assets/background-1.jpg";

const Container = styled.div`
  overflow: hidden;
  position: relative;
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const Slide = styled.img`
  width: 100%;
  height: auto;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  ${(props) => (props.right ? "right: 0;" : "left: 0;")}
`;

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <Container>
      <Button onClick={prevSlide}>‹</Button>
      <SlideWrapper
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {tablonCards.map((image, index) => (
          <Slide key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </SlideWrapper>
      <Button right onClick={nextSlide}>
        ›
      </Button>
    </Container>
  );
};

export default Carousel;
