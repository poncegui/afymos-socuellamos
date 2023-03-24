import React from "react";
import "../../styles/sass/components/expore";
import "../../styles/sass/pages/home";

import { dataTop, dataForBackPacking } from "./data/FeaturesLandingData";
import Card from "./FeaturesLandingCard";

const FeaturesLanding = () => {
  return (
    <>
      <div className="explore__container">
        <h1>{this.props.title}</h1>
        <div className="explore__container--inner">
          {this.props.data.map((item, index) => {
            return (
              <div key={index} className="explore__container--inner-card">
                <img src={item.url} alt="item" />
                <h2>{item.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <Card title="Trending Trips" data={dataTop} />
      <Card title="Weekend Trips" data={dataForBackPacking} />
      <Card title="Himalayan Escapades" data={dataTop} />
      <Card title="Adventure Courses" data={dataForBackPacking} />
    </>
  );
};
export default FeaturesLanding;
