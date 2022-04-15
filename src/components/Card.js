import React from "react";
import cardone from "../images/card_1.jpeg";
import cardthree from "../images/card_3.jpeg";

function Card() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ">
            <div className="ux-school-card-head">
              Pick a Course to Get Started
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="card ux-school-card">
              <img className="card-img-top" src={cardone} alt="Card" />
              <div className="card-body">
                <div className="ux-school-amount">₹2000</div>
                <h4 className="card-title ux-school-card-head-txt">
                  Creative thinking
                </h4>
                <p className="card-text">
                  ₹ 2000 for 1 month | Monthly Payments | For 12 Months course
                </p>
                <hr className="ux-school-card-head-txt-hr"></hr>
                <span className="btn ux-school-card-btn">Book A Spot</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="card ux-school-card">
              <img className="card-img-top" src={cardthree} alt="Card" />
              <div className="card-body">
                <div className="ux-school-amount">₹2000</div>
                <h4 className="card-title ux-school-card-head-txt">
                  Design thinking
                </h4>
                <p className="card-text">
                  ₹ 2000 for 1 month | Monthly Payments | For 12 Months course
                </p>
                <hr className="ux-school-card-head-txt-hr"></hr>
                <span className="btn ux-school-card-btn">Book A Spot</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="card ux-school-card">
              <img className="card-img-top" src={cardthree} alt="Card" />
              <div className="card-body">
                <div className="ux-school-amount">₹2000</div>
                <h4 className="card-title ux-school-card-head-txt">Thinking</h4>
                <p className="card-text">
                  ₹ 2000 for 1 month | Monthly Payments | For 12 Months course
                </p>
                <hr className="ux-school-card-head-txt-hr"></hr>
                <span className="btn ux-school-card-btn">Book A Spot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Card);
