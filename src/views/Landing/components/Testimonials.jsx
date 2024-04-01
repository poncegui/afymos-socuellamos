import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import user1 from "./assets/images-testimonials/rafa.png";
import user2 from "./assets/images-testimonials/quico.png";
import user3 from "./assets/images-testimonials/pedro.png";

const testimoniesData = [
  {
    id: 1,
    name: "Rafa",
    image: user1,
    description:
      "Gracias al trabajo, Rafael adquirió nuevas rutinas, cambiando sus hábitos y asumiendo nuevas responsabilidades, esto le ha permitido cambiar su horizonte vital.",
    occupation: "Trabajador en Destrupapper",
  },
  {
    id: 2,
    name: "Quico",
    image: user2,
    description:
      "Quico, quien tras varios contratos temporales, pasó a ser indefinido. Logró la primera inserción socio-laboral, con la estabilidad que ello suponía para él, abriéndole a su vez la puerta a conseguir otros objetivos para mejorar su calidad de vida, por ejemplo independizarse.",
    occupation: "Trabajador en Cabezuelo Foods",
  },
  {
    id: 3,
    name: "Pedro",
    image: user3,
    description:
      "En la misma línea de trabajo, el objetivo laboral de Pedro es trabajar lijando. Por ello, La empresa Arte Religioso Salmerón, le abrió sus puertas mediante unas prácticas laborales para corroborar si sus habilidades y capacidades eran compatibles con el puesto de trabajo.",
    occupation: "Trabajador en Arte Religioso Salmerón",
  },
];

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
                  <p>{testimonial.description}</p>
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
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  font-size: 24px;

  @media (max-width: 900px) {
    margin-bottom: 50px;
    font-size: 18px;
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

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialsCard = styled.article`
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
  padding: 1rem;
  line-height: 2rem;

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

  p {
    font-size: 1.2rem;
    margin-bottom: 12px;
    font-weight: 500;
  }

  span {
    font-size: 1rem;
    font-weight: 900;
    color: grey;
  }

  @media (max-width: 940px) {
    max-width: 100%;
    margin: 1rem;
  }
`;
