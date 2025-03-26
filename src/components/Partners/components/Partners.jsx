import React, { useState } from "react";

import styled from "styled-components";

const PartnersCard = ({ url, alt, target, src, title }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  // Asumimos que la ruta WebP está en /images/partners/nombre-del-archivo.webp
  // Puedes ajustar esta lógica si las rutas están definidas de otro modo
  const fileName = src.split("/").pop().split(".")[0];
  const webpPath = `/images/partners/${fileName}.webp`;

  return (
    <a
      onClick={handleClick}
      href={url}
      target={target}
      rel="noopener noreferrer"
      aria-label={`Ir a la web del colaborador: ${title}`}
    >
      <PartnertCard>
        <PartnertFaceFront>
          <picture>
            <source srcSet={webpPath} type="image/partners/webp" />
            <LogoPartner src={src} alt={alt} title={title} loading="lazy" />
          </picture>
        </PartnertFaceFront>
      </PartnertCard>
    </a>
  );
};

export default PartnersCard;

// Estilos

export const PartnertCard = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: auto;
  position: relative;
  width: 50%;
  gap: 2rem;
  white-space: nowrap;
`;

export const PartnertFaceFront = styled.div`
  background: white;
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

export const LogoPartner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Card = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: auto;
  position: relative;
  width: 80%;
  gap: 1rem;
  white-space: nowrap;
`;

export const FaceFront = styled.div`
  backface-visibility: hidden;
  background: #e0e0e0;
  border-radius: 10%;
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

export const ImgFront = styled.img`
  width: 100%;
  object-fit: contain;
`;
