import React from "react";

function Tiles(props) {
  return (
    <div className="box">
      <i className={props.img}></i>
      <h2>{props.name}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default Tiles;
