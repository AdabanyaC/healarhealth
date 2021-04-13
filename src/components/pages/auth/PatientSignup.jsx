import React from "react";
import { NavLink } from "react-router-dom";
import Joi from "joi-browser";
import { registerPatient } from "./../../../services/patientService";
import Form from "./../../../common/Form";

export default class PatientSignup extends Form {
  state = {
    data: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    errors: {}
  };

  schema = {
    first_name: Joi.string().required().label("First name"),
    last_name: Joi.string().required().label("Last name"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(5).required().label("Password"),
  };

  doSubmit = async () => {
    const result = await registerPatient(this.state.data);
    console.log(result)
    console.log("Submitted.")
  };

  render() {

    const { data, errors } = this.state;
    
    return (
      <section>
        <div className="container d-flex flex-column">
          <div className="row align-items-center justify-content-center min-vh-100">
            <div className="col-md-6 col-lg-5 col-xl-5 py-6 py-md-0">
              <div className="card shadow zindex-100 mb-0">
                <div className="card-body px-md-5 py-5">
                  <div className="mb-5">
                    <h6 className="h3">Create your Account</h6>
                    <p className="text-muted mb-0">
                      We can't wait to welcome you on board!{" "}
                      <span role="img" aria-label="onboarding image">
                        🚀
                      </span>
                    </p>
                  </div>
                  <span className="clearfix"></span>
                  <form onSubmit={this.handleSubmit}>
                    <div style={{ textAlign: "left" }}>
                      <div className="form-group">
                        <label
                          htmlFor="first_name"
                          className="form-control-label"
                        >
                          First Name
                        </label>
                        <div className="input-group input-group-merge">
                          <input
                            name="first_name"
                            type="text"
                            value={data.first_name}
                            onChange={this.handleChange}
                            error={errors.first_name}
                            className="form-control form-control-prepend"
                            id="input-first-name"
                            placeholder="First Name"
                          />
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i
                                data-feather="user"
                                className="fas fa-user"
                              ></i>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label
                          htmlFor="last_name"
                          className="form-control-label"
                        >
                          Last Name
                        </label>
                        <div className="input-group input-group-merge">
                          <input
                            name="last_name"
                            type="text"
                            value={data.last_name}
                            onChange={this.handleChange}
                            error={errors.last_name}
                            className="form-control form-control-prepend"
                            id="input--last-name"
                            placeholder="Last Name"
                          />
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i
                                data-feather="user"
                                className="fas fa-user"
                              ></i>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="email" className="form-control-label">
                          Email address
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i
                                data-feather="user"
                                className="fas fa-envelope-square"
                              ></i>
                            </span>
                          </div>
                          <input
                            name="email"
                            type="email"
                            value={data.email}
                            onChange={this.handleChange}
                            error={errors.email}
                            className="form-control form-control-prepend"
                            id="input-email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-0">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <label
                              htmlFor="password"
                              className="form-control-label"
                            >
                              Password
                            </label>
                          </div>
                          <div className="mb-2">
                            <a
                              href="/reset-password"
                              className="small text-muted text-underline--dashed border-primary"
                              data-toggle="password-text"
                              data-target="#input-password"
                            >
                              Forgot Password
                            </a>
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i data-feather="key" className="fas fa-lock"></i>
                            </span>
                          </div>
                          <input
                            name="password"
                            type="password"
                            value={data.password}
                            onChange={this.handleChange}
                            error={errors.password}
                            className="form-control form-control-prepend"
                            id="input-password"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="btn btn-block btn-primary">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </form>
                  ;
                </div>
                <div className="card-footer px-md-5">
                  <small>Already have an account? </small>
                  <NavLink to="/login" className="small font-weight-bold">
                    Sign In
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
