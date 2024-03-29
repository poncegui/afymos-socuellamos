import "./CarouselNews.css";

import {
  ContentButton,
  HomePage,
} from "../../../../components/Content/ContentStyles";
import React, { useState } from "react";

import Marquee from "./Marquee/Marquee";
import { newsData } from "./CarouselData";

const NewsCards = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <Marquee />
      <div className="news-cards-container">
        {newsData.map((newsCard) => (
          <div key={newsCard.id} className="news-card">
            <div
              className="news-card-background"
              style={{ backgroundImage: newsCard.backgroundImage }}
            ></div>
            <div className="news-card-content">
              <h2>{newsCard.title}</h2>
              <img
                className="image-news"
                src={newsCard.image}
                alt={newsCard.title}
              />
              <ContentButton
                transition={{ delay: 1, duration: 0.6 }}
                inverse={true}
              >
                <HomePage
                  onClick={handleClick}
                  href={newsCard.link}
                  alt={newsCard.alt}
                  target="_blank"
                >
                  {newsCard.buttonLabel}
                </HomePage>
              </ContentButton>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewsCards;
