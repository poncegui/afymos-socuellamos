import React, { useState } from "react";

import { Link } from "react-router-dom";
import TitleSection from "../../../components/TitleSection";
import { servicesData } from "./services/FeaturesData";
import styled from "styled-components";

const SectionServices = () => {
  const [data] = useState(servicesData);

  return (
    <>
      <TitleSection title="Servicios" inverse size marginBottom />
      <section>
        <IconsContainer>
          {data.map((item) => (
            <Icons key={item.id} value={item.name}>
              <Link to={item.url}>
                <img src={item.img} alt="" />
                <h3>{item.name}</h3>
              </Link>
            </Icons>
          ))}
        </IconsContainer>
      </section>
    </>
  );
};
export default SectionServices;

const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-bottom: 2rem;
  margin: 2rem auto;
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
    background-color: #c6b1c9;
  }
`;
