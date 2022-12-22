import React from "react";
import Tiles from "./Tiles";
import Contents from "./portfolio-content";

function Portfolio() {
  return (
    <div className="cards-container">
      <h1 className="Portfolio-heading">Portfolio</h1>
      <div className="box-container">
        {Contents.map((content) => (
          <Tiles
            key={content.id}
            name={content.Name}
            img={content.imgURL}
            content={content.Content}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
