import React from "react";
import "../components/card.css";

const Cards = (props) => {
  return (
    <div>
      <div>
        <img src={props.imgsrc} alt="Image" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">Ayo</p>
        <a href="#" className="btn btn-outline-success">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Cards;
