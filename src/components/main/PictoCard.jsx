import React, { useState } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const PictoCard = (props) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <Link onClick={handleClick} to={props.url}>
        <Card>
          <h3>{props.name}</h3>
          <FaceFront>
            <ImgFront src={props.src} alt={props.alt} />
          </FaceFront>
        </Card>
      </Link>
    </>
  );
};
export default PictoCard;

export const Card = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: auto;
  position: relative;
  width: 80%;
  gap: 2rem;
  white-space: nowrap;
`;

export const FaceFront = styled.div`
  backface-visibility: hidden;
  background: #e0e0e0;
  border-radius: 10%;
  box-shadow: 10px 10px 30px #eae4e4, -10px -10px 30px #f5bee3;
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

export const ImgFront = styled.img`
  width: 80%;
  border-radius: 5px;
  object-fit: cover;
`;
