import "./styles/Footer.css";

import { footerData, socialLinks } from "./services/footerData";

import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          {footerData.map((column, index) => (
            <div key={index} className="footer-col">
              <h4>{column.title}</h4>
              <ul>
                {column.items.map((item, idx) => (
                  <li key={idx}>
                    {item.to ? (
                      <Link to={item.to}>{item.text}</Link>
                    ) : (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        title={item.text}
                      >
                        {item.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer-col">
            <h4>síguenos</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
