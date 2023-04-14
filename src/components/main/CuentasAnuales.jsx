import { React } from "react";

import NavBarTemplate from "../templates/NavBarTemplate";
import Footer from "../Footer";

import PartnersList from "../main/PartnerList";

import { Container, Section } from "../../globalStyles";
import {
  ContentRow,
  TextWrapper,
  TopLine,
  Heading,
  ContentButton,
  Subtitle,
  ImgWrapper,
  Img,
  ContentColumn,
} from "./ContentStyles.js";

export const Cuentas = ({
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  reverse,
  inverse,
}) => {
  return (
    <>
      <NavBarTemplate title="Cuentas Anuales" />
      <Section inverse={inverse}>
        <Container>
          <ContentRow reverse={reverse}>
            <ContentColumn>
              <TextWrapper>
                <TopLine>{"Cuentas Anuales"}</TopLine>
                <Heading inverse={inverse}>{headline}</Heading>
                <Subtitle inverse={inverse}>{description}</Subtitle>
                <ContentButton
                  transition={{ delay: 1, duration: 0.6 }}
                  inverse={inverse}
                >
                  {buttonLabel}
                </ContentButton>
                <ContentButton
                  transition={{ delay: 1, duration: 0.6 }}
                  inverse={inverse}
                >
                  {buttonLabel}
                </ContentButton>
                <ContentButton
                  transition={{ delay: 1, duration: 0.6 }}
                  inverse={inverse}
                >
                  {buttonLabel}
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
      <PartnersList />
      <Footer />
    </>
  );
};
