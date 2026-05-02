import { Link } from 'react-router-dom';
import graph from '../assets/images-dontationInformation/grafico-2-removebg-preview.png';
import money from '../assets/images-dontationInformation/dinero-removebg-preview.png';
import percentage from '../assets/images-dontationInformation/80-removebg-preview.png';
import styled from 'styled-components';

const DonationInformation = () => {
  return (
    <Wrapper aria-labelledby="donation-title">
      <Inner>
        <ImageGroup aria-hidden="true">
          <img src={percentage} alt="Icono de porcentaje 80%" />
          <img src={graph} alt="Icono de gráfico estadístico" />
          <img src={money} alt="Icono de dinero" />
        </ImageGroup>

        <TextCol>
          <Tag>Colabora con nosotros</Tag>
          <Title id="donation-title">
            ¿Sabías que hasta los primeros 250&nbsp;€ te deduces
            el&nbsp;80&nbsp;%?
          </Title>
          <Body>
            Si donas 250&nbsp;€ te desgravas 200&nbsp;€. Cada euro cuenta.
          </Body>
          <DonateButton
            to="/donaciones"
            aria-label="Ir a la página de donaciones"
          >
            Dona ahora →
          </DonateButton>
        </TextCol>
      </Inner>
    </Wrapper>
  );
};

export default DonationInformation;

/* ─── Styles ─────────────────────────────────────────────────────────────── */

const Wrapper = styled.section`
  background: #c6b1c9;
  padding: 3.5rem clamp(1.25rem, 5%, 5rem);
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImageGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-shrink: 0;

  img {
    height: 90px;
    width: auto;
    object-fit: contain;
  }

  @media (max-width: 600px) {
    img {
      height: 64px;
    }
  }
`;

const TextCol = styled.div`
  flex: 1;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

const Tag = styled.span`
  display: inline-block;
  font-size: calc(0.72rem * var(--fs, 1));
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #2d1a35;
  border-left: 3px solid #2d1a35;
  padding-left: 0.6rem;
`;

const Title = styled.h2`
  font-size: calc(clamp(1.25rem, 2.8vw, 1.7rem) * var(--fs, 1));
  font-weight: 700;
  color: #071c2f;
  line-height: 1.25;
  margin: 0;
`;

const Body = styled.p`
  font-size: calc(1rem * var(--fs, 1));
  color: #2d1a35;
  margin: 0;
`;

const DonateButton = styled(Link)`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  padding: 0.65rem 1.75rem;
  border-radius: 999px;
  background: #fff;
  color: #6b4a7a;
  font-size: calc(0.95rem * var(--fs, 1));
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;

  &:hover {
    background: #f8f4f9;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
  }

  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 3px;
  }
`;
