import React, { Component } from "react";
import Cards from "./Cards";

// Import IMG's here and then fill them in

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgsrc={img1} />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img2} />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img3} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
