import React from "react";

const Process = () => {
  return (
    <div className="container">
      <div className="container py-7">
        <div className="mb-6 text-center">
          <h3 className="h2 mt-4">How it works</h3>
          <div className="fluid-paragraph mt-3">
            <p className="lead lh-180">
              Here's how the Healar Health App works in 3 simple steps.
            </p>
          </div>
        </div>
      </div>
      <div className="row mx-lg-n5 mt-sm-4">
        <div className="col-md-4 px-lg-5">
          <div className="card bg-primary hover-translate-y-n10 shadow-none border-0">
            <div className="card-body">
              <div className="pb-4">
                <div className="icon bg-white rounded-circle icon-shape shadow">
                  <i data-feather="droplet" className="fas fa-user"></i>
                </div>
              </div>
              <div className="pt-2 pb-3">
                <h5 className="text-white">Create an Account</h5>
                <p className="text-white opacity-8 mb-0">
                  Sign up to become eligible to take symptom assessment tests,
                  connect with the best doctors and access your health records.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 px-lg-5">
          <div className="card bg-dark hover-translate-y-n10 shadow-none border-0 mt-lg-n6">
            <div className="card-body">
              <div className="pb-4">
                <div className="icon bg-white rounded-circle icon-shape shadow">
                  <i data-feather="smartphone" className="fas fa-user-md"></i>
                </div>
              </div>
              <div className="pt-2 pb-3">
                <h5 className="text-white">Perform Checkup</h5>
                <p className="text-white opacity-8 mb-0">
                  Once your account is created, you can use our technology to
                  take symptom assessment tests and find out what's wrong with
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 px-lg-5">
          <div className="card bg-primary hover-translate-y-n10 shadow-none border-0 mt-lg-n9">
            <div className="card-body">
              <div className="pb-4">
                <div className="icon bg-white rounded-circle icon-shape shadow">
                  <i
                    data-feather="external-link"
                    className="fas fa-hospital-user"
                  ></i>
                </div>
              </div>
              <div className="pt-2 pb-3">
                <h5 className="text-white">Connect with Doctors</h5>
                <p className="text-white opacity-8 mb-0">
                  Healar is not replacing doctors. Use our technology to connect
                  with medical professionals around you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
