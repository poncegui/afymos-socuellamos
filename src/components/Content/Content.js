import { Container, Section, Title } from "../../globalStyles";
import {
  ContentColumn,
  ContentRow,
  Heading,
  HomePage,
  Img,
  ImgWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./ContentStyles.js";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const Content = ({
  alt,
  buttonLabel,
  description,
  headline,
  href,
  img,
  inverse,
  reverse,
  target,
  topLine,
  title,
  id,
}) => {
  const [hovered, setHovered] = useState(false);
  const handleClick = () => {
    // Aquí puedes agregar el manejo de clics si es necesario
  };

  return (
    <Section id={id} inverse={inverse}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <Title>{title}</Title>
              <TopLine>{topLine.text}</TopLine>
              <Heading inverse={inverse}>{headline}</Heading>
              <Subtitle inverse={inverse}>{description}</Subtitle>

              <HomePage
                onClick={handleClick}
                href={href}
                alt={alt}
                target={target}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{
                    color: inverse ? "#000" : "#fff", // Cambia el color del icono según el fondo del contenedor
                    transform: hovered ? "rotate(90deg)" : "rotate(0)", // Gira el icono 180 grados cuando se pasa el mouse
                    fontSize: "40px", // Establece el tamaño del icono
                    transition: "transform 0.5s ease-in-out", // Agrega una transición suave
                  }}
                  aria-label={buttonLabel} // Añade una etiqueta para la accesibilidad
                  role="button" // Indica que el icono es interactivo
                  onMouseEnter={() => setHovered(true)} // Maneja el mouseover
                  onMouseLeave={() => setHovered(false)} // Maneja el mouseout
                  onClick={(e) => e.preventDefault()} // Evita el comportamiento predeterminado del clic
                  onTouchStart={() => setHovered(true)} // Maneja el inicio del toque
                  onTouchEnd={() => setHovered(false)} // Maneja el final del toque
                />
              </HomePage>
            </TextWrapper>
          </ContentColumn>
          <ContentColumn>
            <ImgWrapper>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
};
