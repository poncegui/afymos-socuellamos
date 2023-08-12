import "./Testimonials.css";

import React from "react";
import user1 from "../assets/images-testimonials/rafa.png";
import user2 from "../assets/images-testimonials/quico.png";
import user3 from "../assets/images-testimonials/oficina.png";

// import user1 from '../assets/images-testimonials/Pedro.jpg';
// import user2 from '../assets/images-testimonials/Rafa.jpg';
// import user3 from '../assets/images-testimonials/Quico.jpg';

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <h2>Historias reales: Proyecto Crea</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={user1} alt="user1" />
            <p>
              Gracias al trabajo, Rafael ha adquirido nuevas rutinas, ha
              cambiado sus hábitos, ha asumido nuevas responsabilidades que le
              han permitido cambia su horizonte vital.
            </p>
            <p>
              <span>Rafa</span>
            </p>
            <p>Trabajador en Destrupapper</p>
          </div>
          <div className="card">
            <img src={user2} alt="user1" />
            <p>
              Quico, quien tras varios contratos temporales, pasó a ser
              indefinido. Logró la primera inserción socio-laboral, con la
              estabilidad que ello suponía para él, abriéndole a su vez la
              puerta a conseguir otros objetivos para mejorar su calidad de
              vida, por ejemplo independizarse.
            </p>
            <p>
              <span>Quico</span>
            </p>
            <p>Trabajador en Inkiele</p>
          </div>
          <div className="card">
            <img src={user3} alt="user1" />
            <p>
              La empresa INKIELE efectuó la segunda contratación. Tomás tuvo un
              contrato indefinido y al igual que Quico, su calidad de vida
              cambió, mejorando su bienestar emocional y su autodeterminación.
            </p>
            <p>
              <span>Tomás</span>
            </p>
            <p>Trabajador en Inkiele</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
