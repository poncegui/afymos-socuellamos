import { useEffect, useState } from 'react';
import CarouselDesktop from './CarouselDesktop';
import CarouselMobile from './CarouselMobile';
import styled from 'styled-components';
import AccessibilityControls from '../Accessibility/AccessibilityControls';

const STORAGE_KEY = 'afymos_fontScale';

const CarouselSwitcher = ({ items }) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);

  const [scale, setScale] = useState(() => {
    try {
      return Number(localStorage.getItem(STORAGE_KEY) || 1);
    } catch {
      return 1;
    }
  });

  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  useEffect(() => {
    try {
      document.documentElement.style.setProperty('--fs', String(scale));
    } catch {}
    const onStorage = e => {
      if (e.key === STORAGE_KEY) {
        try {
          const v = Number(e.newValue || 1);
          setScale(v);
          document.documentElement.style.setProperty('--fs', String(v));
        } catch {}
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [scale]);


  return (
    <Section aria-labelledby="news-board-heading">
      <Header>
        <AccentBar aria-hidden="true" />
        <h2 id="news-board-heading">Tablón de noticias</h2>
        <HeaderRight>
          <Count aria-live="polite" aria-atomic="true">
            {items.length} noticias
          </Count>
          <AccessibilityControls inverse={true} />
        </HeaderRight>
      </Header>

      {isMobile ? (
        <CarouselMobile items={items} />
      ) : (
        <CarouselDesktop items={items} />
      )}
    </Section>
  );
};

export default CarouselSwitcher;

/* ─── Styles ─────────────────────────────────────────────────────────────── */

const Section = styled.section`
  background: #f9f8fb;
  padding: 3rem clamp(1.25rem, 5%, 4rem) 2.5rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  h2 {
    font-size: calc(clamp(1.1rem, 2.2vw, 1.4rem) * var(--fs, 1));
    font-weight: 700;
    color: #071c2f;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    margin: 0;
  }
`;

const AccentBar = styled.span`
  display: block;
  width: 4px;
  height: 1.5rem;
  border-radius: 2px;
  background: linear-gradient(180deg, #c6b1c9, #224464);
  flex-shrink: 0;
`;

const Count = styled.span`
  margin-left: auto;
  font-size: calc(1rem * var(--fs, 1));
  color: #224464;
  font-weight: 700;
  background: rgba(198, 177, 201, 0.15);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  border: 1px solid rgba(198, 177, 201, 0.3);
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
`;
