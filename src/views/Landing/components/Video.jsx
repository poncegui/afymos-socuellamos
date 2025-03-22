import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Video = ({
  videoSrc,
  urlMoreInformation,
  title,
  subtitle,
  description,
  backgroundWhite = false,
}) => {
  return (
    <SectionWrapper backgroundWhite={backgroundWhite}>
      <ContentWrapper>
        <VideoWrapper>
          <iframe
            src={videoSrc}
            title={`Video de ${title}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </VideoWrapper>

        <TextWrapper>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{description}</p>

          {urlMoreInformation && (
            <StyledLink to={urlMoreInformation} aria-label={`Leer más sobre ${title}`}>
              Leer más <FontAwesomeIcon icon={faPlus} />
            </StyledLink>
          )}
        </TextWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default Video;

const SectionWrapper = styled.section`
  padding: 4rem 1rem;
  background-color: ${(props) => (props.backgroundWhite ? "white" : "#e8e0ec")};
  ${(props) =>
    props.backgroundWhite &&
    `
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 3rem;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const VideoWrapper = styled.div`
  flex: 1;

  iframe {
    width: 100%;
    height: 300px;
    border-radius: 12px;

    @media (max-width: 600px) {
      height: 200px;
    }
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  color: #071c2f;

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.4rem;
    font-style: italic;
    margin-bottom: 1rem;
    color: #555;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 600px) {
      margin-left: 2rem;
      margin-right: 2rem;
    }
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  color: #224464;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    border-bottom: 2px solid #224464;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
    }
`;
