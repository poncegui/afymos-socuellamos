import React from 'react';

const ExternalLink = ({ href, children, ariaLabel, className, title }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
      title={title}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
