import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  fixed-top" id="sideNav">
        <Link className="navbar-brand js-scroll-trigger" to="/">
          <li className="nav-item">

            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile "
                src="./img/tahapic.jpeg"
                alt="..."
              />
            </span>
          </li>
        </Link>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/education">
                Education
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/awards">
                Certifications
              </Link>
            </li>
          </ul>
        </div>
      </nav >
    </>
  );
};

export default Header;
