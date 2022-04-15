import React from "react";
import imagone from "../images/card_7.jpeg";
function Blog() {
  return (
    <section id="Blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="ux-school-blog-head text-center">
              Recent Blog Post
            </h1>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="card ux-school-blog">
              <img className="card-img-top" src={imagone} alt="Card" />
              <div className="card-body">
                <h5 className="card-title ux-school-blox-head-txt">
                  Headline (Title)
                </h5>
                <p className="card-text ux-school-blox-head-txt">
                  Back to makerverse after a short hiatus 🙌 Every life is
                  unique and everyone approaches it…
                </p>
                <p className="ux-school-blox-head-txt">
                  Published by Shreya Saxena
                </p>
                <p className="ux-school-blox-head-txt">
                  Jun 15, 2021&nbsp;2 min read
                </p>
                <hr className="ux-school-blog-head-txt-hr"></hr>
                <i className="fa fa-heart  ux-blog-icon">
                  <span className="ux-blog-num">&nbsp;12</span>
                </i>
                <i className="far fa-comment-alt ux-blog-icon">
                  <span className="ux-blog-num">&nbsp;1</span>
                </i>
                <i className="fa fa-share-alt ux-blog-icon"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="card ux-school-blog">
              <img className="card-img-top" src={imagone} alt="Card" />
              <div className="card-body">
                <h5 className="card-title ux-school-blox-head-txt">
                  Headline (Title)
                </h5>
                <p className="card-text ux-school-blox-head-txt">
                  Back to makerverse after a short hiatus 🙌 Every life is
                  unique and everyone approaches it…
                </p>
                <p className="ux-school-blox-head-txt">
                  Published by Shreya Saxena
                </p>
                <p className="ux-school-blox-head-txt">
                  Jun 15, 2021&nbsp;2 min read
                </p>
                <hr className="ux-school-blog-head-txt-hr"></hr>
                <i className="fa fa-heart  ux-blog-icon">
                  <span className="ux-blog-num">&nbsp;12</span>
                </i>
                <i className="far fa-comment-alt ux-blog-icon">
                  <span className="ux-blog-num">&nbsp;1</span>
                </i>
                <i className="fa fa-share-alt ux-blog-icon"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="card ux-school-blog">
              <img className="card-img-top" src={imagone} alt="Card" />
              <div className="card-body">
                <h5 className="card-title ux-school-blox-head-txt">
                  Headline (Title)
                </h5>
                <p className="card-text ux-school-blox-head-txt">
                  Back to makerverse after a short hiatus 🙌 Every life is
                  unique and everyone approaches it…
                </p>
                <p className="ux-school-blox-head-txt">
                  Published by Shreya Saxena
                </p>
                <p className="ux-school-blox-head-txt">
                  Jun 15, 2021&nbsp;2 min read
                </p>
                <hr className="ux-school-blog-head-txt-hr"></hr>
                <i className="fa fa-heart  ux-blog-icon">
                  <span className="ux-blog-num">&nbsp;12</span>
                </i>
                <i className="far fa-comment-alt ux-blog-icon">
                  <span className="ux-blog-num">&nbsp;1</span>
                </i>
                <i className="fa fa-share-alt ux-blog-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Blog);
