import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Video = ({
  videoSrc,
  Maintitle,
  title,
  subtile,
  text,
  urlMoreInformation,
  sectionTitle,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <Margin />
      <section>
        <Title>
          <CircleIcon />
          {sectionTitle}
        </Title>
        <DemoContainer>
          <DemoRight>
            <iframe
              width="570"
              height="320"
              src={videoSrc}
              title="Youtube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              aria-label={`Ver vídeo ${Maintitle}`}
            />
          </DemoRight>
          <DemoLeft>
            <p>{title}</p>
            <p>{subtile}</p>
            <p>{text}</p>
            <Link
              onClick={handleClick}
              to={urlMoreInformation}
              aria-label={`go to more information  ${Maintitle}`}
            >
              <PlusIcon icon={faPlus} alt="more information icon" />
            </Link>
          </DemoLeft>
        </DemoContainer>
      </section>
      <Margin />
    </>
  );
};

export default Video;

const DemoContainer = styled.div`
  width: 1240px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 940px) {
    max-width: 100%;
    grid-template-columns: 1fr;
    grid-gap: 2rem;

    iframe {
      width: 100%;
      height: auto;
    }
  }
`;

const Title = styled.h2`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  font-size: 24px;
  text-decoration: none;
  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

const Margin = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  @media (max-width: 900px) {
    height: 30px;
  }
`;

const CircleIcon = styled.div`
  position: absolute;
  top: 50%;
  left: -30px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #224464;
`;

const DemoLeft = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-right: 100px;

  p:nth-child(1) {
    margin-top: 7%;
    font-size: 2rem;
    font-style: italic;
    color: #071c2f;
  }
  p:nth-child(2) {
    font-size: 3rem;
    font-weight: 600;
    margin: 0.5rem 0;
    color: #071c2f;
  }
  p:nth-child(3) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: #071c2f;
  }
`;

const DemoRight = styled.div`
  margin: auto;
  margin: 7% 0;
`;

const PlusIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: #224464;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(90deg);
  }
`;
