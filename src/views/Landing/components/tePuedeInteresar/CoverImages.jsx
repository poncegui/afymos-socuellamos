import React, { useEffect, useState } from "react";

import { coverData } from "./services/CoverData";
import styled from "styled-components";

const CoverContainer = styled.header`
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  @media (max-width: 900px) {
    display: none;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, #ffbf00, #ffdf00);
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.5s ease;
  img {
    opacity: 5;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  bottom: 0%;
  right: 0%;
  color: white;
  font-size: 2rem;
  text-align: center;
  width: 80%;
  max-width: 600px;
  padding: 1rem 2rem;
  background-color: #224464;
`;

const CoverImages = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % coverData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CoverContainer>
      {coverData.map((image, idx) => (
        <BackgroundImage key={idx} isActive={idx === index}>
          <img loading="lazy" src={image.src} alt={image.alt} />
        </BackgroundImage>
      ))}
      <TitleContainer>{coverData[index].name}</TitleContainer>
    </CoverContainer>
  );
};

export default CoverImages;
