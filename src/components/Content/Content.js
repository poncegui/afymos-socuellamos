import { Container, Section } from "../../globalStyles";
import React, { useState } from "react";
import {
  ContentButton,
  ContentColumn,
  ContentRow,
  Heading,
  HomePage,
  Img,
  ImgWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./ContentStyles.js";

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
}) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Section inverse={inverse}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine>{topLine.text}</TopLine>
              <Heading inverse={inverse}>{headline}</Heading>
              <Subtitle inverse={inverse}>{description}</Subtitle>
              <ContentButton
                transition={{ delay: 1, duration: 0.6 }}
                inverse={inverse}
              >
                <HomePage
                  onClick={handleClick}
                  href={href}
                  alt={alt}
                  target={target}
                >
                  {buttonLabel}
                </HomePage>
                {/* <Link onClick={handleClick}  to={linkTo}/> */}
              </ContentButton>
            </TextWrapper>
          </ContentColumn>
          <ContentColumn>
            <ImgWrapper>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
};
