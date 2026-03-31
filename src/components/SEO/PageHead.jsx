import { useEffect } from 'react';

/**
 * PageHead Component
 * Manages dynamic meta tags and page title for SEO and accessibility
 *
 * @param {string} title - Page title (will be appended with " | Afymos")
 * @param {string} description - Meta description (max 160 characters recommended)
 * @param {string} canonical - Canonical URL for this page
 * @param {Object} ogData - Open Graph data { image, type }
 * @param {string} keywords - CSV of relevant keywords
 */
const PageHead = ({
  title = 'Afymos - Terapias y Servicios de Apoyo',
  description = 'Afymos ofrece terapias, servicios de apoyo, vivienda asistida, empleo y atención especializada.',
  canonical = 'https://afymos.org/',
  ogData = {},
  keywords = 'Afymos, discapacidad, terapias, servicios de apoyo',
}) => {
  useEffect(() => {
    // Set page title
    document.title = title.includes('Afymos') ? title : `${title} | Afymos`;

    // Update or create meta description
    updateMetaTag('description', description);
    updateMetaTag('name', 'keywords', keywords);

    // Update canonical URL
    updateCanonical(canonical);

    // Update Open Graph tags
    if (ogData.title) updateOGTag('og:title', ogData.title);
    if (ogData.description) updateOGTag('og:description', ogData.description);
    if (ogData.image) updateOGTag('og:image', ogData.image);
    if (ogData.type) updateOGTag('og:type', ogData.type);

    // Update Twitter Card
    updateMetaTag('name', 'twitter:title', ogData.title || title);
    updateMetaTag(
      'name',
      'twitter:description',
      ogData.description || description,
    );

    // Accessibility: Announce page change to screen readers
    const headerElement = document.querySelector('main h1, main h2');
    if (headerElement && window.location.pathname !== '/') {
      // Signal to screen readers that page has changed
      const announcement = document.createElement('div');
      announcement.setAttribute('role', 'status');
      announcement.setAttribute('aria-live', 'polite');
      announcement.className = 'sr-only';
      announcement.textContent = `Página cargada: ${title}`;
      document.body.appendChild(announcement);

      setTimeout(() => announcement.remove(), 500);
    }
  }, [title, description, canonical, ogData, keywords]);

  return null;
};

/**
 * Helper: Update or create a meta tag
 */
const updateMetaTag = (attribute, name, content) => {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
};

/**
 * Helper: Update Open Graph meta tag
 */
const updateOGTag = (property, content) => {
  let tag = document.querySelector(`meta[property="${property}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
};

/**
 * Helper: Update canonical URL
 */
const updateCanonical = url => {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }

  link.href = url;
};

export default PageHead;
