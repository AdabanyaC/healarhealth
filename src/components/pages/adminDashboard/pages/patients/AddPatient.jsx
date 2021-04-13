import React, { Component } from "react";
import AllPatients from "./AllPatients";

export default class AddPatient extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="slice py-5 bg-section-fade">
          {/* Modal */}
          <div
            class="modal fade"
            id="addPatient"
            tabindex="-1"
            role="dialog"
            aria-labelledby="addPatientTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  {/* <!-- Close --> */}
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>

                  {/* <!-- Image --> */}
                  <div class="text-center">
                    <img
                      src="/assets/illustrations/patient.png"
                      alt="..."
                      class="img-fluid mb-3"
                      style={{ width: "200px" }}
                    />
                  </div>

                  {/* <!-- Heading --> */}
                  <h2
                    class="font-weight-bold text-center mb-1"
                    id="vendorModalTitle"
                  >
                    Add a New Patient
                  </h2>

                  {/* <!-- Text --> */}
                  <p class="font-size-lg text-center text-muted mb-3 mb-md-4">
                    Did users find it difficult in creating accounts, create one
                    for them.
                  </p>

                  {/* <!-- Form --> */}
                  <form style={{ textAlign: "left" }}>
                    <div class="row">
                      <div class="col-12 col-md-12">
                        {/* <!-- First name --> */}
                        <div class="form-label-group">
                          <input
                            type="text"
                            class="form-control form-control-flush"
                            id="registrationFirstNameModal"
                            placeholder="First name"
                          />
                        </div>
                      </div>
                      <div class="col-12 col-md-12">
                        {/* <!-- Last name --> */}
                        <div class="form-label-group">
                          <input
                            type="text"
                            class="form-control form-control-flush"
                            id="registrationLastNameModal"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                      <div class="col-12 col-md-12">
                        {/* <!-- Email --> */}
                        <div class="form-label-group">
                          <input
                            type="email"
                            class="form-control form-control-flush"
                            id="registrationLastNameModal"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="col-12 col-md-12">
                        {/* <!-- Password --> */}
                        <div class="form-label-group">
                          <input
                            type="password"
                            class="form-control form-control-flush"
                            id="registrationLastNameModal"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                    </div>
                    

                    <div class="row">
                      <div class="col-12">
                        {/* <!-- Submit --> */}
                        <button class="btn btn-block btn-primary mt-3 lift">
                          Add Patient
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container"
            style={{ textAlign: "left", marginRight: "0" }}
          >
            <div className="row align-items-center mb-4">
              <div className="col">
                <h1 className="h4 mb-0">Registered Patients</h1>
              </div>

              <div className="col-auto">
                <div className="dropdown">
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#addPatient"
                    className="btn btn-primary btn-icon-only rounded-circle"
                  >
                    <span className="btn-inner--icon">
                      <i className="fas fa-plus"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Component for the All Patients page */}
            <AllPatients />
          </div>
        </section>
      </React.Fragment>
    );
  }
}
