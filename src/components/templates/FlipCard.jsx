import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import AOS from "aos";
import ReactCardFlip from "react-card-flip";
import "aos/dist/aos.css";

const FlipCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlipped = (event, props) => {
    event.preventDefault();

    setIsFlipped(!isFlipped);
    console.log("click");
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div className="containerServices">
      <div className="evento">
        <ReactCardFlip
          isFlipped={isFlipped}
          flipDirection={`${props.flipDirection}`}
        >
          <div className="foto" data-aos={`${props.dataAos}`}>
            <img src={props.srcFront} alt="" onClick={handleFlipped} />
          </div>

          <div className="foto" data-aos={`${props.dataAos}`}>
            <img
              src={props.srcBack}
              alt={`${props.alt}`}
              onClick={handleFlipped}
            />
          </div>
        </ReactCardFlip>
        <Link className="service" to={`${props.to}`}>
          <h3>{props.text}</h3>
        </Link>
      </div>
      </div>
    </>
  );
};

export default FlipCard;
