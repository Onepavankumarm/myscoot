import React from "react";

function Strength() {
  return (
    <section id="Offerings">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center ux-school-Strength-head">
              Strength in Numbers
            </h1>
          </div>
          <div className="col-lg-3 text-center ux-school-Strength-box">
            <h5 className="ux-school-Strength-head-sub">100%</h5>
            <p>Placement Guarantee</p>
          </div>
          <div className="col-lg-3 text-center ux-school-Strength-box">
            <h5 className="ux-school-Strength-head-sub">800+</h5>
            <p>Professional Trainer Network</p>
          </div>
          <div className="col-lg-3 text-center ux-school-Strength-box">
            <h5 className="ux-school-Strength-head-sub">150</h5>
            <p>3 Month Courses Completed</p>
          </div>
          <div className="col-lg-3 text-center">
            <h5 className="ux-school-Strength-head-sub">200</h5>
            <p>One Day Workshop Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Strength);
