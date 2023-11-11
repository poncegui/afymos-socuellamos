import { ApiCarousel, sliderSettings } from "./Carousel.Data";
import {
  Button,
  ButtonContainer,
  CarouselImage,
  ContainerButtonLink,
  ImageWrapper,
  ReviewSlider,
} from "./CarouselStyles";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import React, { useState } from "react";
import { Row, Section, TextWrapper } from "../../../../globalStyles";

import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import TitleSection from "../../../../components/TitleSection";

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
      <TitleSection title="Noticias" inverse />
      <Row justify="center" margin="1rem" wrap="wrap" align="center">
        <ButtonContainer>
          <IconContext.Provider value={{ size: "3rem", color: "#071c2f" }}>
            <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
            <FaArrowCircleRight onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </Row>

      <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {ApiCarousel.map((el, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={el.image} alt={el.alt} />
            <TextWrapper
              size="1.5rem"
              margin="1rem 0 0"
              weight="bold"
              align="center"
            >
              {el.title}
            </TextWrapper>
            <TextWrapper
              size="1.2rem"
              margin="1.5rem"
              color="#4f4f4f"
              align="center"
            >
              {el.description}
            </TextWrapper>
            <ContainerButtonLink>
              <Link to={el.url}>
                <Button>conoce más</Button>
              </Link>
            </ContainerButtonLink>
          </ImageWrapper>
        ))}
      </ReviewSlider>
    </Section>
  );
};

export default Carousel;
