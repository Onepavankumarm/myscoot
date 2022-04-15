import React from "react";
import { Link } from "react-scroll";
function Header() {
  return (
    <section id="header">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top ux-school-navbar ">
        <Link
          className="navbar-brand ux-school-logo"
          to="header"
          spy={true}
          smooth={true}
        >
          UX School.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="ux-school-close-btn">MENU</span>
        </button>
        <div className="collapse navbar-collapse " id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ux-school-nav-item">
              <Link
                className="nav-link ux-school-nav-link"
                to="aboutus"
                spy={true}
                smooth={true}
              >
                About
              </Link>
            </li>
            <li className="nav-item ux-school-nav-item">
              <Link
                className="nav-link ux-school-nav-link"
                to="Offerings"
                spy={true}
                smooth={true}
              >
                Offerings
              </Link>
            </li>
            <li className="nav-item ux-school-nav-item">
              <Link
                className="nav-link ux-school-nav-link"
                to="Testimonials"
                spy={true}
                smooth={true}
              >
                Testimonials
              </Link>
            </li>
            <li className="nav-item ux-school-nav-item">
              <Link
                className="nav-link ux-school-nav-link"
                to="Portfolio"
                spy={true}
                smooth={true}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item ux-school-nav-item">
              <Link
                className="nav-link ux-school-nav-link"
                to="Blog"
                spy={true}
                smooth={true}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item ux-school-nav-item">
              <hr className="ux-school-nav-hr"></hr>
              <button
                type="button"
                className="btn btn-light ux-school-nav-btn btn-sm"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default React.memo(Header);
