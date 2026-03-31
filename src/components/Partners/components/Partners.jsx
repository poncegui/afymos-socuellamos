import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const PartnersCard = ({ url, alt, target, src, title }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  // Best-effort WebP path next to original filename
  const fileName = src.split("/").pop().split(".")[0];
  const webpPath = `/images/partners/${fileName}.webp`;

  return (
    <Anchor
      href={url}
      onClick={handleClick}
      target={target}
      rel="noopener noreferrer"
      aria-label={`Ir a la web del colaborador: ${title}`}
    >
      <PartnertCard>
        <PartnertFaceFront>
          <picture>
            <source srcSet={webpPath} type="image/partners/webp" />
            <LogoPartner src={src} alt={alt} title={title} loading="lazy" />
          </picture>
        </PartnertFaceFront>
      </PartnertCard>

      <Meta>
        <PartnerCaption aria-hidden="false">{title}</PartnerCaption>
        <Icon aria-hidden="true">
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </Icon>
      </Meta>
    </Anchor>
  );
};

export default PartnersCard;

export const PartnertCard = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: auto;
  position: relative;
  width: 50%;
  gap: 2rem;
  white-space: nowrap;
`;

export const PartnertFaceFront = styled.div`
  background: transparent;
  height: 100%;
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 0.4rem;
`;

export const LogoPartner = styled.img`
  width: auto;
  max-width: 100%;
  height: 60px;
  object-fit: contain;
`;

const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  background: linear-gradient(180deg, #ffffff 0%, #f7f8fb 100%);
  padding: 1rem;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 12px rgba(7, 28, 47, 0.06);
  transition: transform 220ms ease, box-shadow 220ms ease;
  position: relative;

  &:hover,
  &:focus-visible {
    transform: translateY(-6px);
    box-shadow: 0 18px 40px rgba(7, 28, 47, 0.12);
  }

  &:focus-visible {
    outline: 3px solid rgba(255, 191, 71, 0.18);
    outline-offset: 3px;
  }

  img {
    filter: grayscale(100%);
    transition: filter 220ms ease, transform 220ms ease;
  }

  &:hover img,
  &:focus img {
    filter: none;
    transform: scale(1.02);
  }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
`;

const PartnerCaption = styled.span`
  font-size: 0.9rem;
  color: #071c2f;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Icon = styled.span`
  color: #6b6f76;
  font-size: 0.9rem;
`;

export const Card = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: auto;
  position: relative;
  width: 80%;
  gap: 1rem;
  white-space: nowrap;
`;

export const FaceFront = styled.div`
  backface-visibility: hidden;
  background: #e0e0e0;
  border-radius: 10%;
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

export const ImgFront = styled.img`
  width: 100%;
  object-fit: contain;
`;
