import React, { useState } from "react";
import styled from "styled-components";

const PartnersCard = (props) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <a
        onClick={handleClick}
        href={props.url}
        alt={props.alt}
        target={props.target}
      >
        <PartnertCard>
          <PartnertFaceFront>
            <LogoPartner src={props.src} />
          </PartnertFaceFront>
        </PartnertCard>
      </a>
    </>
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
  background: white;
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

export const LogoPartner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: center;
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
  object-fit: center;
`;
