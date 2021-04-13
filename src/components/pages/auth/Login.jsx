import React from "react";
import { NavLink } from "react-router-dom";
import Joi from "joi-browser";
import { loginPatient } from "./../../../services/patientService";
import Form from "./../../../common/Form";

export default class Login extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(5).required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { data: jwt } = await loginPatient(data.email, data.password);
      localStorage.setItem("token", jwt.token)
      this.props.history.replace("/patient/dashboard")

    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
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
                    <h6 className="h3">Login</h6>
                    <p className="text-muted mb-0">
                      Sign in to your account to continue.
                    </p>
                  </div>
                  <span className="clearfix"></span>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group" style={{ textAlign: "left" }}>
                      <label className="form-control-label">
                        Email address
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i data-feather="user" className="fas fa-user"></i>
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
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <label className="form-control-label">Password</label>
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
                        Login
                      </button>
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
  }
}
