import React from "react";
import styled from "styled-components";

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
  alt = "",
  width,
  height,
  priority = false,
  srcSet,
  sizes,
  className,
  style,
  responsive = false,
}) => {
  if (!src) return null;

  const loading = priority ? "eager" : "lazy";
  const fetchpriority = priority ? "high" : undefined;

  // Generate responsive srcSet for carousel images
  const generateResponsiveSrcSet = (basePath) => {
    if (!responsive || !basePath) return null;

    const ext = basePath.split('.').pop();
    const pathWithoutExt = basePath.replace(`.${ext}`, '');

    return `${pathWithoutExt}-400w.${ext} 400w, ${pathWithoutExt}-800w.${ext} 800w, ${pathWithoutExt}-1200w.${ext} 1200w`;
  };

  const responsiveSrcSet = generateResponsiveSrcSet(webp);
  const defaultSizes = sizes || "(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px";

  return (
    <PictureWrap className={className} style={style}>
      <picture>
        {webp && responsiveSrcSet && (
          <source
            srcSet={responsiveSrcSet}
            sizes={defaultSizes}
            type="image/webp"
          />
        )}
        {webp && !responsiveSrcSet && <source srcSet={webp} type="image/webp" />}
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
