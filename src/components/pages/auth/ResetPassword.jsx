import React from "react";
import { NavLink } from "react-router-dom";

const ResetPassword = () => {
  return (
    <section>
      <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center min-vh-100">
          <div className="col-md-6 col-lg-5 col-xl-5 py-6 py-md-0">
            <div className="card shadow zindex-100 mb-0">
              <div className="card-body px-md-5 py-5">
                <div className="mb-5">
                  <h6 className="h3">Reset Password</h6>
                  <p className="text-muted mb-0">
                    Enter your email address to reset your password.
                  </p>
                </div>
                <span className="clearfix"></span>
                <form>
                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label className="form-control-label">Email address</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i data-feather="user" className="fas fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        id="input-email"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <NavLink to="">
                      <button
                        type="button"
                        className="btn btn-block btn-primary"
                      >
                        Confirm Email
                      </button>
                    </NavLink>
                  </div>
                </form>
              </div>
              <div className="card-footer px-md-5">
                <small>Don't have an account? </small>
                <NavLink to="/sign-up" className="small font-weight-bold">
                  Sign up
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
