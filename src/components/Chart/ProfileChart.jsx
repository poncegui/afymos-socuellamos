import React, { useState } from "react";
import styled from "styled-components";

const target = "_blank";
const rel = "fa-brands fa-facebook";

const facebook = "fa-brands fa-facebook";

const ProfileChart = (props) => {
  const [faceCard, setFaceCard] = useState(true);
  return (
    <>
      {faceCard ? (
        <Card>
          <FaceFront>
            <ImgFront src={props.img} alt={props.alt} />
            <h3>{props.role}</h3>
          </FaceFront>
        </Card>
      ) : (
        <Card>
          <FaceBack>
            <TitleBackName>{props.name}</TitleBackName>
            {/* <img src={props.src} alt=""/> */}
            <FaceBackProfession>{props.profession}</FaceBackProfession>
            {/* <ContainerSocial class="link">
            <Link
              href={props.href}
              alt={props.Facebook}
              target={target}
              rel={rel}
            >
              <i className={facebook}></i>
            </Link>
          </ContainerSocial> */}
          </FaceBack>
        </Card>
      )}
    </>
  );
};

export default ProfileChart;

export const Card = styled.div`
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  height: 250px;
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
`;

export const ImgFront = styled.div`
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
