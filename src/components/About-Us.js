import React from "react";
import aboutus from "../images/aboutus.jpeg";
function AboutUs() {
  return (
    <section id="aboutus">
      <div className="container">
        <div className="row ux-school-aboutus">
          <div className="col-sm-6 order-sm-12">
            <img
              src={aboutus}
              alt="about us"
              className="ux-school-aboutus-img"
            />
          </div>
          <div className="col-sm-6 order-sm-1 ux-school-aboutus-txt">
            <div>
              <h1 className="ux-school-aboutus-head">About UX School</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove. Like the majority of us, we enjoyed
                college but never used the things we learned there. Later, after
                stepping into the real world of work culture, we struggled to
                figure out how to do things and grow in our professions and
                career. Growthschool is now there to save you where we bring in
                the top mentors who teach real, actional and practical things
                that you can apply in the real world.
              </p>
              <div>
                <span className="fa fa-facebook ux-school-aboutus-icon"></span>
                <span className="fa fa-twitter ux-school-aboutus-icon"></span>
                <span className="fa fa-google ux-school-aboutus-icon"></span>
                <span className="fa fa-linkedin ux-school-aboutus-icon"></span>
                <span className="fa fa-youtube ux-school-aboutus-icon"></span>
                <span className="fa fa-instagram ux-school-aboutus-icon"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(AboutUs);
