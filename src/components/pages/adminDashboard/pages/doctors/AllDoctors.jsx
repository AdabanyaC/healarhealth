import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// Importing the Patient Service from the Services Folder
import { getDoctors } from './../../../../../services/doctorService';

export default class AllDoctors extends Component {
  state = {
    doctors: []
  }

  async componentDidMount() {
    const result = await getDoctors();
    const allDoctors = result.data.data.doctors
    this.setState({ doctors: allDoctors });
  }

  render() {
    return (
      <div className="row mx-n2">
        <div
          className="table-responsive"
          style={{ textAlign: "left", marginRight: "0" }}
        >
          <table className="table table-cards align-items-center">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Specialization</th>
                <th scope="col">Years of Experience</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.doctors.map((doctor) => (
                <tr key={doctor._id}>
                  <td> {doctor.first_name} </td>
                  <td> {doctor.last_name} </td>
                  <td> {doctor.email} </td>
                  <td> {doctor.phone_number} </td>
                  <td> {doctor.specialization} </td>
                  <td> {doctor.experience} </td>
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
