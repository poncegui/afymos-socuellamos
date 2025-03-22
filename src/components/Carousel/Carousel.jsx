import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const SectionHeader = styled.div`
  width: 100%;
  background-color: #071c2f;
  color: white;
  padding: 1.5rem;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const CarouselContainer = styled.section`
  width: 100%;
  padding: 3rem 0;
  position: relative;
  background: linear-gradient(135deg, #c6b1c9 0%, #ffffff 100%);
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
  background-repeat: repeat;
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const CarouselContent = styled.div`
  display: flex;
  transition: transform 1.2s ease-in-out;
  transform: translateX(${(props) => props.translate}%);
  touch-action: pan-y;
`;

const CarouselItem = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  padding: 1rem;

  @media (min-width: 768px) {
    min-width: 50%;
  }

  @media (min-width: 1024px) {
    min-width: 33.33%;
  }

  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    background-color: white;
    transition: transform 0.4s ease;

    &:hover {
      transform: scale(1.02);
    }

    img {
      width: 100%;
      height: 280px;
      object-fit: cover;
    }

    .card-content {
      flex: 1;
      padding: 1.5rem;

      h3 {
        font-size: 1.25rem;
        margin-bottom: 0.75rem;
        color: #071c2f;
      }

      p {
        font-size: 1.05rem;
        color: #444;
        margin-bottom: 1rem;
      }

      a {
        display: inline-block;
        text-decoration: none;
        color: white;
        background-color: #071c2f;
        padding: 0.75rem 1.25rem;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;

        &:hover {
          background-color: #0c2a4e;
        }

        &:focus-visible {
          outline: 3px solid #ffbf47;
        }
      }
    }
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  color: #071c2f;
  border: none;
  padding: 1.2rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  font-size: 2rem;
  line-height: 1;
  transition: background 0.3s ease;

  &:hover {
    background: #f0f0f0;
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
  margin-top: 1.5rem;

  .dot {
    width: 12px;
    height: 12px;
    margin: 0 6px;
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;

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

  const startX = useRef(null);
  const endX = useRef(null);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current !== null && endX.current !== null) {
      const distance = startX.current - endX.current;
      if (distance > 50) handleNext();
      else if (distance < -50) handlePrev();
    }
    startX.current = null;
    endX.current = null;
  };

  return (
    <>
      <SectionHeader>Noticias</SectionHeader>
      <CarouselContainer role="region" aria-label="Carrusel de noticias destacadas">
        <CarouselWrapper>
          <NavButton
            className="left"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Anterior"
          >
            &#8249;
          </NavButton>

          <CarouselContent
            translate={translate}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {items.map((item, index) => (
              <CarouselItem key={index}>
                <div className="card">
                  <img src={item.image} alt={item.alt || item.title} />
                  <div className="card-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.link && <Link to={item.link}>Leer más</Link>}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <NavButton
            className="right"
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            aria-label="Siguiente"
          >
            &#8250;
          </NavButton>
        </CarouselWrapper>

        <Pagination>
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              role="button"
              aria-label={`Ir a la página ${index + 1}`}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setCurrentIndex(index)}
            ></div>
          ))}
        </Pagination>
      </CarouselContainer>
    </>
  );
};

export default Carousel;
