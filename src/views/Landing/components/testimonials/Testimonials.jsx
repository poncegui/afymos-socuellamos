import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { testimoniesData } from './services/testimonialsData';

const Testimonials = () => {
  return (
    <>
      <Main id="testimonios">
        <TestimonialsContainer>
          <HeaderSection>
            <TitleWrapper>
              <QuoteIcon icon={faQuoteLeft} />
              <Title>Testimonios reales</Title>
            </TitleWrapper>
            <Subtitle>Historias de vida y transformación</Subtitle>
          </HeaderSection>

          <TestimonialsContent aria-label="Testimonios">
            {testimoniesData.map(testimonial => (
              <TestimonialsCard key={testimonial.id}>
                <CardInner>
                  <ImageWrapper>
                    <Avatar
                      src={testimonial.image}
                      alt={`Foto de ${testimonial.name}`}
                    />
                    <AvatarBorder />
                  </ImageWrapper>

                  <QuoteMarkTop icon={faQuoteLeft} />

                  <Description>{testimonial.description}</Description>

                  <InfoSection>
                    <PersonName>{testimonial.name}</PersonName>
                    <PersonOccupation>
                      {testimonial.occupation}
                    </PersonOccupation>
                  </InfoSection>

                  <DecorativeLine />
                </CardInner>
              </TestimonialsCard>
            ))}
          </TestimonialsContent>
        </TestimonialsContainer>
      </Main>
    </>
  );
};

export default Testimonials;

const Main = styled.main`
  width: 100%;
  background: linear-gradient(135deg, #f8f9fa 0%, #f0f2f5 100%);
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(198, 177, 201, 0.08) 0%,
      transparent 70%
    );
    border-radius: 50%;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -15%;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(198, 177, 201, 0.06) 0%,
      transparent 70%
    );
    border-radius: 50%;
    pointer-events: none;
  }

  @media (max-width: 900px) {
    padding: 4rem 1rem;
  }
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const QuoteIcon = styled(FontAwesomeIcon)`
  font-size: calc(3rem * var(--fs, 1));
  color: #c6b1c9;
  opacity: 0.3;
`;

const Title = styled.h2`
  font-size: calc(2.8rem * var(--fs, 1));
  color: #071c2f;
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.5px;

  @media (max-width: 900px) {
    font-size: calc(2rem * var(--fs, 1));
  }

  @media (max-width: 600px) {
    font-size: calc(1.6rem * var(--fs, 1));
  }
`;

const Subtitle = styled.p`
  font-size: calc(1.1rem * var(--fs, 1));
  color: #666;
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 900px) {
    font-size: calc(1rem * var(--fs, 1));
  }
`;

const TestimonialsContent = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin: 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TestimonialsCard = styled.article`
  perspective: 1000px;
  height: 100%;
`;

const CardInner = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #fafbfc 100%);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  height: 100%;
  position: relative;
  border: 1px solid rgba(198, 177, 201, 0.15);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${TestimonialsCard}:hover & {
    transform: translateY(-8px);
    box-shadow: 0 25px 60px rgba(198, 177, 201, 0.15);
    border-color: rgba(198, 177, 201, 0.3);
    background: linear-gradient(135deg, #ffffff 0%, #f3f0f7 100%);
  }

  @media (max-width: 600px) {
    padding: 2rem 1.5rem;
    border-radius: 12px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 8px 24px rgba(198, 177, 201, 0.3);
  transition: transform 0.3s ease;

  ${TestimonialsCard}:hover & {
    transform: scale(1.05);
  }
`;

const AvatarBorder = styled.div`
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 50%;
  background: linear-gradient(135deg, #c6b1c9 0%, #a78db5 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;

  ${TestimonialsCard}:hover & {
    opacity: 1;
  }
`;

const QuoteMarkTop = styled(FontAwesomeIcon)`
  font-size: calc(2.5rem * var(--fs, 1));
  color: #c6b1c9;
  opacity: 0.15;
  margin-left: -0.5rem;
`;

const Description = styled.p`
  font-size: calc(1.05rem * var(--fs, 1));
  line-height: 1.7;
  color: #444;
  margin: 0;
  font-weight: 400;
  text-align: center;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
`;

const PersonName = styled.h3`
  font-size: calc(1.3rem * var(--fs, 1));
  font-weight: 700;
  color: #c6b1c9;
  margin: 0;
  letter-spacing: 0.5px;
`;

const PersonOccupation = styled.span`
  font-size: calc(0.95rem * var(--fs, 1));
  color: #888;
  font-weight: 500;
  margin: 0;
  display: block;
  position: relative;

  &::before {
    content: '→';
    margin-right: 0.5rem;
    color: #c6b1c9;
    opacity: 0.6;
  }
`;

const DecorativeLine = styled.div`
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    #c6b1c9 50%,
    transparent 100%
  );
  width: 60%;
  margin: 0 auto;
  opacity: 0.3;
`;
