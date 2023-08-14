import "./Footer.css";

import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>contacto</h4>
            <ul>
              <li>
                <a
                  href="mailto:afymos@gmail.com"
                  target="_blank"
                  title="e-mail afymos"
                  rel="noreferrer"
                >
                  info@afymos.es
                </a>
              </li>
              <li>
                <a
                  href="tel:610427459"
                  target="_blank"
                  title="Teléfono afymos"
                  rel="noreferrer"
                >
                  (+34) 926 532 749
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>dirección</h4>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/tv/CKKQgBcIW_Z/"
                  target="_blank"
                  rel="noreferrer"
                >
                  cookies
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tv/CKKQgBcIW_Z/"
                  target="_blank"
                  rel="noreferrer"
                >
                  aviso legal
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>política de privacidad</h4>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/tv/CKKQgBcIW_Z/"
                  target="_blank"
                  rel="noreferrer"
                >
                  cookies
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tv/CKKQgBcIW_Z/"
                  target="_blank"
                  rel="noreferrer"
                >
                  aviso legal
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>síguenos</h4>
            <div class="social-links">
              <a
                href="https://www.facebook.com/profile.php?id=100067093413028"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/tv/CKKQgBcIW_Z/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
