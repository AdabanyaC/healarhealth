import React from "react";
import { NavLink } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="slice slice-lg">
      <div className="container position-relative">
        <div className="card shadow-lg border-0 zindex-100">
          <div className="card-body px-5 py-5 text-center text-md-left">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h4 className="h5 mb-2">
                  Get in touch with us for more enquiries or suggestions.
                </h4>
                <p className="mb-0">
                  Do you have an idea of how we can improve our service, contact
                  us. Also, check out our <NavLink to="/faqs">FAQs</NavLink> for
                  more information.
                </p>
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-0 text-md-right">
                <NavLink to="/contact" className="btn btn-info btn-icon rounded-pill">
                  <span className="btn-inner--icon">
                    <i data-fea ther="phone" className="fas fa-phone-alt"></i>{" "}
                  </span>
                  <span className="btn-inner--text">Contact us</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="w-10 position-absolute bottom-n3 left-n5">
          <img
            alt="Placeholder"
            src="/assets/illustrations/bubble-1.svg"
            className="svg-inject fill-primary"
          />
        </div>
        <div className="w-10 position-absolute top-n5 right-n5">
          <img
            alt="Placeholder"
            src="/assets/illustrations/bubble-1.svg"
            className="svg-inject fill-dark"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
