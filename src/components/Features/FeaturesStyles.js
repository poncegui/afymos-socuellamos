import styled from "styled-components";

export const FeatureTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
  margin: auto;
  color: white;
`;

export const FeatureTextWrapper = styled.div`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;
`;

export const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 4rem;
  grid-gap: 2rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3rem;
  }

  @media (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FeatureColumn = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 10px;
  box-shadow: 0 0 10px 3px #d0d0d0;
  border-radius: 20px;
`;

export const FeatureImageWrapper = styled.div`
  border-radius: 5%;
  border: 2px solid #000;
  display: grid;
  margin-bottom: 1rem;
  padding: 30px;
  place-content: center;

  img {
    height: 100%;
    width: 100%;
    object-fit: center;
  }
`;

export const FeatureName = styled.h3`
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`;

export const FeatureText = styled.p`
  margin: 1rem 0 auto;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: #626881;

  @media (max-width: 768px) {
    display: none;
  }
`;
