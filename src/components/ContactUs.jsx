import { useForm } from "react-hook-form";
//import emailjs from '@emailjs/browser';
import NavBarTemplate from "../components/templates/NavBarTemplate";
import logo from "../logos/logo-afymos.png";

const ContactUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (e, data) => {
    e.preventDefault();
    console.log(data);
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
  };

  return (
    <>
      <NavBarTemplate title="Contacta con nosotros" />
      <div className="completeHtml background">
        <div className="container">
          <div className="contact-wrapper animated bounceInUp">
            <div className="contact-form">
              <h1>contáctanos</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label>nombre</label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                  />
                  {errors.nombre?.type === "required" && <p>campo requerido</p>}
                </div>
                <div>
                  <label>e-mail</label>
                  <input
                    type="email"
                    {...register("e-mail", { required: true })}
                  />
                  {errors.email?.type === "required" && <p>campo requerido</p>}
                </div>
                <div>
                  <label>teléfono</label>
                  <input type="tel" {...register("tel")} />
                </div>
                <div>
                  <label>asunto</label>
                  <input
                    type="text"
                    {...register("issue", { required: true })}
                  />
                </div>
                <div className="block">
                  <label>mensaje</label>
                  <textarea
                    {...register("message", { required: true })}
                    rows="3"
                  ></textarea>
                </div>

                <input className="button" type="submit" value="enviar" />
              </form>
            </div>
            <div className="contact-info">
              <h3>más información</h3>
              <div className="moreInfo">
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt"></i> c. Pedro Arias, 87
                  </li>
                  <li>
                    <i className="fas fa-phone"></i> 926 530 509
                  </li>
                  <li>
                    <i className="fas fa-envelope-open-text"></i>{" "}
                    afymos@gmail.com
                  </li>
                </ul>
              </div>
              <div className="img">
                <img src={logo} alt="logo-afymos"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
