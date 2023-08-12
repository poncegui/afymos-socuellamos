import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>Síguenos en redes sociales</FooterTitle>

      <SocialMediaContainer className="index-footer__contact--socialmedia">
        <Instagram
          href="https://www.instagram.com/afymos/?hl=es"
          alt="Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </Instagram>
        <FaceBook
          href="https://acortar.link/tvNjS0"
          alt="Facebook"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-facebook"></i>
        </FaceBook>
      </SocialMediaContainer>
    </FooterContainer>
  );
};
export default Footer;

export const FooterContainer = styled.div`
  background-color: #071c2f;
  width: 100%;
  color: #ffc0bc;
  line-height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;
FooterContainer.displayName = "FooterContainer";

export const FooterTitle = styled.h2`
  font-weight: bold;
  font-size: 16px;
  line-height: normal;
  text-align: left;
  justify-content: center;
  @media (min-width: 720px) {
    font-size: 24px;
  }
`;
FooterTitle.displayName = "FooterTitle";

export const SocialMediaContainer = styled.div`
  display: flex;
  z-index: 20;
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 50px;
  pointer-events: none;

  @media (min-width: 720px) {
    justify-content: center;
  }
`;
SocialMediaContainer.displayName = "SocialMediaContainer";

export const FaceBook = styled.a`
  padding-top: 10px;
  color: #ffc0bc;
  line-height: normal;
  cursor: pointer;
  pointer-events: all;
  outline: none;
  text-align: center;
  width: 50px;
  height: 100%;
  font-size: 45px;
  margin: 0 20px;

  &:hover {
    margin-top: 0.5rem;
    border-bottom: 5px solid #ffc0bc;
    line-height: 30px;
    transition: all 0.5s ease-out;
  }
`;
FaceBook.displayName = "FaceBook";

export const Instagram = styled(FaceBook)``;
Instagram.displayName = "Instagram";
