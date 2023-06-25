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
            <ImgFront src={props.img} alt={props.alt} onClick={handleClick} />
            <h3>{props.role}</h3>
          </FaceFront>
        </Card>
      ) : (
        <Card>
          <FaceBack key={props.id} onClick={handleClick}>
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
  width: 250px;
  height: 300px;
  margin: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 180px;
    height: 220px;
    margin: 10px;
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
  background: black;
  box-shadow: 0 5px 10px #000;
  color: #ffc0bc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  text-align: center;
`;

export const TitleBackName = styled.div`
  font-size: 30px;
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
  letter-spacing: 1px;
`;

export const ImgBack = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
