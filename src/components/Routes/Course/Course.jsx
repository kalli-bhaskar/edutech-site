import React from "react";
import NavBar from "../../NavBar";
import contents from "./props/contents";
import Page from "./props/page";
import Bubble from "./props/Bubble";
import Table from "./props/Table";
import table from "./props/table";
import { useParams } from "react-router-dom";
import bubble from "./props/bubble";
import Benefits from "./props/Benefits";
import benefits from "./props/benefits";
import Project from "./props/Project";
import project from "./props/project";

function Course() {
  const { name } = useParams();

  return (
    <>
      <NavBar />
      <section id="course-page">
        <div className="text-container">
          <div>
            {contents.map((content) => (
              <Page
                value={name}
                title={content.Title}
                content={content.content}
                content_2={content.about_content}
              />
            ))}
          </div>
        </div>
        <div className="bubble-container">
          {bubble.map((content) => (
            <Bubble
              value={name}
              title={content.title}
              or_price={content.or_price}
              price={content.price}
            />
          ))}
        </div>
      </section>
      <section id="pg-2">
        <div className="learn-container">
          <h1>What you will Learn</h1>
          <div className="grid-container">
            {table.map((content) => (
              <Table
                value={name}
                title={content.title}
                content={content.content}
              />
            ))}
          </div>
        </div>

        {/* Course benefits carousel */}
        <div className="course-container">
          <h1>Course Benefits</h1>
          {benefits.map((content) => (
            <Benefits
              value={name}
              title={content.title}
              content={content.content}
            />
          ))}
        </div>

        <div className="course-container">
          <h1>Industry Projects</h1>
          <p>
            Existing ways of learning through video-based courses and expensive
            boot camps aren't as effective when it comes to solving real-world
            tech problems. ‍
          </p>
          {project.map((content) => (
            <Project
              value={name}
              title={content.title}
              content={content.content}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Course;
