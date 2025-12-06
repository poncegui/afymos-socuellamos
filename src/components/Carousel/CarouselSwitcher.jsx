import React, { useEffect, useState } from "react";

import CarouselDesktop from "./CarouselDesktop";
import CarouselMobile from "./CarouselMobile";
import styled from "styled-components";

const CarouselSwitcher = ({ items }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <HeaderWrapper>
        <StyledHeader>
          <CircleIcon />
          Noticias
        </StyledHeader>
      </HeaderWrapper>

      {isMobile ? (
        <CarouselMobile items={items} withoutHeader={true} />
      ) : (
        <CarouselDesktop items={items} withoutHeader={true} />
      )}
    </>
  );
};

export default CarouselSwitcher;

const HeaderWrapper = styled.div`
  background-color: white;
  padding: 2rem 0 1rem;
`;

const StyledHeader = styled.h2`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2.2rem;
  font-weight: bold;
  color: #071c2f;
  padding: 0 10%;
  text-transform: uppercase;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 0 6%;
  }
`;

const CircleIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #224464;
`;
