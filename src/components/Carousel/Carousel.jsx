import React, { useState } from "react";

import styled from "styled-components";

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };
    const handleNext = () => {
      setCurrentIndex((prev) => Math.min(prev + 1, items.length - 1));
    };
    const translate = -(currentIndex * 100);
    return (
      <CarouselContainer>
        <Title>Nuestro panel de Noticias</Title>
        <CarouselWrapper>
          <ButtonsWrapper>
            <Button onClick={handlePrev} disabled={currentIndex === 0}>
              &#8249;
            </Button>
            <Button onClick={handleNext} disabled={currentIndex === items.length - 1}>
              &#8250;
            </Button>
          </ButtonsWrapper>
          <CarouselContent translate={translate}>
            {items.map((item, index) => (
              <CarouselItem key={index}>
                <img src={item.image} alt={item.title} />
                <div className="icon">▶</div>
                <div className="overlay">{item.title}</div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </CarouselWrapper>
        <Pagination>
          {items.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </Pagination>
      </CarouselContainer>
    );
  };

  export default Carousel;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const CarouselContent = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.translate}%);
  width: fit-content;
`;

const CarouselItem = styled.div`
  position: relative;
  min-width: 80%;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0.5rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    min-width: 60%;
  }

  @media (min-width: 1024px) {
    min-width: 40%;
  }

  img {
    width: 100%;
    height: 100%; /* Ajuste importante */
    object-fit: cover; /* Escalado para evitar deformación */
    display: block;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
    padding: 1rem;
    color: white;
    text-align: left;
    font-size: 1.2rem;
  }

  .icon {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &:disabled {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: not-allowed;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  .dot {
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;

    &.active {
      background-color: #007bff;
    }
  }
`;
