import "../components/Footer/styles/Footer.css";

import React from "react";
import styled from "styled-components";

const TitleSection = ({ title, size, inverse, marginBottom, display }) => {
  return (
    <>
      {/* <TitleSection> */}
      <TitleSectionContainer
        size={size}
        inverse={inverse}
        marginBottom={marginBottom}
      >
        <h2>{title}</h2>
      </TitleSectionContainer>
      {/* <SocialLinks display={display}>
          <a
            href="https://www.facebook.com/profile.php?id=100067093413028"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/tv/CKKQgBcIW_Z/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </SocialLinks> */}
      {/* </TitleSection> */}
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
`;

const SocialLinks = styled.div`
  display: ${({ display }) => (display ? "flex" : "none")};
`;
