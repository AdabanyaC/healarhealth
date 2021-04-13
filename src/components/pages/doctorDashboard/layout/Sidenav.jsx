import React from "react";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="sidebar-sticky pt-3" style={{ textAlign: "left" }}>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Health</span>
          <NavLink
            className="d-flex align-items-center text-muted"
            to="#"
            aria-label="Add a new report"
          >
            <span data-feather="plus-circle"></span>
          </NavLink>
        </h6>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              <span className="fas fa-thermometer side-nav-icon"></span>
              Appointments
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              <span className="fas fa-history side-nav-icon"></span>
              History
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              <span className="fas fa-coins side-nav-icon"></span>
              Payments
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidenav;
