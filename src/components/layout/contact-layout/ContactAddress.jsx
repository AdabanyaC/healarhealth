import React from "react";
import { NavLink } from "react-router-dom";
import Socials from "./../Socials";

const ContactAddress = () => {
  return (
    <section class="slice slice-lg">
      <div class="container">
        <div className="row mb-5 justify-content-center text-center">
          <div className="col-lg-6">
            <span className="badge badge-soft-primary badge-pill badge-lg">
              Contact Us
            </span>
            <h2 className=" mt-4">Get in touch with us</h2>
          </div>
        </div>

        <div
          class="row row-grid justify-content-between"
          style={{ textAlign: "left" }}
        >
          <div class="col-lg-5">
            <h4>
              Covenant University <br />
              Room A202 Coveannt University Chapel <br />
              Canaanland, Ota <br />
              Ogun State, Nigeria.
            </h4>
            <p className="lead my-4">
              <i className="fa fa-envelope"></i>
              <NavLink to="/"> contact@cuevangelismteam.org</NavLink>
            </p>
            <Socials />
            <div style={{ marginTop: "20px" }}>
              <p>
                Do you have Bible questions that have been unanswered?
                <br />
                Would you like us to pray with you concerning an issue?
                <br />
                Would you like to be part of our amazing Evangelism team?
                <br />
                Get in touch with us. We're available to help.
              </p>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <h3>Say hello to us...</h3>
            <div>
              <form>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Your phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Tell us a few words ..."
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  {/* <div className="g-recaptcha" data-sitekey="6Lfs5ScUAAAAANAJwGrdfvWLFRRiVbKRE2vfoaFj"></div> */}
                  <button type="reset" className="btn-reset d-none"></button>
                  <button
                    type="submit"
                    className="btn btn-block btn-sm btn-primary mt-4"
                  >
                    Send your message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAddress;
