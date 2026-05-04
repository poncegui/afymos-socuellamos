import './styles/Footer.css';

import { footerData, socialLinks } from './services/footerData';

import { Link } from 'react-router-dom';
import React from 'react';
import { FontAwesomeIcon, faHeart } from '../../utils/icons';
import VisitCounter from '../Analytics/VisitCounter';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo" aria-label="Pie de página">
      <div className="footer-background" aria-hidden="true" />

      <div className="container">
        <div className="footer-header">
          <div className="footer-brand">
            <h2>Afymos</h2>
            <p>
              Transformando vidas a través de la inclusión y el apoyo integral
            </p>
          </div>
        </div>

        <div className="row">
          {footerData.map((column, index) => (
            <nav
              key={index}
              className="footer-col"
              aria-label={`Sección ${column.title}`}
            >
              <h3>{column.title}</h3>
              <div className="footer-divider" aria-hidden="true" />
              <ul>
                {column.items.map((item, idx) => (
                  <li key={idx}>
                    {item.to ? (
                      <Link to={item.to} title={item.text}>
                        {item.text}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.text} (abre en nueva pestaña)`}
                        title={item.text}
                      >
                        {item.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="footer-col">
            <h3>Síguenos</h3>
            <div className="footer-divider" aria-hidden="true" />
            <ul className="social-links" aria-label="Enlaces a redes sociales">
              {socialLinks.map((link, index) => (
                <li key={index} className="social-link-item">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Síguenos en ${link.name} (abre en nueva pestaña)`}
                    title={`${link.name} - Afymos`}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              &copy; {currentYear} <strong>Afymos</strong>. Todos los derechos
              reservados con{' '}
              <FontAwesomeIcon icon={faHeart} className="heart-icon" />
            </p>
            <p className="footer-tagline">
              Una fundación comprometida con la inclusión y la dignidad
            </p>
            <VisitCounter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
