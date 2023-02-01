import React from "react";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <div className="box">
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <p>{props.content}</p>
      <Link to={`${props.name}`} className="btn">
        View more
      </Link>
    </div>
  );
}

export default Cards;
