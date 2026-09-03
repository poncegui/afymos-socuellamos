import React from 'react';
import styled from 'styled-components';
import defaultFallback from '../../views/Landing/assets/images-noticias/news.png';

/**
 * LazyResponsiveImage
 * Props:
 * - src: string (required) fallback image
 * - webp: string (optional) webp version OR path template for responsive images
 * - alt: string
 * - width, height: numbers or strings to reserve space and avoid CLS
 * - priority: boolean (if true, loading eager + fetchpriority=high)
 * - className: string
 * - sizes/srcSet: optional responsive strings
 * - responsive: boolean (if true, generates srcSet for 400w, 800w, 1200w)
 */
const LazyResponsiveImage = ({
  src,
  webp,
  alt = '',
  width,
  height,
  priority = false,
  srcSet,
  sizes,
  className,
  style,
  responsive = false,
  variant = 'responsive', // 'responsive' | 'hero' | 'thumb' | 'modal'
  objectFit,
}) => {
  if (!src) return null;

  const loading = priority ? 'eager' : 'lazy';
  const fetchpriority = priority ? 'high' : undefined;

  // Generate responsive srcSet for carousel images
  const generateResponsiveSrcSet = basePath => {
    if (!responsive || !basePath) return null;

    const ext = basePath.split('.').pop();
    const pathWithoutExt = basePath.replace(`.${ext}`, '');

    return `${pathWithoutExt}-400w.${ext} 400w, ${pathWithoutExt}-800w.${ext} 800w, ${pathWithoutExt}-1200w.${ext} 1200w`;
  };

  const responsiveSrcSet = generateResponsiveSrcSet(webp);
  const defaultSizes =
    sizes || '(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px';

  return (
    <PictureWrap className={className} style={style} $variant={variant}>
      <picture>
        {webp && responsiveSrcSet && (
          <source
            srcSet={responsiveSrcSet}
            sizes={defaultSizes}
            type="image/webp"
          />
        )}
        {webp && !responsiveSrcSet && (
          <source srcSet={webp} type="image/webp" />
        )}
        {srcSet && <source srcSet={srcSet} sizes={sizes} />}
        <Img
          src={src}
          alt={alt}
          loading={loading}
          fetchpriority={fetchpriority}
          width={width}
          height={height}
          $variant={variant}
          $objectFit={objectFit}
          onError={e => {
            try {
              if (e && e.target && e.target.src !== defaultFallback) {
                e.target.onerror = null;
                e.target.src = defaultFallback;
              }
            } catch (err) {
              /* ignore */
            }
          }}
        />
      </picture>
    </PictureWrap>
  );
};

export default LazyResponsiveImage;

const PictureWrap = styled.span`
  display: block;
  width: 100%;
  max-width: 100%;
  overflow: hidden;

  /* hero variant: limit height and cover */
  ${props =>
    props.$variant === 'hero' &&
    `
    max-height: 60vh;
    display: block;
  `}

  /* thumbnail: keep smaller height but full width */
  ${props =>
    props.$variant === 'thumb' &&
    `
    max-height: 260px;
  `}

  /* modal: center content */
  ${props =>
    props.$variant === 'modal' &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: ${props => props.$objectFit || 'cover'};

  /* hero uses cover and fills the wrapper */
  ${props =>
    props.$variant === 'hero' &&
    `
    width: 100%;
    height: 100%;
    object-fit: ${props.$objectFit || 'cover'};
  `}

  /* thumbnail keeps fixed height and covers */
  ${props =>
    props.$variant === 'thumb' &&
    `
    width: 100%;
    height: 100%;
    object-fit: ${props.$objectFit || 'cover'};
  `}

  /* modal: contain inside viewport */
  ${props =>
    props.$variant === 'modal' &&
    `
    width: auto;
    max-width: 100%;
    max-height: 80vh;
    height: auto;
    object-fit: contain;
  `}
`;
