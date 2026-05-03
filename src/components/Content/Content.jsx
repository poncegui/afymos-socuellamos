import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AccessibilityControls from '../Accessibility/AccessibilityControls';
import { typography } from '../../styles/typography';
import CTAButton from '../Button/CTAButton';

const STORAGE_KEY = 'afymos_fontScale';

export const Content = ({
  alt,
  buttonLabel,
  description,
  headline,
  href,
  img,
  inverse,
  reverse,
  topLine,
}) => {
  const [scale, setScale] = useState(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return v ? Number(v) : 1;
    } catch {
      return 1;
    }
  });

  useEffect(() => {
    try {
      document.documentElement.style.setProperty('--fs', String(scale));
    } catch {}
    const onStorage = e => {
      if (e.key === STORAGE_KEY) {
        try {
          const v = e.newValue ? Number(e.newValue) : 1;
          setScale(v);
          document.documentElement.style.setProperty('--fs', String(v));
        } catch {}
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [scale]);

  /* Determina si href es ruta interna o URL externa */
  const isExternal = typeof href === 'string' && href.startsWith('http');

  return (
    <Wrapper $inverse={inverse}>
      <Inner $reverse={reverse}>
        {/* ── Columna texto ── */}
        <TextCol>
          {topLine?.text && (
            <Label $inverse={inverse} aria-hidden="true">
              {topLine.text}
            </Label>
          )}

          {headline && <Headline $inverse={inverse}>{headline}</Headline>}

          {description && <Body $inverse={inverse}>{description}</Body>}

          {href && buttonLabel && (
            <CTAButton
              {...(isExternal ? { href, target: '_blank' } : { to: href })}
              variant={inverse ? 'primary' : 'secondary'}
              ariaLabel={buttonLabel}
            >
              {buttonLabel}
            </CTAButton>
          )}

          <AccessibilityControls text={description} inverse={inverse} />
        </TextCol>

        {/* ── Columna imagen ── */}
        {img && (
          <ImgCol>
            <ImgFrame>
              <img src={img} alt={alt || ''} loading="lazy" />
            </ImgFrame>
          </ImgCol>
        )}
      </Inner>
    </Wrapper>
  );
};

export default Content;

/* ─── Styles ─────────────────────────────────────────────────────────────── */

const Wrapper = styled.section`
  background: ${({ $inverse }) => ($inverse ? '#f9f8fb' : '#071c2f')};
  padding: 4rem clamp(1.25rem, 5%, 5rem);
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  align-items: center;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};

  /* Swap columns when reverse */
  ${({ $reverse }) =>
    $reverse &&
    `
    & > *:first-child { order: 2; }
    & > *:last-child  { order: 1; }
  `}

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;

    & > *:first-child {
      order: 2;
    }
    & > *:last-child {
      order: 1;
    }
  }
`;

const TextCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Label = styled.span`
  display: inline-block;
  font-size: calc(0.75rem * var(--fs, 1));
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  /* Mejorado contraste para WCAG AA */
  color: ${({ $inverse }) => ($inverse ? '#1a3349' : '#c6b1c9')};
  border-left: 3px solid ${({ $inverse }) => ($inverse ? '#c6b1c9' : '#c6b1c9')};
  padding-left: 0.6rem;
`;

const Headline = styled.h2`
  font-size: ${typography.fontSize.h2};
  font-weight: ${typography.fontWeight.bold};
  line-height: ${typography.lineHeight.snug};
  color: ${({ $inverse }) =>
    $inverse ? typography.color.primary : typography.color.inverse.primary};
  margin: 0;
`;

const Body = styled.p`
  font-size: ${typography.fontSize.body};
  font-weight: ${typography.fontWeight.regular};
  line-height: ${typography.lineHeight.relaxed};
  color: ${({ $inverse }) =>
    $inverse ? typography.color.secondary : typography.color.inverse.secondary};
  margin: 0;
`;

const ImgCol = styled.div`
  width: 100%;
`;

const ImgFrame = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);

  img {
    width: 100%;
    height: auto;
    max-height: 480px;
    object-fit: cover;
    display: block;
  }
`;
