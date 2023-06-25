import React from "react";
import styled from "styled-components";
import "./prueba.css";

function ContactForm() {
  return (
    <section class="contact" id="contact">
      <div class="titles">
        <h1 class="heading">
          <span>Consulta con Ron</span>{" "}
        </h1>
      </div>

      <div class="icons-container">
        <div class="icons">
          <img src="icons/icon-1.png" alt="icon" />
          <h3>teléfono de contacto</h3>
          <p>(+34) 610 427 459</p>
          <p>(+34) 977 267 993</p>
        </div>

        <div class="icons">
          <img src="icons/icon-2.png" alt="icon" />
          <h3>correo electrónico</h3>
          <p>
            {" "}
            <a href="mailto:info@roned.es" target="_blank" title="e-mail Roned">
              info@roned.es
            </a>
          </p>
        </div>

        <div class="icons">
          <img src="icons/icon-3.png" alt="icon" />
          <h3>Dirección</h3>
          <p>Puerto de Riumar, CP/ 43580, Tarragona, España</p>
        </div>
      </div>

      <div class="row" />

      <form action="" id="form">
        <div class="inputBox">
          <input type="text" placeholder="nombre" name="name" required="" />
          <input type="number" placeholder="numero de teléfono" name="phone" />
        </div>
        <div class="inputBox">
          <input type="email" placeholder="email" name="email" required="" />
          <input type="text" placeholder="asunto" name="subject" required="" />
        </div>
        <textarea
          name="message"
          placeholder="mensaje"
          required=""
          id="message"
          cols="30"
          rows="10"
          class="inputs"
        ></textarea>
        <input type="submit" value="enviar mensaje" class="btn" />
      </form>

      <iframe
        class="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d386961.17584610515!2d0.7106675138558154!3d40.73707278144573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a10d93b9975101%3A0xcade7358749f3e4!2sRoned%20Sportfishing!5e0!3m2!1sfr!2snl!4v1642360461400!5m2!1sfr!2snl"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
}
export default ContactForm;
