import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Project(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [index1, setIndex1] = useState(0);

  const handleSelect1 = (selectedIndex1, e) => {
    setIndex1(selectedIndex1);
  };
  if (props.title === props.value) {
    return (
      <>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {props.content.map((x, i) => (
            <Carousel.Item>
              <div className="d-block w-100"></div>
              <Carousel.Caption>
                <h3>{x.a}</h3>
                <p>{x.b}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </>
    );
  }
}

export default Project;
