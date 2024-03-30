import React from "react";
import styled from "styled-components";

const ProfileChart = (props) => {

  return (
    <>
        <Card>
          <FaceFront key={props.id}>
            <ImgFront
              src={props.img}
              alt={props.alt}
            />
            <h3>{props.role}</h3>
          </FaceFront>
        </Card>
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

