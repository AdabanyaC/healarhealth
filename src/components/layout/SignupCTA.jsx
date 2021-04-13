import React from "react";
import { NavLink } from "react-router-dom";

const SignupCTA = () => {
  return (
    <section className="slice slice-lg">
      <div className="container-fluid">
        <div className="jumbotron bg-dark shadow-lg mb-0">
          <img
            src="/assets/illustrations/dot-map.svg"
            alt="placeholder"
            className="img-fluid img-as-bg opacity-7"
          />
          <div className="container">
            <div className="row py-6" style={{ textAlign: "center" }}>
              <div className="col-lg-12">
                <h2 className="h3 lh-140 text-white">
                  Healar Health is working tirelessly to provide affordable and
                  accessible healthcare everywhere. Take symptom assessment
                  tests, access your health records and connect with the best
                  medical doctors around you.
                </h2>
                <div className="mt-5">
                  <NavLink
                    to="/sign-up"
                    className="btn btn-lg btn-light btn-icon mb-3 mb-lg-0"
                  >
                    <span className="btn-inner--text">Create an Account</span>
                    <span className="btn-inner--icon">
                      <i
                        data-feather="arrow-right"
                        className="fas fa-arrow-right"
                      ></i>
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupCTA;
