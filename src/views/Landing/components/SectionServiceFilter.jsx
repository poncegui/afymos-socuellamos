import React, { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { servicesData } from "./services/pictoButtonsData";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const LabelContainer = styled.div`
  position: relative;
  margin-top: 20px;
`;

const SearchInput = styled.input`
  width: 300px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const ServiceListContainer = styled.div`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
  z-index: 1;
`;

const ServiceItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: #224464;
  font-weight: bold;
  &:hover {
    background-color: #494242;
  }
  background-color: ${({ isSelected }) => (isSelected ? "#f5f5f5" : "inherit")};
`;

const ServiceName = styled.span`
  font-size: 18px;
  text-decoration: none;
  &:visited {
    color: #224464;
  }
`;

const ArrowIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 20px;
  cursor: pointer;
  color: #224464;
`;

const CircleIcon = styled(FontAwesomeIcon)`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  margin-right: 10px;
`;

const SectionServiceFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const wrapperRef = useRef(null);

  const filteredServices = servicesData.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setIsVisible(true);
  };

  const toggleListVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleServiceItemClick = (service) => {
    setSelectedService(service);
    setIsVisible(false);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      setIsVisible(true);
    }
  };

  return (
    <div>
      <h2 style={{ fontSize: "18px", marginTop: "20px" }}>
        <CircleIcon icon={faSquare} size={15} color="#c6b1c9" />
        Buscador
      </h2>
      <SearchContainer>
        <LabelContainer ref={wrapperRef}>
          <ArrowIcon onClick={toggleListVisibility}>
            {isVisible ? "▲" : "▼"}
          </ArrowIcon>
          <SearchInput
            id="searchInput"
            type="text"
            placeholder="Selecciona tu servicio..."
            value={searchTerm}
            onChange={handleChange}
            onClick={toggleListVisibility}
            onKeyPress={handleEnterPress}
            aria-label="Selecciona tu servicio"
          />
          <ServiceListContainer isVisible={isVisible}>
            {filteredServices.map((service) => (
              <ServiceItem
                key={service.id}
                onClick={() => handleServiceItemClick(service)}
                isSelected={selectedService === service}
              >
                <Link to={service.url}>
                  <ServiceName>{service.name}</ServiceName>
                </Link>
              </ServiceItem>
            ))}
          </ServiceListContainer>
        </LabelContainer>
      </SearchContainer>
    </div>
  );
};

export default SectionServiceFilter;
