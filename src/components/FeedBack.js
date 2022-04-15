import React from "react";
import cardfour from "../images/card_4.jpeg";
import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
function FeedBack() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center ux-school-FeedBack-head">
              Student Community Feedback
            </h1>
          </div>
          <Carousel
            itemsToShow={3}
            pagination={true}
            showArrows={false}
            breakPoints={breakPoints}
          >
            <div className="col-lg-12">
              <div className="card ux-school-FeedBack-box">
                <div className="card-body">
                  <i className="fa fa-quote-left ux-school-Feedback-icon"></i>
                  <p className="card-text">
                    My experience with Saurabh has been amazing, all these years
                    I was struggling in Gym’s, changing my trainers to get my
                    desired body. From squats to weight training, tried
                    everything but then someone. recommended me Saurabh’s “Lose
                    5kgs in 5 weeks” program and the change in my body has been
                    incredible
                  </p>
                  <hr></hr>
                  <div className="ux-school-Feedback-name">
                    <img
                      src={cardfour}
                      alt="card"
                      className="ux-school-FeedBack-img"
                    />
                    <p>Parinita Singha</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card ux-school-FeedBack-box">
                <div className="card-body">
                  <i className="fa fa-quote-left ux-school-Feedback-icon"></i>
                  <p className="card-text">
                    My experience with Saurabh has been amazing, all these years
                    I was struggling in Gym’s, changing my trainers to get my
                    desired body. From squats to weight training, tried
                    everything but then someone. recommended me Saurabh’s “Lose
                    5kgs in 5 weeks” program and the change in my body has been
                    incredible
                  </p>
                  <hr></hr>
                  <div className="ux-school-Feedback-name">
                    <img
                      src={cardfour}
                      alt="card"
                      className="ux-school-FeedBack-img"
                    />
                    <p>Parinita Singha</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card ux-school-FeedBack-box">
                <div className="card-body">
                  <i className="fa fa-quote-left ux-school-Feedback-icon"></i>
                  <p className="card-text">
                    My experience with Saurabh has been amazing, all these years
                    I was struggling in Gym’s, changing my trainers to get my
                    desired body. From squats to weight training, tried
                    everything but then someone. recommended me Saurabh’s “Lose
                    5kgs in 5 weeks” program and the change in my body has been
                    incredible
                  </p>
                  <hr></hr>
                  <div className="ux-school-Feedback-name">
                    <img
                      src={cardfour}
                      alt="card"
                      className="ux-school-FeedBack-img"
                    />
                    <p>Parinita Singha</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default React.memo(FeedBack);
