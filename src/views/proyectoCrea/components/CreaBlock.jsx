import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../../globalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import DipticoGallery from './DipticoGallery';

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
                  <Primary
                    href={href}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    aria-label={buttonLabel}
                  >
                    {buttonLabel}{' '}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ marginLeft: 8 }}
                    />
                  </Primary>
                )}

                {gallery && gallery.length > 0 && (
                  <Secondary
                    as="button"
                    type="button"
                    onClick={() => setShowGallery(true)}
                    aria-label="Ver díptico"
                  >
                    <FontAwesomeIcon
                      icon={faDownload}
                      style={{ marginRight: 8 }}
                    />
                    Ver díptico
                  </Secondary>
                )}

                {downloadHref && (
                  <Secondary
                    href={downloadHref}
                    download
                    aria-label={downloadLabel}
                  >
                    <FontAwesomeIcon
                      icon={faDownload}
                      style={{ marginRight: 8 }}
                    />
                    {downloadLabel}
                  </Secondary>
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
  font-size: 2rem;
  color: #5b6b76;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: 0.6px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Heading = styled.h2`
  font-size: 2.6rem;
  color: #071c2f;
  margin: 0 0 1.25rem 0;
  line-height: 1.12;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.28rem;
  line-height: 1.95;
  color: #374151;
  white-space: pre-wrap;
  margin-bottom: 1.75rem;
  text-align: center;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    line-height: 1.6;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
`;

const Primary = styled.a`
  display: inline-flex;
  align-items: center;
  background: #0b5d79;
  color: #fff;
  padding: 0.9rem 1.2rem;
  font-size: 1.05rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(11, 93, 121, 0.18);
  }
`;

const Secondary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: #0b5d79;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  border-radius: 10px;
  border: 2px solid #0b5d79;
  text-decoration: none;
  font-weight: 700;

  &:hover {
    background: rgba(11, 93, 121, 0.06);
  }
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
