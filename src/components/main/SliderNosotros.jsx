import "./SliderNosotros.css";

import cocina from "../../assets/images-center/cocina.png";
import fisioterapia from "../../assets/images-center/sala-fisioterapia.png";
import formacion from "../../assets/images-center/sala-formacion.png";
import informatica from "../../assets/images-center/informatica.png";
import ocupacional from "../../assets/images-center/sala-ocupacional.png";

const SliderNosotros = (props) => {
  return (
    <>
      <section>
        <div class="container-all">
          <input type="radio" id="1" name="image-slide" hidden />
          <input type="radio" id="2" name="image-slide" hidden />
          <input type="radio" id="3" name="image-slide" hidden />

          <div class="slide">
            <div class="item-slide">
              <img src={cocina} alt={props.alt} />
            </div>

            <div class="item-slide">
              <img src={fisioterapia} alt={props.alt} />
            </div>

            <div class="item-slide">
              <img src={formacion} alt={props.alt} />
            </div>
          </div>

          <div class="pagination">
            <label class="pagination-item" for="1">
              <img src={fisioterapia} alt={props.alt} />
            </label>

            <label class="pagination-item" for="2">
              <img src={informatica} alt={props.alt} />
            </label>

            <label class="pagination-item" for="3">
              <img src={ocupacional} alt={props.alt} />
            </label>
          </div>
        </div>
      </section>
    </>
  );
};
export default SliderNosotros;
