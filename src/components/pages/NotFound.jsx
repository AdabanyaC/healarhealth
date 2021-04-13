import React from "react";
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <section>
      <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-between min-vh-100">
          <div className="col-12 col-md-6 col-xl-7 order-md-2">
            <img
              alt="Placeholder"
              src="/assets/illustrations/404.svg"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-6 col-xl-5 order-md-1 text-center text-md-left">
            <h6 className="display-1 mb-3 font-weight-600 text-primary">Ooops!</h6>
            <p className="lead text-lg mb-5">
              The page you are looking for could not be found.
            </p>
            <NavLink
              to="/"
              className="btn btn-dark btn-icon hover-translate-y-n3"
            >
              <span className="btn-inner--icon">
                <i className="fas fa-home"></i>
              </span>
              <span className="btn-inner--text">Return home</span>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
