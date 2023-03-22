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
import { featuresData } from "./data/FeaturesData";

const Tecno = () => {
  const [devTool, setDevTool] = useState(false);
  const [pictoData, setpictoData] = useState(featuresData);

  const handleClick = () => {
    setDevTool(!devTool);
  };

  let toggleClassReact = devTool ? "clicked" : "";

  const onClick = () => {
    setDevTool(setpictoData);
    handleClick();
  };

  return (
    <>
      <div className="tecno-main">
        <div className="title"></div>
        <div className="gridContainer">
          {pictoData.map((picto) => (
            <div className={`icons ${toggleClassReact}`}>
              <h3>{picto.name}</h3>
              <img src={picto.img} alt={picto.alt} onClick={onClick} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tecno;
