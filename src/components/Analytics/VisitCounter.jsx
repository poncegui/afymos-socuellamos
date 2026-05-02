import { useEffect, useState } from 'react';
import styled from 'styled-components';

/**
 * Contador de visitas usando CountAPI
 * No requiere backend, totalmente gratuito
 */
const VisitCounter = ({ showLabel = true, namespace = 'afymos', key = 'visits' }) => {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Incrementar y obtener el contador
    const fetchCount = async () => {
      try {
        // API pública de CountAPI - incrementa automáticamente
        const response = await fetch(
          `https://api.countapi.xyz/hit/${namespace}/${key}`
        );

        if (!response.ok) throw new Error('Failed to fetch count');

        const data = await response.json();
        setCount(data.value);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching visit count:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchCount();
  }, [namespace, key]);

  // No mostrar nada mientras carga o si hay error
  if (loading || error || count === null) return null;

  return (
    <CounterWrapper role="status" aria-live="polite">
      {showLabel && (
        <Label>
          <VisitorsIcon aria-hidden="true">👥</VisitorsIcon>
          Visitas totales:{' '}
        </Label>
      )}
      <Count aria-label={`${count.toLocaleString('es-ES')} visitas totales`}>
        {count.toLocaleString('es-ES')}
      </Count>
    </CounterWrapper>
  );
};

export default VisitCounter;

const CounterWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: calc(0.9rem * var(--fs, 1));
  color: rgba(255, 255, 255, 0.85);
  padding: 0.5rem 0;
`;

const Label = styled.span`
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const VisitorsIcon = styled.span`
  font-size: 1rem;
`;

const Count = styled.strong`
  font-weight: 700;
  color: #c6b1c9;
  font-variant-numeric: tabular-nums;
  min-width: 3ch;
  text-align: right;
`;
