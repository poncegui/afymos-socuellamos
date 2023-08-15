import "../../components/main/ContactForm.css";

import { Link } from "react-router-dom";
import { featuresData } from "../Features/data/FeaturesData";
import styled from "styled-components";
import { useState } from "react";

const ContactForm = () => {
  const [pictoData, setPictoData] = useState(featuresData);

  const handleUrl = (ev) => {
    setPictoData(ev.currentTarget);
  };
  return (
    <>
      <section className="contact" id="contacto">
        <IconsContainer>
          {pictoData.map((picto) => (
            <Icons key={picto.id} value={picto.name}>
              <Link to={picto.url}>
                <img src={picto.img} alt="" />
                <h3>{picto.name}</h3>
              </Link>
            </Icons>
          ))}
        </IconsContainer>
      </section>
    </>
  );
};
export default ContactForm;

const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-bottom: 2rem;
`;
const Icons = styled.div`
  flex: 1 1 25rem;
  padding: 2rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  text-align: center;
  text-decoration: none;
  img {
    height: 3rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #071c2f;
    padding: 1rem 0;
  }
  p {
    font-size: 1.2rem;
    color: #071c2f;
    padding: 0.2rem 0;
  }
  p a {
    font-size: 1.5rem;
    color: #071c2f;
    padding: 0.2rem 0;
  }
  p:hover {
    font-size: 1.5rem;
    color: #071c2f;
    padding: 0.2rem 0;
  }
  :hover {
    background-color: #ffc0bc;
  }
`;

const ButtonCard = styled.button`
  width: 8rem;
  height: 2rem;
`;
