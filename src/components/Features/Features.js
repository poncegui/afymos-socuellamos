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
