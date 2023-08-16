import React from "react";
import TitleSection from "./templates/TitleSection";
import styled from "styled-components";
import user1 from "../assets/images-testimonials/rafa.png";
import user2 from "../assets/images-testimonials/quico.png";
import user3 from "../assets/images-testimonials/pedro.png";

const Testimonials = () => {
  return (
    <TestimonialsSection id="testimonios">
      <TestimonialsContainer>
        <TitleSection title="Historias reales" inverse />
        <TestimonialsContent>
          <TestimonialsCard>
            <img src={user1} alt="rafa" />
            <p>
              Gracias al trabajo, Rafael ha adquirido nuevas rutinas, ha
              cambiado sus hábitos, ha asumido nuevas responsabilidades que le
              han permitido cambia su horizonte vital.
            </p>
            <p>
              <span>Rafa</span>
            </p>
            <p>Trabajador en Destrupapper</p>
          </TestimonialsCard>
          <TestimonialsCard>
            <img src={user2} alt="quico" />
            <p>
              Quico, quien tras varios contratos temporales, pasó a ser
              indefinido. Logró la primera inserción socio-laboral, con la
              estabilidad que ello suponía para él, abriéndole a su vez la
              puerta a conseguir otros objetivos para mejorar su calidad de
              vida, por ejemplo independizarse.
            </p>
            <p>
              <span>Quico</span>
            </p>
            <p>Trabajador en Inkiele</p>
          </TestimonialsCard>
          <TestimonialsCard>
            <img src={user3} alt="pedro" />
            <p>
              En la misma línea de trabajo, el objetivo laboral de Pedro es
              trabajar lijando. Por ello, La empresa Arte Religioso Salmerón, le
              abrió sus puertas mediante unas prácticas laborales para
              corroborar si sus habilidades y capacidades eran compatibles con
              el puesto de trabajo.
            </p>
            <p>
              <span>Tomás</span>
            </p>
            <p>Trabajador en Arte Religioso Salmerón</p>
          </TestimonialsCard>
        </TestimonialsContent>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;

const TestimonialsSection = styled.div`
  width: 100%;
  background-color: white;
`;

const TestimonialsContainer = styled.div`
  padding: 5%;
  h2 {
    font-size: 3rem;
    text-align: center;
  }

  @media (max-width: 940px) {
    width: 100%;
  }
`;

const TestimonialsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 4rem 0;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialsCard = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
  padding: 1rem;
  line-height: 2rem;

  img {
    height: 100px;
    border-radius: 50px;
    margin-top: -2rem;
    margin-left: 35%;
  }

  p {
    font-size: 1.2rem;
    margin: 12px;
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
