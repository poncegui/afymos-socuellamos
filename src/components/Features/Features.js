// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Container, Section } from "../../globalStyles";
// import {
//   FeatureText,
//   FeatureTitle,
//   FeatureWrapper,
//   FeatureColumn,
//   FeatureImageWrapper,
//   FeatureName,
//   FeatureTextWrapper,
// } from "./FeaturesStyles";
// import { pictoAccessibility } from "../main/services/ApiMainMenu";

// const Features = () => {
//   const [pictos] = useState(pictoAccessibility);
//   const [clicked, setClicked] = useState(false);
//   const handleClick = () => {
//     setClicked(!clicked);
//   };

//   return (
//     <Section inverse>
//       <Container>
//         <FeatureTextWrapper>
//           <FeatureTitle>¿Qué ofrecemos?</FeatureTitle>
//         </FeatureTextWrapper>
//         <FeatureWrapper>
//           {pictos.map((picto) => (
//             <Link onClick={handleClick} to={picto.url}>
//               <FeatureColumn key={picto.id}>
//                 <FeatureImageWrapper>
//                   <img src={picto.src} alt={picto.alt} />
//                 </FeatureImageWrapper>
//                 <FeatureName>{picto.name}</FeatureName>
//                 <FeatureText>{picto.description}</FeatureText>
//               </FeatureColumn>
//             </Link>
//           ))}
//         </FeatureWrapper>
//       </Container>
//     </Section>
//   );
// };

// export default Features;

import { useState } from "react";
import "../../styles/layout/features.css";

import viviendaSocial from "../../pictogramas/vivienda-social.png";
import centroDiversidad from "../../pictogramas/social.png";
import cuentas from "../../pictogramas/contabilidad.png";
import organigrama from "../../pictogramas/organigrama.png";
import formacion from "../../pictogramas/educacion.png";
import servicios from "../../pictogramas/terapia-fisica.png";
import familias from "../../pictogramas/familia.png";
import voluntariado from "../../pictogramas/apoyo.png";
import inserccionLaboral from "../../pictogramas/busqueda-de-trabajo.png";

const Tecno = () => {
  const [devTool, SetdevTool] = useState("Menú | Servicios");
  const [btnClassHtml, SetbtnClassHtml] = useState("icons");
  const [btnClassReact, SetbtnClassReact] = useState("icons");
  const [btnClassSql, SetbtnClassSql] = useState("icons");
  const [btnClassJs, SetbtnClassJs] = useState("icons");
  const [btnClassNode, SetbtnClassNode] = useState("icons");
  const [btnClassGit, SetbtnClassGit] = useState("icons");
  const [btnClassCss, SetbtnClassCss] = useState("icons");
  const [btnClassGithub, SetbtnClassGithub] = useState("icons");
  const [btnClassJira, SetbtnClassJira] = useState("icons");

  const handleClassJira = () => {
    SetbtnClassJira(!btnClassJira);
  };
  const handleClassReact = () => {
    SetbtnClassReact(!btnClassReact);
  };
  const handleClassNode = () => {
    SetbtnClassNode(!btnClassNode);
  };

  const handleClassGithub = () => {
    SetbtnClassGithub(!btnClassGithub);
  };
  const handleClassHtml = () => {
    SetbtnClassHtml(!btnClassHtml);
  };
  const handleClassGit = () => {
    SetbtnClassGit(!btnClassGit);
  };
  const handleClassJs = () => {
    SetbtnClassJs(!btnClassJs);
  };

  const handleClassSql = () => {
    SetbtnClassSql(!btnClassSql);
  };

  const handleClassCss = () => {
    SetbtnClassCss(!btnClassCss);
  };

  let toggleClassReact = btnClassReact ? "clicked" : "";
  let toggleClassJs = btnClassJs ? "clicked" : "icons";
  let toggleClassNode = btnClassNode ? "clicked" : "icons";
  let toggleClassGit = btnClassGit ? "clicked" : "icons";
  let toggleClassSql = btnClassSql ? "clicked" : "icons";
  let toggleClassHtml = btnClassHtml ? "clicked" : "icons";
  let toggleClassCss = btnClassCss ? "clicked" : "icons";
  let toggleClassGithub = btnClassGithub ? "clicked" : "icons";
  let toggleClassJira = btnClassJira ? "clicked" : "icons";

  const selectReact = () => {
    SetdevTool("Centro Diversidad");
    handleClassReact();
  };

  const selectJs = () => {
    SetdevTool("Vivienda Social");
    handleClassJs();
  };
  const selectNode = () => {
    SetdevTool("Terapias");
    handleClassNode();
  };
  const selectSql = () => {
    SetdevTool("Inserción laboral");
    handleClassSql();
  };
  const selectGit = () => {
    SetdevTool("Programas de formación");
    handleClassGit();
  };
  const selectHtml = () => {
    SetdevTool("Apoyo a familias");
    handleClassHtml();
  };
  const selectCss = () => {
    SetdevTool("Voluntariado");
    handleClassCss();
  };
  const selectGithub = () => {
    SetdevTool("Organigrama");
    handleClassGithub();
  };
  const selectJira = () => {
    SetdevTool("Cuentas anuales");
    handleClassJira();
  };

  return (
    <>
      <div className="tecno-main">
        <div className="title">
          <h3>{devTool}</h3>
        </div>
        <div className="gridContainer">
          <div className={`icons ${toggleClassReact}`}>
            <img
              src={viviendaSocial}
              alt="vivienda-social"
              onClick={selectReact}
            />
          </div>
          <div className={`icons ${toggleClassJs}`}>
            <img
              src={centroDiversidad}
              alt="Vivienda-socialt"
              onClick={selectJs}
            />
          </div>
          <div className={`icons ${toggleClassNode}`}>
            <img src={servicios} alt="logo node" onClick={selectNode} />
          </div>
          <div className={`icons ${toggleClassSql}`}>
            <img src={inserccionLaboral} alt="logo sql" onClick={selectSql} />
          </div>
          <div className={`icons ${toggleClassGit}`}>
            <img src={formacion} alt="logo git" onClick={selectGit} />
          </div>
          <div className={`icons ${toggleClassHtml}`}>
            <img src={familias} alt="Formación" onClick={selectHtml} />
          </div>
          <div className={`icons ${toggleClassCss}`}>
            <img src={voluntariado} alt="logo css" onClick={selectCss} />
          </div>
          <div className={`icons ${toggleClassGithub}`}>
            <img src={organigrama} alt="logo github" onClick={selectGithub} />
          </div>
          <div className={`icons ${toggleClassJira}`}>
            <img src={cuentas} alt="logo-cuentas" onClick={selectJira} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tecno;
