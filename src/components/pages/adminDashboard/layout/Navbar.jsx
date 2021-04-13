import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <NavLink className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="#">
        <img
          alt="Placeholder"
          src="/assets/images/avi.jpeg"
          className="avatar rounded-circle avatar-sm"
        />{" "}
        Healar Health
      </NavLink>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <NavLink className="nav-link" to="#">
            Sign out
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
