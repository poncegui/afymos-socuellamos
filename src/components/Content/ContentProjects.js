import { Container, SectionProjects } from "../../globalStyles";

import styled from "styled-components";

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
    <StyledSection
      id={id}
      $inverse={inverse}
      role="region"
      aria-labelledby={`${id}-heading`}
    >
      <Container>
        <ContentRow $reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine>{topLine.text}</TopLine>
              <Heading id={`${id}-heading`} $inverse={inverse}>
                {headline}
              </Heading>
              <Subtitle $inverse={inverse}>{description}</Subtitle>
            </TextWrapper>
          </ContentColumn>

          <ContentColumn>
            <ImgWrapper>
              <StyledImg src={img} alt={alt} loading="lazy" />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </StyledSection>
  );
};

// Estilos

const StyledSection = styled(SectionProjects)`
  padding: 5rem 0;
  background-color: ${({ $inverse }) => ($inverse ? "#f5f2f6" : "#eae4ec")};
  transition: background-color 0.3s ease;
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ContentColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

const TextWrapper = styled.div`
  padding: 1rem;

  @media (max-width: 768px) {
    padding-bottom: 2rem;
  }
`;

const TopLine = styled.div`
  font-size: 1.4rem;
  color: #444;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const Heading = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 1.5rem;
  color: ${({ $inverse }) => ($inverse ? "#071c2f" : "#071c2f")};
`;

const Subtitle = styled.p`
  font-size: 1.6rem;
  line-height: 1.8;
  color: ${({ $inverse }) => ($inverse ? "#444" : "#444")};
  font-weight: 500;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImg = styled.img`
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;
