import React from "react";
import Navbar from "../../layout/Navbar";
import Sidenav from "../../layout/Sidenav";
import AddDoctor from "./AddDoctor";

const DoctorOverview = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Sidenav />
      <AddDoctor />
    </React.Fragment>
  );
};

export default DoctorOverview;
