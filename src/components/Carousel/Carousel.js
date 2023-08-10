import { ApiCarousel, sliderSettings } from "../Carousel/Carousel.Data";
import {
  Button,
  ButtonContainer,
  CarouselImage,
  ContainerButtonLink,
  ImageWrapper,
  ReviewSlider,
} from "./CarouselStyles";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Heading, Row, Section, TextWrapper } from "../../globalStyles";
import React, { useState } from "react";

import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const [news, setNews] = useState(ApiCarousel);

  const handleUrl = (ev) => {
    setNews(ev.currentTarget);
  };

  return (
    <Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
      <Row justify="space-between" margin="1rem" wrap="wrap">
        <Heading width="auto" inverse>
          Noticias
        </Heading>
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
            <TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
              {el.title}
            </TextWrapper>
            <TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
              {el.description}
            </TextWrapper>
            <ContainerButtonLink>
              <Link to={el.url}>
                <Button onClick={handleUrl}>conoce más</Button>
              </Link>
            </ContainerButtonLink>
          </ImageWrapper>
        ))}
      </ReviewSlider>
    </Section>
  );
};

export default Carousel;
