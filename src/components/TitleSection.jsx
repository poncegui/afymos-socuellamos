import '../components/Footer/styles/Footer.css';

import React from 'react';
import styled from 'styled-components';

const TitleSection = ({ title, size, inverse, marginBottom }) => {
  return (
    <>
      <TitleSectionContainer
        size="size"
        inverse={inverse}
        marginBottom={marginBottom}
      >
        <h2>{title}</h2>
      </TitleSectionContainer>
    </>
  );
};
export default TitleSection;

const TitleSectionContainer = styled.div`
  width: 100%;
  display: flex;
  width: 100%;
  height: clamp(5rem, 10vh, 7rem);
  background: ${({ inverse }) => (inverse ? '#071c2f' : '#c6b1c9')};
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    width: 100%;
    position: relative;
    color: ${({ inverse }) => (inverse ? '#c6b1c9' : '#071c2f')};
    font-size: calc(clamp(
      1.2rem,
      4vw,
      ${({ size }) => (size ? '1.8rem' : '1.5rem')}
    ) * var(--fs, 1));
    font-weight: 700;
    margin: 0;
    line-height: 1.3;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  @media (max-width: 768px) {
    height: clamp(4rem, 8vh, 6rem);
    padding: 0 0.75rem;

    h2 {
      font-size: calc(clamp(
        1.1rem,
        3.5vw,
        ${({ size }) => (size ? '1.6rem' : '1.4rem')}
      ) * var(--fs, 1));
    }
  }

  @media (max-width: 480px) {
    height: clamp(3.5rem, 7vh, 5rem);
    padding: 0 0.5rem;

    h2 {
      font-size: calc(clamp(
        1rem,
        3vw,
        ${({ size }) => (size ? '1.4rem' : '1.3rem')}
      ) * var(--fs, 1));
      line-height: 1.4;
    }
  }
`;
