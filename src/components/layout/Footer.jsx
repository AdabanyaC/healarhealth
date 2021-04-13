import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="position-relative" id="footer-main">
      <div className="footer pt-lg-7 footer-dark bg-dark">
        {/* <!-- Footer --> */}
        <div className="container pt-4">
          <div className="row" style={{ textAlign: "left" }}>
            <div className="col-lg-4 mb-5 mb-lg-0">
              {/* <!-- Theme's logo --> */}
              <NavLink to="index.html">
                {/* <img alt="Placeholder" src="assets/img/brand/light.svg" id="footer-logo" /> */}
                <h3 style={{ color: "#fff" }}>Healar Health</h3>
              </NavLink>
              {/* <!-- Webpixels' mission --> */}
              <p className="mt-4 text-sm opacity-8 pr-lg-4">
                Healar Health is working hard to provide accessible and
                affordable health everywhere. Beyond that, we are bringing you
                the best investment opportunities in the health industry to grow
                your wealth.
              </p>
              {/* <!-- Social --> */}
              <ul className="nav mt-4">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/"
                    target="_blank"
                  >
                    <i className="fab fa-facebook"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/"
                    target="_blank"
                  >
                    <i className="fab fa-twitter"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
              <h6 className="heading mb-3">Product</h6>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/investments">Investments</NavLink>
                </li>
                <li>
                  <NavLink to="/faqs">FAQs</NavLink>
                </li>
                <li>
                  <NavLink to="/careers">Careers</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
              <h6 className="heading mb-3">Resources</h6>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/topics">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/medical-library">Medical Library</NavLink>
                </li>
                <li>
                  <NavLink to="/press">Press</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
              <h6 className="heading mb-3">Legal</h6>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/terms-and-conditions">Terms and Conditions</NavLink>
                </li>
                <li>
                  <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <hr className="divider divider-fade divider-dark my-4" />
          <div className="row align-items-center justify-content-md-between pb-4">
            <div className="col-md-12">
              <div className="copyright text-sm font-weight-bold text-center">
                &copy; 2020{" "}
                <NavLink
                  to="https://webpixels.io"
                  className="font-weight-bold"
                  target="_blank"
                >
                  Healar Health, Nigeria
                </NavLink>
                . All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
