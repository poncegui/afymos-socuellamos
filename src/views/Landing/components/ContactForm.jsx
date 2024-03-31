import "./styles/ContactForm.css";

import IconOne from "./assets/icons/icon-1.png";
import IconThree from "./assets/icons/icon-3.png";
import IconTwo from "./assets/icons/icon-2.png";
import TitleSection from "../../../components/TitleSection";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <>
      <TitleSection title="Información de contacto" size inverse marginBottom />
      <section className="contact" id="contacto">
        <IconsContainer>
          <Icons>
            <img src={IconOne} alt="icono teléfono" />
            <h3>teléfono de contacto</h3>
            <p>926 532 749</p>
          </Icons>
          <Icons>
            <img src={IconTwo} alt="icono correo electrónico" />
            <h3>correo electrónico</h3>
            <p>
              <a
                href="mailto:afymos@gmail.com"
                target="_blank"
                title="e-mail afymos"
                rel="noreferrer"
                aria-label="ir al correo electrónico de Afymos"
              >
                afymos@gmail.com
              </a>
            </p>
          </Icons>
          <Icons>
            <img src={IconThree} alt="" />
            <h3>Dirección</h3>
            <p>c. Pedro Arias, 87, 13630 Socuéllamos, Ciudad Real</p>
          </Icons>
        </IconsContainer>

        <div className="row">
          <form
            action="https://formsubmit.co/ba88b9758fe1eee2f75438dceeafdba3"
            method="POST"
          >
            <div className="inputBox">
              <input type="text" placeholder="nombre" name="name" required />
              <input type="number" placeholder="teléfono" name="telefono" />
            </div>
            <div className="inputBox">
              <input type="email" placeholder="email" name="email" required />
              <input type="text" placeholder="asunto" name="asunto" required />
            </div>
            <textarea
              type="text"
              name="mensaje"
              placeholder="mensaje"
              required
              id="message"
              cols="30"
              rows="10"
              className="inputs"
            ></textarea>
            <input
              type="submit"
              value="enviar"
              target="_blank"
              className="inputSubmit"
            />
          </form>
          <iframe
            title="map"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.115024827591!2d-2.792748684638135!3d39.28564187951258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd68f525d5ea6049%3A0x180a68074859800d!2sAFYMOS!5e0!3m2!1ses!2ses!4v1687676404652!5m2!1ses!2ses"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};
export default ContactForm;

const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-bottom: 2rem;
`;
const Icons = styled.div`
  flex: 1 1 25rem;
  padding: 2rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  text-align: center;
  text-decoration: none;

  img {
    height: 3rem;
  }
  h3 {
    font-size: 1.5rem;
    color: #071c2f;
    padding: 1rem 0;
  }
  p {
    font-size: 1.2rem;
    color: #071c2f;
    padding: 0.2rem 0;
  }
  p a {
    font-size: 1.5rem;
    color: #071c2f;
    padding: 0.2rem 0;
  }
  p:hover {
    font-size: 1.5rem;
    color: #071c2f;
    padding: 0.2rem 0;
  }
`;
