import React from 'react';
import styled from 'styled-components';

/**
 * LazyResponsiveImage
 * Props:
 * - src: string (required) fallback image
 * - webp: string (optional) webp version
 * - alt: string
 * - width, height: numbers or strings to reserve space and avoid CLS
 * - priority: boolean (if true, loading eager + fetchpriority=high)
 * - className: string
 * - sizes/srcSet: optional responsive strings
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
}) => {
  if (!src) return null;

  const loading = priority ? 'eager' : 'lazy';
  const fetchpriority = priority ? 'high' : undefined;

  return (
    <PictureWrap className={className} style={style}>
      <picture>
        {webp && <source srcSet={webp} type="image/webp" />}
        {srcSet && <source srcSet={srcSet} sizes={sizes} />}
        <Img
          src={src}
          alt={alt}
          loading={loading}
          fetchpriority={fetchpriority}
          width={width}
          height={height}
        />
      </picture>
    </PictureWrap>
  );
};

export default LazyResponsiveImage;

const PictureWrap = styled.span`
  display: inline-block;
  width: 100%;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`;
