import React, { useEffect, useState } from "react";

import styled from "styled-components";

const StyledCounter = styled.div`
  display: flex;
  flex-direction: row;
  left: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: #c6b1c9;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  color: #071c2f;
  font-weight: 600;
  font-size: calc(1.2rem * var(--fs, 1));
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: fit-content;

  @media (max-width: 768px) {
    font-size: calc(1rem * var(--fs, 1));
    padding: 0.6rem 1rem;
  }
`;

const VisitCounter = () => {
  const [visitas, setVisitas] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Timeout para evitar bloqueos largos
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    fetch("https://api.countapi.xyz/hit/afymos.org/home", {
      signal: controller.signal,
    })
      .then((res) => {
        clearTimeout(timeoutId);
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        if (data && typeof data.value === 'number') {
          setVisitas(data.value);
        }
      })
      .catch((err) => {
        clearTimeout(timeoutId);
        // Silenciar errores de red para servicios externos opcionales
        // Solo registrar en desarrollo
        if (process.env.NODE_ENV === 'development') {
          console.warn("Visit counter unavailable:", err.message);
        }
        setError(true);
      });

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  // No mostrar nada si hay error o está cargando
  if (error || visitas === null) return null;

  return (
    <StyledCounter role="status" aria-live="polite">
      👁️ Visitas: {visitas.toLocaleString('es-ES')}
    </StyledCounter>
  );
};

export default VisitCounter;
