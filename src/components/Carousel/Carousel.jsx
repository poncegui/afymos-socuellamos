import React, { useState } from "react";

import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 2rem 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #071c2f;
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const CarouselContent = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translate}%);
`;

const CarouselItem = styled.div`
  min-width: 100%;
  padding: 0 0.5rem;
  box-sizing: border-box;
  flex-shrink: 0;

  @media (min-width: 768px) {
    min-width: 50%;
  }

  @media (min-width: 1024px) {
    min-width: 33.33%;
  }

  .card {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background-color: white;
    position: relative;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.03);
    }

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      display: block;
    }

    .overlay {
      position: absolute;
      bottom: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
      color: white;
      padding: 1rem;
      width: 100%;
      font-size: 1.1rem;
    }
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #071c2f;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background: #0c2a4e;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
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
      background-color: #071c2f;
    }
  }
`;

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = items.length;
  const itemsPerView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const maxIndex = Math.ceil(totalItems / itemsPerView) - 1;

  const translate = -(currentIndex * 100);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  return (
    <CarouselContainer>
      <Title>Noticias</Title>
      <CarouselWrapper>
        <NavButton className="left" onClick={handlePrev} disabled={currentIndex === 0}>
          &#8249;
        </NavButton>
        <CarouselContent translate={translate}>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="card">
                <img src={item.image} alt={item.title} />
                <div className="overlay">{item.title}</div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <NavButton className="right" onClick={handleNext} disabled={currentIndex === maxIndex}>
          &#8250;
        </NavButton>
      </CarouselWrapper>
      <Pagination>
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
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
