import React from "react";

function Banner() {
  return (
    <section className="ux-school-banner">
      <div className="container">
        <div className="col-lg-12">
          <h1 className="ux-school-banner-header">
            Master the Skills to Drive<br></br> your Career.
          </h1>
          <p className="ux-school-banner-txt">
            Far far away, behind the word mountains, far from the countries
            <br></br>
            Vokalia and Consonantia, there live the blind texts. Separated
            <br></br>
            they live in Bookmarksgrove.
          </p>
          <button className="btn ux-school-banner-btn">Get In Touch</button>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Banner);
