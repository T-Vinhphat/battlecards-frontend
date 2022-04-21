import React from "react";
import "./Card.css";

export function Card(props) {
  return (
    <div className="card">
      <div>
        <img className="picture" src={props.imgSrc} />
      </div>
      <div className="power">
        <h4>Power : {props.cardPower}</h4>
      </div>
    </div>
  );
}
