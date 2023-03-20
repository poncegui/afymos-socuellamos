import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Section } from "../../globalStyles";
import {
  FeatureText,
  FeatureTitle,
  FeatureWrapper,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureTextWrapper,
} from "./FeaturesStyles";
import { pictoAccessibility } from "../main/services/ApiMainMenu";

const Features = () => {
  const [pictos] = useState(pictoAccessibility);
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Section>
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle>¿Qué ofrecemos?</FeatureTitle>
        </FeatureTextWrapper>
        <FeatureWrapper>
          {pictos.map((picto) => (
            <Link onClick={handleClick} to={picto.url}>
              <FeatureColumn key={picto.id}>
                <FeatureImageWrapper>
                  <img src={picto.src} alt={picto.alt} />
                </FeatureImageWrapper>
                <FeatureName>{picto.name}</FeatureName>
                <FeatureText>{picto.description}</FeatureText>
              </FeatureColumn>
            </Link>
          ))}
        </FeatureWrapper>
      </Container>
    </Section>
  );
};

export default Features;
