import { Link } from "react-scroll";
import TitleSection from "../../../components/TitleSection";
import { introData } from "./services/introData";
import styled from "styled-components";

const ProjectsIntro = () => {
  return (
    <>
      <TitleSection title="Nuestras Terapias" size />
      <SectionFeatures>
        <ButtonContainer>
          {introData.map((therapy) => (
            <TherapyCard key={therapy.id}>
              <Link
                to={therapy.url}
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                aria-label={`Ir a la sección de ${therapy.name}`}
              >
                <img loading="lazy" src={therapy.src} alt={therapy.alt} />
                <h3>{therapy.name}</h3>
              </Link>
            </TherapyCard>
          ))}
        </ButtonContainer>
      </SectionFeatures>
    </>
  );
};

export default ProjectsIntro;

const SectionFeatures = styled.section`
  background: white;
  padding: clamp(3rem, 8vw, 5rem) clamp(1.5rem, 5vw, 4rem);
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(1.5rem, 4vw, 3rem);
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(1.25rem, 3vw, 2rem);
  }
`;

const TherapyCard = styled.div`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 1rem;
    border-radius: 12px;
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    text-decoration: none;
    cursor: pointer;

    &:hover,
    &:focus {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(198, 177, 201, 0.3);
      border: 2px solid #c6b1c9;
    }

    &:focus {
      outline: 3px solid rgba(198, 177, 201, 0.5);
      outline-offset: 2px;
    }
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }

  h3 {
    margin: 0;
    font-size: calc(1rem * var(--fs, 1));
    color: #071c2f;
    text-align: center;
    font-weight: 600;
  }

  @media (max-width: 480px) {
    a {
      padding: 1rem 0.75rem;
      gap: 0.75rem;
    }

    img {
      width: 70px;
      height: 70px;
    }

    h3 {
      font-size: calc(0.9rem * var(--fs, 1));
    }
  }
`;
