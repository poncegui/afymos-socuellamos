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

export const Content = ({
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  reverse,
}) => {
  return (
    <Section>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine>{topLine.text}</TopLine>
              <Heading>{headline}</Heading>
              <Subtitle>{description}</Subtitle>
              <ContentButton>{buttonLabel}</ContentButton>
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
