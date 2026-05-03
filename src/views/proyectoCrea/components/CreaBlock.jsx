import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../../globalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import DipticoGallery from './DipticoGallery';
import { typography } from '../../../styles/typography';
import CTAButton from '../../../components/Button/CTAButton';

const CreaBlock = ({
  topLine,
  headline,
  description,
  img,
  alt,
  reverse,
  downloadLabel,
  downloadHref,
  buttonLabel,
  href,
  id,
  gallery,
}) => {
  const [hovered, setHovered] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  return (
    <Section id={id} role="region" aria-labelledby={`${id}-heading`}>
      <Container>
        <Row className={reverse ? 'reverse' : ''}>
          <Column>
            <Text>
              <TopLine>{topLine?.text}</TopLine>
              <Heading id={`${id}-heading`}>{headline}</Heading>
              <Description
                dangerouslySetInnerHTML={{
                  __html: formatDescription(description),
                }}
              />

              <Buttons>
                {href && (
                  <CTAButton
                    href={href}
                    target="_blank"
                    variant="primary"
                    ariaLabel={buttonLabel}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    {buttonLabel}{' '}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </CTAButton>
                )}

                {gallery && gallery.length > 0 && (
                  <CTAButton
                    variant="outline"
                    onClick={() => setShowGallery(true)}
                    ariaLabel="Ver díptico"
                  >
                    <FontAwesomeIcon icon={faDownload} />
                    Ver díptico
                  </CTAButton>
                )}

                {downloadHref && (
                  <CTAButton
                    href={downloadHref}
                    variant="outline"
                    ariaLabel={downloadLabel}
                  >
                    <FontAwesomeIcon icon={faDownload} />
                    {downloadLabel}
                  </CTAButton>
                )}
              </Buttons>

              {gallery && (
                <DipticoGallery
                  images={gallery}
                  isOpen={showGallery}
                  onClose={() => setShowGallery(false)}
                />
              )}
            </Text>
          </Column>

          <Column>
            <ImageWrap>
              <img src={img} alt={alt || headline} loading="lazy" />
            </ImageWrap>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

function formatDescription(text) {
  // Preserve newlines and simple lists
  if (!text) return '';
  const escaped = String(text)
    .replace(/\n/g, '<br />')
    .replace(/-\s/g, '&nbsp;&nbsp;• ');
  return escaped;
}

export default CreaBlock;

const Section = styled.section`
  padding: 5.5rem 0;
  background: linear-gradient(180deg, #fbfbfd 0%, #f3eef6 100%);
`;

const Row = styled.div`
  display: flex;
  gap: 3.5rem;
  align-items: center;
  flex-wrap: wrap;

  &.reverse {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Column = styled.div`
  flex: 1 1 420px;
  min-width: 280px;
`;

const Text = styled.div`
  max-width: 780px;
  padding: 2rem 0;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const TopLine = styled.div`
  font-size: calc(2rem * var(--fs, 1));
  color: #5b6b76;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: 0.6px;

  @media (max-width: 768px) {
    font-size: calc(1.4rem * var(--fs, 1));
  }
`;

const Heading = styled.h2`
  font-size: ${typography.fontSize.h2};
  font-weight: ${typography.fontWeight.bold};
  line-height: ${typography.lineHeight.snug};
  color: ${typography.color.primary};
  margin: 0 0 1.25rem 0;
`;

const Description = styled.p`
  font-size: ${typography.fontSize.bodyLarge};
  font-weight: ${typography.fontWeight.regular};
  line-height: ${typography.lineHeight.relaxed};
  color: ${typography.color.secondary};
  white-space: pre-wrap;
  margin-bottom: 1.75rem;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
`;

const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 560px;
    height: auto;
    border-radius: 14px;
    box-shadow: 0 14px 40px rgba(7, 28, 47, 0.14);
    object-fit: cover;
  }

  @media (max-width: 768px) {
    img {
      max-width: 92%;
    }
  }
`;
