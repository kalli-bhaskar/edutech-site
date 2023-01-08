import React from "react";
import NavBar from "../../NavBar";
import contents from "./contents";
import Page from "./page";
import { useParams } from "react-router-dom";

function Course() {
  const { name } = useParams();

  return (
    <div>
      <NavBar />
      <h1>{name}</h1>
      {contents.map((content) => (
        <Page
          value={name}
          title={content.name}
          price={content.price}
          info={content.content}
        />
      ))}
    </div>
  );
}

export default Course;
