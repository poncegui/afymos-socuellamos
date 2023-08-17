import React, { useState } from "react";

import styled from "styled-components";

const ProfileChart = (props) => {
  const [faceCard, setFaceCard] = useState(true);

  const handleClick = () => {
    setFaceCard(!faceCard);
  };
  return (
    <>
      {faceCard ? (
        <Card>
          <FaceFront key={props.id}>
            <ImgFront
              src={props.img}
              alt={props.alt}
              onMouseEnter={handleClick}
            />
            <h3>{props.role}</h3>
          </FaceFront>
        </Card>
      ) : (
        <Card>
          <FaceBack key={props.id} onMouseLeave={handleClick}>
            <TitleBackName>{props.name}</TitleBackName>
            <FaceBackProfession>{props.profession}</FaceBackProfession>
          </FaceBack>
        </Card>
      )}
    </>
  );
};

export default ProfileChart;

export const Card = styled.div`
  display: flex;
  position: relative;
  width: 15rem;
  height: 20rem;
  margin: auto;
  justify-content: center;
  gap: 2rem;
  cursor: pointer;

  @media (max-width: 440px) {
    width: 9rem;
    height: 10rem;
  }
`;

export const FaceFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.5s;
`;

export const ImgFront = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 400ms ease-out;
  will-change: transform;
`;

export const FaceBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ffc0bc;
  color: #071c2f;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  gap: 30%;
  padding: 15px;
  text-align: center;
`;

export const TitleBackName = styled.div`
  font-size: 1.5rem;
  margin-top: 20px;
  letter-spacing: 2px;
`;

export const FaceFrontPosition = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 45px;
  line-height: 45px;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  text-align: center;
`;

export const FaceBackProfession = styled.div`
  border-radius: 10px;
  letter-spacing: 1px;
  font-size: 1rem;
`;

export const ImgBack = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
