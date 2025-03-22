import { Container, Section, Title } from "../../globalStyles";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export const Content = ({
  alt,
  buttonLabel,
  description,
  headline,
  href,
  img,
  inverse,
  reverse,
  target,
  topLine,
  title,
  id,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Section id={id} inverse={inverse} aria-labelledby={`section-${id}`} role="region">
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <Title id={`section-${id}`}>{title}</Title>
              <TopLine as="p">{topLine.text}</TopLine>
              <Heading inverse={inverse} as="h3">{headline}</Heading>
              <Subtitle inverse={inverse} as="p">{description}</Subtitle>

              {href && (
                <HomePage
                  href={href}
                  aria-label={buttonLabel}
                  target={target}
                  rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{
                      color: inverse ? "#000" : "#fff",
                      transform: hovered ? "rotate(90deg)" : "rotate(0deg)",
                      fontSize: "40px",
                      transition: "transform 0.5s ease-in-out",
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onTouchStart={() => setHovered(true)}
                    onTouchEnd={() => setHovered(false)}
                    role="img"
                    aria-hidden={!buttonLabel}
                  />
                </HomePage>
              )}
            </TextWrapper>
          </ContentColumn>

          <ContentColumn>
            <ImgWrapper>
              <img
                src={img}
                alt={alt}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
};

// Estilos embebidos
const ContentRow = styled.div`
  display: flex;
  margin: 0 -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const ContentColumn = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  flex: 1;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextWrapper = styled.div`
  max-width: 540px;

  @media (max-width: 768px) {
    padding-bottom: 65px;
    text-align: center;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const TopLine = styled.div`
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 550;
  letter-spacing: 1.4px;
  margin-bottom: 1.3rem;
  color: grey;
`;

const Heading = styled.h2`
  margin-bottom: 24px;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ inverse }) => (inverse ? "#071c2f" : "#c6b1c9")};
`;

const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  line-height: 24px;
  font-size: 1.6rem;
  color: ${({ inverse }) => (inverse ? "#6a6a6a" : "#c6b1c9")};
`;

const HomePage = styled.a`
  text-decoration: none;
  color: grey;
  display: inline-block;
`;
