import React, { Component } from "react";
import Sidenav from "../layout/Sidenav";
import Navbar from "../layout/Navbar";
// Importing the Patient Service from the Services Folder
import { getPatients } from "./../../../../services/patientService";

export default class Overview extends Component {

  state = {
    no_of_patients: [],
    patients: [],
  };

  async componentDidMount() {
    const result = await getPatients();
    const allPatients = result.data.data.patients
    const no_of_patients = allPatients.length
    this.setState({ no_of_patients });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Sidenav />
        <section className="slice py-5 bg-section-fade">
          <div
            className="container"
            style={{ textAlign: "left", marginRight: "0" }}
          >
            <div className="row align-items-center mb-4">
              <div className="col">
                <h1 className="h4 mb-0">Overview</h1>
              </div>
            </div>
            <div className="row mx-n2">
              <div className="col-lg-4 col-sm-6 px-2">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <div className="icon icon-shape icon-md bg-primary shadow-primary text-white">
                        <i className="fas fa-wallet"></i>
                      </div>
                    </div>
                    <h5 className="h3 font-weight-bolder mb-1">{ this.state.no_of_patients }</h5>
                    <span className="d-block text-sm text-muted font-weight-bold">
                      Patients
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 px-2">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <div className="icon icon-shape icon-md bg-success shadow-success text-white">
                        <i className="fas fa-cash-register"></i>
                      </div>
                    </div>
                    <h5 className="h3 font-weight-bolder mb-1">200</h5>
                    <span className="d-block text-sm text-muted font-weight-bold">
                      Doctors
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 px-2">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <div className="icon icon-shape icon-md bg-info shadow-info text-white">
                        <i className="fas fa-shopping-basket"></i>
                      </div>
                    </div>
                    <h5 className="h3 font-weight-bolder mb-1">12,000</h5>
                    <span className="d-block text-sm text-muted font-weight-bold">
                      Symptom Assessment Tests
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
