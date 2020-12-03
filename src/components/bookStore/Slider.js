import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <div className="slider-area">
        <div className="slider-active owl-carousel">
          <div
            className="single-slider pt-125 pb-130 bg-img"
            style={{ backgroundImage: "url(asset-client/img/slider/1.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="slider-content slider-animated-1 text-center">
                    <h1>Huge Sale</h1>
                    <h2>koparion</h2>
                    <h3>Now starting at £99.00</h3>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="single-slider slider-h1-2 pt-215 pb-100 bg-img"
            style={{ backgroundImage: "url(asset-client/img/slider/2.jpg)" }}
          >
            <div className="container">
              <div className="slider-content slider-content-2 slider-animated-1">
                <h1>We can help get your</h1>
                <h2>Books in Order</h2>
                <h3>and Accessories</h3>
                <a href="#">Contact Us Today!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
