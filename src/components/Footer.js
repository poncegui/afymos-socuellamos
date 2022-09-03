

const Footer = () => {
    return (

<footer className="footer">
  <div className="footer__btn">
    <a href="#header"
      ><img
        src="./assets/images/ico-arrow.svg"
        className="footer__btn--arrow"
        alt="main menu"
        title="main menu"
    /></a>
  </div>

  <div className="footer__navigation">
    <nav className="box1">
      <ul className="box1__display">
        <li><i className="fa-solid fa-map-location-dot">
          <a
            className="box1__display--list"
            href="https://acortar.link/O2NBKp"
            target="_blank"
            title="cómo llegar"
            >Cómo llegar</a
          ></i>
        </li>
        <li><i className="fa-solid fa-paper-plane"></i>
          <a
            className="box1__display--list"
            href="mailto:afymos@gmail.com"
            target="_blank"
            title="e-mail Afymos"
            >e-mail</a
          >
        </li>
        <li><i className="fa-solid fa-phone"></i>
        <a
          className="box1__display--list"
          href="tel:926532749"
          target="_blank"
          title="Teléfono Afymos"
          >926 532 749</a
        >
      </li>
  
        <li>
          <a
            className="box1__display--list"
            href="https://adalab.es/"
            target="_blank"
            title="cookies"
          ></a>
        </li>
        <li><i className="fa-sharp fa-solid fa-cookie"></i>
          <a
            className="box1__display--list"
            href="https://adalab.es/"
            target="_blank"
            title="cookies"
            >Cookies</a
          >
        </li>
        <li><i className="fa-solid fa-gavel"></i>
          <a
            className="box1__display--list"
            href="https://adalab.es/"
            target="_blank"
            title="Web Adalab"
            >Aviso Legal</a
          >
        </li>
      </ul>
    </nav>

    <nav className="box2">
      <ul className="box2__display--list">
        <li>
          <a
            className="box2__display--list"
            href="https://es-es.facebook.com/pages/category/Nonprofit-organization/Afymos-Asociaci%C3%B3n-878470228866846/"
            target="_blank"
            title="facebook Afymos"
          >
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </li>
  
      </ul>
    </nav>

    <div className="footer__heart">
   
      <div>
        we <i className="fa-solid fa-heart"></i>humans
        <div>&copy;2022</div>
      </div>
    </div>
  </div>
  {/* <div className="cookies">
    <p>
      <button onclick="aceptarCookies()" className="pull-right">
        <i className="fa fa-times"></i> Aceptar y cerrar éste mensaje
      </button>
      Éste sitio web usa cookies, si permanece aquí acepta su uso. Puede leer
      más sobre el uso de cookies en nuestra
      <a href="politica.html">política de privacidad</a>.
    </p>
  </div> */}
</footer>

    );
};

export default Footer;