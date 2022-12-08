import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="https://www.naxa.com.np/792f5bf2487bd27628a54fe64a712630.png"
              alt="logo"
            />
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/services">
                  Services
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Portfolio
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      General
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      International
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      General
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      International
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Events and Media
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      General
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      International
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
       
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blogs
                </a>
              </li>
            </ul>
            <a href="/contact">
              <button type="button" className="btn btn-warning">
                <span>Let's talk</span>
                <ArrowForwardIcon />
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
