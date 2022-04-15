import React from "react";

function Footer() {
  return (
    <section className="ux-school-foooter">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div>
              <p className="ux-footer-text">Privacy Policy</p>
              <p className="ux-footer-text">Terms of Use</p>
              <p className="ux-footer-text">Made with ❤️ in India</p>
            </div>
          </div>
          <div className="col">
            <div className="float-right ux-school-powered">
              <p className="ux-footer-text ux-footer-text-powered ">
                Powered By Exly
              </p><br></br>
              <p className="ux-footer-text ux-footer-text-powered">
                © 2021 Sahil Lavingia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Footer);
