import "../components/Footer/styles/Footer.css";

import React from "react";
import styled from "styled-components";

const TitleSection = ({ title, size, inverse, marginBottom }) => {
  return (
    <>
      <TitleSectionContainer
        size={size}
        inverse={inverse}
        marginBottom={marginBottom}
      >
        <h2>{title}</h2>
      </TitleSectionContainer>
    </>
  );
};
export default TitleSection;

const TitleSectionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 7rem;
  background: ${({ inverse }) => (inverse ? "#071c2f" : "#FFC0BC")};
  text-align: center;
  align-items: center;
  line-height: 1.5rem;
  font-size: ${({ size }) => (size ? "1.8rem" : "1.5rem")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? "2rem" : "")};

  h2 {
    width: 100%;
    position: relative;
    color: ${({ inverse }) => (inverse ? "#FFC0BC" : "#071c2f")};
  }

  @media (max-width: 440px) {
    font-size: ${({ size }) => (size ? "1.2rem" : "1.5rem")};
    line-height: 2.5rem;
  }
`;
