import home from "../icons/home.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__btn">
      <a href="#menu-principal" className="footer__btn--arrow" alt="menú principal" >
      <i className="fa-solid fa-chevron-up"></i>
      </a>
      
      </div>

      <div className="index-footer__wrapper">
        <div className="index-footer__shop">
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
                  afymos@gmail.com
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
        <div className="index-footer__about-us">
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
        <div className="index-footer__contact">
          <div className="index-footer__contact--menu">
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
          
        </div>
      </div>
      <div className="index-footer__contact--socialmedia">
            {/* <a href="" target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </a> */}
            <a href="https://www.instagram.com/afymos/?hl=es" alt="Instagram" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            {/* <a href="" alt="Twitter" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a> */}
            <a href="https://acortar.link/tvNjS0" alt="Facebook" target="_blank" >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
    </footer>
  );
};

export default Footer;


