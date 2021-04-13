import React from "react";
import { NavLink } from "react-router-dom";

const AboutInfo = () => {
  return (
    <section class="slice py-5 pb-lg-7">
      <div class="container">
        <div class="row row-grid justify-content-between align-items-center">
          <div class="col-12 col-md-5 col-lg-6">
            <figure>
              <img
                alt="Placeholder"
                src="/assets/images/bg-1.jpg"
                class="card-img shadow-lg position-relative zindex-100"
              />
            </figure>
            <div class="w-75 position-absolute bottom-n5 left-n5 rotate-180">
              <img
                src="/assets/illustrations/bubble-1.svg"
                class="svg-inject fill-section-secondary"
                alt="Placeholder"
              />
            </div>
          </div>
          <div class="col-12 col-md-7 col-lg-5">
            <h1 class="h2 text-center text-md-left mb-4">
              You're now 1cm away from health care
            </h1>
            <p class="lead text-center text-md-left text-muted">
              Healar Health is using algorithms and technology to interpret your
              symptoms and diagnose your disease. More than that, we are
              connecting you with the best medical professionals around you for
              treatment where applicable. Learn more about your disease through
              our medical library and keep track of your health records and
              history.
            </p>
            <div class="text-center text-md-left mt-5">
              <NavLink to="/sign-up" class="btn btn-primary btn-icon">
                <span class="btn-inner--text">Create an Account</span>
                <span class="btn-inner--icon">
                  {" "}
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
    </section>
  );
};

export default AboutInfo;
