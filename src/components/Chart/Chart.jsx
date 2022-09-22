import ProfileChart from "./ProfileChart";
import NavBarTemplate from "../templates/NavBarTemplate";
import image from "../../images-chart/chart1.jpg";
import image2 from "../../images-chart/chart2.jpg";
import image3 from "../../images-chart/chart3.jpg";
import image4 from "../../images-chart/chart4.jpg";
import logo from "../../logos/logo-afymos.png";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Chart = () => {
 
  return (
    <>
    <NavBarTemplate
    title="junta directiva"
    alt=""
    />
   

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
          src={image3}
          href="https://acortar.link/tvNjS0"
          name="Lourdes Requena"
          profession="educadora social"
          position="directora general afymos"
        />

        <ProfileChart
          src={image4}
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
          src={image3}
          href="https://acortar.link/tvNjS0"
          name="Lourdes Requena"
          profession="educadora social"
          position="directora general afymos"
        />

        <ProfileChart
          src={image4}
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
