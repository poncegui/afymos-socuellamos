import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const target = "_blank";
const rel = "fa-brands fa-facebook";

const facebook = "fa-brands fa-facebook";

const ProfileChart = (props) => {
  return (
    <>
      <Card
        class="card"
        onClick={(e) => {
          e.currentTarget();
          console.log("The link was clicked.");
        }}
      >
        <FaceFront class="face front">
          <ImgFront src={props.src} alt={props.alt} />
          <FaceFrontPosition>{props.position}</FaceFrontPosition>
        </FaceFront>
        <FaceBack class="face back">
          <TitleBackName>{props.name}</TitleBackName>
          {/* <img src={props.src} alt=""/> */}
          <FaceBackProfession>{props.profession}</FaceBackProfession>
          <ContainerSocial class="link">
            <Link
              to={props.href}
              alt={props.Facebook}
              target={target}
              rel={rel}
            >
              <i className={facebook}></i>
            </Link>
          </ContainerSocial>
        </FaceBack>
      </Card>
    </>
  );
};

export default ProfileChart;

export const Card = styled.div`
  display: flex;
  position: relative;
  width: 300px;
  height: 350px;
  margin: 20px;
`;

export const FaceFront = styled.div`
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 10px #000;
  height: 100%;
  overflow: hidden;
  position: absolute;
  transform: perspective(600px) rotateY(0deg);
  transition: 0.5s;
  width: 100%;

  :hover {
    transform: perspective(600px) rotateY(180deg);
  }
`;

export const ImgFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FaceBack = styled.div`
  background: black;
  box-shadow: 0 5px 10px #000;
  color: pink;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  text-align: center;
  transform: perspective(600px) rotateY(180deg);

  :hover {
    transform: perspective(600px) rotateY(180deg);
  }
`;

export const TitleBackName = styled.div`
  font-size: 30px;
  margin-top: 20px;
  letter-spacing: 2px;
`;

export const ContainerSocial = styled.div`
  border-top: solid 1px #f3f3f3;
  height: 50px;
  line-height: 50px;
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
