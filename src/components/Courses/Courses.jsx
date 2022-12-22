import React from "react";
import Cards from "./Cards";
import contacts from "./Contact";

function Courses() {
  return (
    <div className="cards-container">
      <h1 className="heading">Courses Offered</h1>
      <div className="box-container">
        {contacts.map((content) => (
          <Cards
            key={content.id}
            name={content.name}
            img={content.imgURL}
            content={content.content}
            btn={content.buttonURL}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
