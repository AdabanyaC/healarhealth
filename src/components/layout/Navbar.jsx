import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        {/* <!-- Brand --> */}
        <NavLink className="navbar-brand" to="/">
          {/* <img alt="Image placeholder" src="assets/img/brand/dark.svg" id="navbar-logo"> */}
          <h3>Healar</h3>
        </NavLink>
        {/* <!-- Toggler --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <!-- Collapse --> */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mt-4 mt-lg-0 ml-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/topics">
                Topics
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>            
          </ul>
          {/* <!-- Button --> */}
          <NavLink
            className="navbar-btn btn-sm btn-primary d-none d-lg-inline-block ml-3"
            to="/sign-up"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
