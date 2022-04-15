import React from "react";
import imgone from "../images/card_5.jpeg";
import imgTwo from "../images/card_6.jpeg";
function Protfolio() {
  return (
    <section id="Portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="ux-school-Portfolio text-center">Portfolio</h1>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 ux-school-box">
            <img
              src={imgone}
              alt="Portfolio"
              className="ux-school-Portfolio-img"
            />
            <img
              src={imgone}
              alt="Portfolio"
              className="ux-school-Portfolio-img"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 ux-school-box">
            <img
              src={imgone}
              alt="Portfolio"
              className="ux-school-Portfolio-img"
            />
            <img
              src={imgone}
              alt="Portfolio"
              className="ux-school-Portfolio-img"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 ux-school-box">
            <img
              src={imgTwo}
              alt="Portfolio"
              className="ux-school-Portfolio-img ux-school-Portfolio-img-offset"
            />
            <img
              src={imgTwo}
              alt="Portfolio"
              className="ux-school-Portfolio-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Protfolio);
