import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// Importing the Patient Service from the Services Folder
import { getPatients } from "./../../../../../services/patientService";

export default class AllPatients extends Component {
  state = {
    patients: [],
  };

  async componentDidMount() {
    const result = await getPatients();
    const allPatients = result.data.data.patients
    this.setState({ patients: allPatients });
  }

  render() {

    return (
      <div className="row mx-n2">
        <div
          className="table-responsive"
          style={{ textAlign: "left", marginRight: "-100px" }}
        >
          <table className="table table-cards align-items-center">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.patients.map((patient) => (
                <tr key={patient._id}>
                  <td> {patient.first_name} </td>
                  <td> {patient.last_name} </td>
                  <td> {patient.email} </td>
                  <td>
                    <div className="actions">
                      <NavLink
                        to="#"
                        className="action-item mr-2 fas fa-eye"
                        data-toggle="tooltip"
                        title="Quick view"
                      >
                        <i data-feather="external-link"></i>{" "}
                      </NavLink>
                      <NavLink
                        to="#"
                        className="action-item mr-2 fas fa-edit"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        <i data-feather="edit-2"></i>{" "}
                      </NavLink>
                      <NavLink
                        to="#"
                        className="action-item text-danger mr-2 fas fa-trash-alt"
                        data-toggle="tooltip"
                        title="Move to trash"
                      >
                        <i data-feather="trash-2"></i>
                      </NavLink>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
