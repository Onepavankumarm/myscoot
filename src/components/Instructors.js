import React from "react";
import cardthree from "../images/card_3.jpeg";
import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
function Instructors() {
  return (
    <section id="Testimonials">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="ux-school-Instructors text-center">
              World-class Instructors
            </h1>
          </div>
          <Carousel
            itemsToShow={3}
            pagination={true}
            showArrows={false}
            breakPoints={breakPoints}
          >
            <div className="col-lg-12">
              <div className="card ux-school-card-Instructors">
                <img
                  className="card-img-top ux-school-card-Instructors-img"
                  src={cardthree}
                  alt="Card"
                />
                <div className="card-body">
                  <div className="ux-school-card-Instructors-icon">
                    <span className="fa fa-facebook ux-school-instructer-icon"></span>
                    <span className="fa fa-twitter ux-school-instructer-icon"></span>
                    <span className="fa fa-google ux-school-instructer-icon"></span>
                    <span className="fa fa-linkedin ux-school-instructer-icon"></span>
                  </div>
                  <h4 className="card-title ux-school-Instructors-head">
                    Priyanka Singha
                  </h4>
                  <h4 className="card-title">UX Designer</h4>
                  <hr className="ux-school-card-head-txt-hr"></hr>
                  <p className="card-text ux-school-Instructors-head-txt">
                    Hi, I’m Mikki Kendall. I write. A lot. Most of what you’ll
                    see me write is non fiction.
                  </p>
                  <a href="./">
                    <u>Show more...</u>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card ux-school-card-Instructors">
                <img
                  className="card-img-top ux-school-card-Instructors-img"
                  src={cardthree}
                  alt="Card"
                />
                <div className="card-body">
                  <div className="ux-school-card-Instructors-icon">
                    <span className="fa fa-facebook ux-school-instructer-icon"></span>
                    <span className="fa fa-twitter ux-school-instructer-icon"></span>
                    <span className="fa fa-google ux-school-instructer-icon"></span>
                    <span className="fa fa-linkedin ux-school-instructer-icon"></span>
                  </div>
                  <h4 className="card-title ux-school-Instructors-head">
                    Priyanka Singha
                  </h4>
                  <h4 className="card-title">UX Designer</h4>
                  <hr className="ux-school-card-head-txt-hr"></hr>
                  <p className="card-text ux-school-Instructors-head-txt">
                    Hi, I’m Mikki Kendall. I write. A lot. Most of what you’ll
                    see me write is non fiction.
                  </p>
                  <a href="./">
                    <u>Show more...</u>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card ux-school-card-Instructors">
                <img
                  className="card-img-top ux-school-card-Instructors-img"
                  src={cardthree}
                  alt="Card"
                />
                <div className="card-body">
                  <div className="ux-school-card-Instructors-icon">
                    <span className="fa fa-facebook ux-school-instructer-icon"></span>
                    <span className="fa fa-twitter ux-school-instructer-icon"></span>
                    <span className="fa fa-google ux-school-instructer-icon"></span>
                    <span className="fa fa-linkedin ux-school-instructer-icon"></span>
                  </div>
                  <h4 className="card-title ux-school-Instructors-head">
                    Priyanka Singha
                  </h4>
                  <h4 className="card-title">UX Designer</h4>
                  <hr className="ux-school-card-head-txt-hr"></hr>
                  <p className="card-text ux-school-Instructors-head-txt">
                    Hi, I’m Mikki Kendall. I write. A lot. Most of what you’ll
                    see me write is non fiction.
                  </p>
                  <a href="./">
                    <u>Show more...</u>
                  </a>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Instructors);
