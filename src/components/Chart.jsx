import ProfileChart from "./templates/ProfileChart";
import image from "../images-chart/chart1.jpg";
import image2 from "../images-chart/chart2.jpg";
import ReactCardFlip from "react-card-flip";
import logo from "../logos/logo-afymos.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Chart = () => {
  const handleBack = () => {
    window.history.back();
    console.log("vuelvo");
  };
  return (
    <>
      <div className="hero">
        <h1>
          junta <span>directiva</span>
        </h1>
        <img
          className="header_superior__container--logo"
          src={logo}
          alt="Logo Afymos"
        />
      </div>
      <Link className="Link" to="/">
        <div className="btn">
          <button className="backBtn" onClick={handleBack}>
            <i className="fa-solid fa-circle-chevron-left"></i> volver
          </button>
        </div>
      </Link>

      <div className="containerChart">
        <ProfileChart
          src={image}
          href="https://acortar.link/tvNjS0"
          name="Lourdes Requena"
          profession="educadora social"
          position="directora general afymos"
        />

        <ProfileChart
          src={image2}
          href="https://acortar.link/tvNjS0"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="la de las webs"
        />
          <ProfileChart
          src={image}
          href="https://acortar.link/tvNjS0"
          name="Lourdes Requena"
          profession="educadora social"
          position="directora general afymos"
        />

        <ProfileChart
          src={image2}
          href="https://acortar.link/tvNjS0"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="la de las webs"
        />
  
    
      </div>
      <div className="containerChart">
        <ProfileChart
          src={image}
          href="https://acortar.link/tvNjS0"
          name="Lourdes Requena"
          profession="educadora social"
          position="directora general afymos"
        />

        <ProfileChart
          src={image2}
          href="https://acortar.link/tvNjS0"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="la de las webs"
        />
          <ProfileChart
          src={image}
          href="https://acortar.link/tvNjS0"
          name="Lourdes Requena"
          profession="educadora social"
          position="directora general afymos"
        />

        <ProfileChart
          src={image2}
          href="https://acortar.link/tvNjS0"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="la de las webs"
        />
  
    
      </div>

      <Footer />
    </>
  );
};

export default Chart;
