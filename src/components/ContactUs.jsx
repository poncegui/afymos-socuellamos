import { Link } from "react-router-dom";

const ContactUs = props => {
  return (
 

<div className="completeHtml background">
<Link className="Link" to="/">
    
      <div className="content">

      <button className="backBtn">
      <i class="fa-solid fa-circle-chevron-left"></i> volver
      </button>
        <h1 className="logo">
          Contacta con <span>Afymos</span>
        </h1>

        <div className="contact-wrapper animated bounceInUp">
          <div className="contact-form">
            <h1>contáctanos</h1>
            <form action="">
              <p>
                <label>nombre completo</label>
                <input type="text" name="fullname" />
              </p>
              <p>
                <label>dirección de e-mail</label>
                <input type="email" name="email" />
              </p>
              <p>
                <label>número de teléfono</label>
                <input type="tel" name="phone" />
              </p>
              <p>
                <label>asunto</label>
                <input type="text" name="affair" />
              </p>
              <p className="block">
                <label>mensaje</label>
                <textarea name="message" rows="3"></textarea>
              </p>
              <p className="block">
                <button>enviar</button>
              </p>
            </form>
          </div>
          <div className="contact-info">
            <h4>más información</h4>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> c. Pedro Arias, 87
              </li>
              <li>
                <i className="fas fa-phone"></i> 926 530 509
              </li>
              <li>
                <i className="fas fa-envelope-open-text"></i> afymos@gmail.com
              </li>
            </ul>
            <p>
              Te contestaremos a la mayor brevedad posible.<br></br>
              Gracias por contactar con nosotros.
            </p>
            <p>afymos</p>
          </div>
        </div>
      </div>
      </Link>
</div>
   

  );
};

export default ContactUs;
