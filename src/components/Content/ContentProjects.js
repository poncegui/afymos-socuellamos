import { Container, SectionProjects } from "../../globalStyles";
import {
  ContentColumn,
  ContentRow,
  Heading,
  Img,
  ImgWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./ContentStyles.js";

export const ContentProjects = ({
  topLine,
  headline,
  description,
  img,
  alt,
  reverse,
  inverse,
  id,
}) => {
  return (
    <SectionProjects id={id} inverse={inverse}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine>{topLine.text}</TopLine>
              <Heading inverse={inverse}>{headline}</Heading>
              <Subtitle inverse={inverse}>{description}</Subtitle>
            </TextWrapper>
          </ContentColumn>
          <ContentColumn>
            <ImgWrapper>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </SectionProjects>
  );
};
