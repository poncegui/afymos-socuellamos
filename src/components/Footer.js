import up from "../images/up.svg";
import facebook from "../images/facebook.svg";
import pipe from "../images/pipe.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__btn">
      <a href="./index.html#header" class="footer__btn--arrow">
      <i class="fa-solid fa-chevron-up"></i>
      </a>
      
      </div>

      <div class="index-footer__wrapper">
        <div class="index-footer__shop">
          <h4>Contacto</h4>
          <nav>
            <ul>
              <li>
                <a
                  className="box1__display--list"
                  href="https://acortar.link/O2NBKp"
                  target="_blank"
                  title="cómo llegar"
                >
                  Cómo llegar
                </a>
              </li>
              <li>
                <a
                  className="box1__display--list"
                  href="mailto:afymos@gmail.com"
                  target="_blank"
                  title="e-mail Afymos"
                >
                  afymos@gmail
                </a>
              </li>
              <li>
                <a
                  className="box1__display--list"
                  href="tel:926532749"
                  target="_blank"
                  title="Teléfono Afymos"
                >
                  926 532 749
                </a>
              </li>
              {/* <li>
                <a href="https://adalab.es/" target="_blank">
                  Habitaciones
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
        <div class="index-footer__about-us">
          <h4></h4>
          <nav>
            <ul>
              <li>
                <a href="https://adalab.es/" target="_blank"></a>
              </li>
              <li>
                <a href="https://adalab.es/" target="_blank"></a>
              </li>
              <li>
                <a href="https://adalab.es/" target="_blank"></a>
              </li>
              <li>
                <a href="https://adalab.es/" target="_blank"></a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="index-footer__contact">
          <div class="index-footer__contact--menu">
            <h4>Aviso Legal</h4>
            <nav>
              <ul>
                <li>
                  <a
                    className=""
                    href="https://adalab.es/"
                    target="_blank"
                    title="Política de Privacidad"
                  >
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="https://adalab.es/"
                    target="_blank"
                    title="cookies"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="index-footer__contact--socialmedia">
            {/* <a href="https://adalab.es/" target="_blank">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://adalab.es/" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://adalab.es/" target="_blank">
              <i class="fa-brands fa-twitter"></i>
            </a> */}
            <a href="https://acortar.link/tvNjS0" target="_blank">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
