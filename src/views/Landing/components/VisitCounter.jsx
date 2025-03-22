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
  font-size: 1.2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: fit-content;


  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.6rem 1rem;
  }
`;

const VisitCounter = () => {
  const [visitas, setVisitas] = useState(null);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/afymos.org/home")
      .then((res) => res.json())
      .then((data) => setVisitas(data.value))
      .catch((err) => console.error("Error fetching visit count:", err));
  }, []);

  return visitas !== null && typeof visitas === "number" ? (
    <StyledCounter role="status" aria-live="polite">
      👁️ Visitas: {visitas}
    </StyledCounter>
  ) : null;
  
};

export default VisitCounter;
