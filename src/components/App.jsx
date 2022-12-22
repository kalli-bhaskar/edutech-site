import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Courses from "./Courses/Courses";
import Portfolio from "./portfolio/Portfolio";
import About from "./About";

function App() {
  return (
    <div className="main">
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="courses">
        <Courses />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
}

export default App;
