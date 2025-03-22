import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { testimoniesData } from "./services/testimonialsData";

const Testimonials = () => {
  return (
    <>
      <Margin />
      <Main id="testimonios">
        <TestimonialsContainer>
          <Title>
            <CircleIcon icon={faSquare} size={15} color="#c6b1c9" />
            Testimonios reales...
          </Title>
          <TestimonialsContent aria-label="Testimonios">
            {testimoniesData.map((testimonial) => (
              <TestimonialsCard key={testimonial.id}>
                <img
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                />
                <div>
                  <h2>{testimonial.description}</h2>
                  <span>{testimonial.name}</span>
                  <p>{testimonial.occupation}</p>
                </div>
              </TestimonialsCard>
            ))}
          </TestimonialsContent>
        </TestimonialsContainer>
      </Main>
    </>
  );
};

export default Testimonials;

const Margin = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  @media (max-width: 900px) {
    height: 30px;
  }
`;

const Title = styled.h2`
  margin-left: 20px;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  font-size: 28px;
  color: #071c2f;

  @media (max-width: 900px) {
    margin-bottom: 50px;
    font-size: 22px;
  }
`;

const CircleIcon = styled(FontAwesomeIcon)`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  margin-right: 10px;
`;

const Main = styled.main`
  width: 100%;
  background-color: white;
`;

const TestimonialsContainer = styled.div`
  padding: 5%;
  text-align: center;
`;

const TestimonialsContent = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 4rem 0;
  justify-content: center;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialsCard = styled.article`
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding: 1.5rem;
  line-height: 2rem;
  text-align: left;
  background-color: #fff;
  color: #071c2f;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    display: block;
  }

  div {
    padding: 0 1rem;
  }

  h2 {
    font-size: 1.2rem;
    margin: 20px 0;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
  }

  span {
    font-size: 1.1rem;
    font-weight: 700;
    color: #224464;
  }

  @media (max-width: 940px) {
    max-width: 100%;
    margin: 1rem;
    padding: 1rem;
  }
`;
