import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { ApiCarousel, sliderSettings } from "../Carousel/Carousel.Data";
import { Row, Heading, Section, TextWrapper } from "../../globalStyles";
import {
  ButtonContainer,
  ReviewSlider,
  ImageWrapper,
  CarouselImage,
  CardButton,
} from "./CarouselStyles";

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
      <Row justify="space-between" margin="1rem" wrap="wrap">
        <Heading width="auto" inverse>
          Noticias y eventos
        </Heading>
        <ButtonContainer>
          <IconContext.Provider value={{ size: "3rem", color: "pink" }}>
            <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
            <FaArrowCircleRight onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </Row>

      <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {ApiCarousel.map((el, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={el.image} alt={el.alt} />
            <TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
              {el.title}
            </TextWrapper>
            <TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
              {el.description}
            </TextWrapper>
            <CardButton>conoce más</CardButton>
          </ImageWrapper>
        ))}
      </ReviewSlider>
    </Section>
  );
};

export default Carousel;
