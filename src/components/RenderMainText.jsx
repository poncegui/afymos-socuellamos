const renderMainText = (props) => {
  if (props.toggleStatusMain === true) {
    return (
      <>
        <br></br>{" "}
        <div className="article__pharagraf">
          <h4>Artículo 3.-</h4>
          <br></br>
          <p className="article__pharagraf--hideText" id="hideText">
            "Los fines que la Asociación persigue son de carácter cívico y
            social, de promoción de los valores constitucionales y de los
            derechos humanos de las personas con discapacidad intelectual,
            física o sensorial. Impulsará la asistencia social, promoción,
            asesoramiento y protección de los núcleos familiares con algún
            miembro discapacitado. Fomentará la igualdad de oportunidades entre
            personas con discapacidad y sin ella para favorecer la tolerancia y
            el respeto hacia todos, cualesquiera que fuesen sus diferencias,
            implicando a la sociedad a través de la información, prestando
            especial atención al impulso del voluntariado.”
          </p>
          <br></br>
          <br></br>

          <h4>Artículo 4.-</h4>
          <br></br>
          <p className="article__pharagraf--hideText" id="hideText">
            "Para el cumplimiento de los fines asociativos se realizarán las
            siguientes acciones: Formación ocupacional dirigida a la inserción
            laboral, programas que garanticen e impulsen su autonomía personal,
            terapias rehabilitadoras y cualquier otra actividad formativa o
            lúdica que beneficie al colectivo objeto de esta Asociación.
            Asesoramiento y orientación a los socios y sus familias, así como
            cualquier otra acción que forme, informe o divulgue sobre cualquier
            aspecto que ataña a los intereses de los asociados.”
          </p>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default renderMainText;
