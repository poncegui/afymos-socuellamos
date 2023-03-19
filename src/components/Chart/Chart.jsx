import ProfileChart from "./ProfileChart";
import NavBarTemplate from "../templates/NavBarTemplate";
import image from "../../images-chart/chart1.jpg";
import image2 from "../../images-chart/chart2.jpg";
import image3 from "../../images-chart/chart3.jpg";
import image4 from "../../images-chart/chart4.jpg";
import image5 from "../../images-chart/chart5.jpg";
import image6 from "../../images-chart/chart6.jpg";
import image7 from "../../images-chart/chart7.jpg";
import image8 from "../../images-chart/chart8.jpg";
import image9 from "../../images-chart/chart9.jpg";
import image10 from "../../images-chart/chart10.jpg";
import image11 from "../../images-chart/chart11.jpg";
import image12 from "../../images-chart/chart12.jpg";
import image13 from "../../images-chart/chart13.jpg";
import image14 from "../../images-chart/chart14.jpg";
import image15 from "../../images-chart/chart15.jpg";
import image16 from "../../images-chart/chart16.jpg";
import image17 from "../../images-chart/chart17.jpg";
import image18 from "../../images-chart/chart18.jpg";
import image19 from "../../images-chart/chart19.jpg";
import image20 from "../../images-chart/chart20.jpg";

import Footer from "../Footer";

const Chart = () => {
  return (
    <>
      <NavBarTemplate title="junta directiva" alt="" />
      <div className="backgroundChart">Junta Directiva</div>

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
          src={image5}
          href="https://acortar.link/tvNjS0"
          name="Lourdes Requena"
          profession="educadora social"
          position="directora general afymos"
        />

        <ProfileChart
          src={image6}
          href="https://acortar.link/tvNjS0"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="la de las webs"
        />
        <ProfileChart
          src={image7}
          href="https://acortar.link/tvNjS0"
          name="Lourdes Requena"
          profession="educadora social"
          position="directora general afymos"
        />

        <ProfileChart
          src={image8}
          href="https://acortar.link/tvNjS0"
          name="Victoria Moreno Sáez"
          profession="Tecnico"
          position="la de las webs"
        />
      </div>

      <div className="containerChart">
        <ProfileChart
          src={image9}
          href="https://acortar.link/tvNjS0"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="la de las webs"
        />
        <ProfileChart
          src={image10}
          href="https://acortar.link/tvNjS0"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="la de las webs"
        />
        <ProfileChart
          src={image11}
          href="https://acortar.link/tvNjS0"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="la de las webs"
        />
        <ProfileChart
          src={image12}
          href="https://acortar.link/tvNjS0"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="la de las webs"
        />
      </div>
      <div className="containerChart">
        <ProfileChart
          src={image13}
          href="https://acortar.link/tvNjS0"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="la de las webs"
        />
        <ProfileChart
          src={image14}
          href="https://acortar.link/tvNjS0"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="la de las webs"
        />
        <ProfileChart
          src={image15}
          href="https://acortar.link/tvNjS0"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="la de las webs"
        />
        <ProfileChart
          src={image16}
          href="https://acortar.link/tvNjS0"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="la de las webs"
        />
      </div>
      <div className="containerChart">
        <ProfileChart
          src={image17}
          href="https://acortar.link/tvNjS0"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="la de las webs"
        />
        <ProfileChart
          src={image18}
          href="https://acortar.link/tvNjS0"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="la de las webs"
        />
        <ProfileChart
          src={image19}
          href="https://acortar.link/tvNjS0"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="la de las webs"
        />
        <ProfileChart
          src={image20}
          href="https://acortar.link/tvNjS0"
          name="Pilar Alarcón"
          profession="Licenciada"
          position="la de las webs"
        />
      </div>

      <button>Descargar estatutos</button>
      <button>Cuentas anuales</button>

      <Footer />
    </>
  );
};

export default Chart;
