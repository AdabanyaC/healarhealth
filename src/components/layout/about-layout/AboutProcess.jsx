import React from "react";

const AboutProcess = () => {
  return (
    <section class="slice slice-lg">
      <div class="container">
        <div class="row mb-5 justify-content-center text-center">
          <div class="col-lg-8 col-md-10">
            <h2 class="mt-4">The. Process.</h2>
            <div class="mt-2">
              <p class="lead lh-180">
                Get acquinted with the process of Healar Health.
              </p>
            </div>
          </div>
        </div>
        <div class="row" style={{ textAlign: "left" }}>
          <div class="col-lg-6">
            <div class="card bg-dark hover-shadow-lg">
              <div class="card-body py-5">
                <div class="d-flex align-items-start">
                  <div class="icon rounded-circle text-white">
                    <i data-feather="code">1.</i>
                  </div>
                  <div class="icon-text pl-4">
                    <h5 class="ma-0 text-white">Create an Account</h5>
                    <p class="mb-0 text-white opacity-8">
                      Sign up to become eligible to take symptom assessment
                      tests, connect with the best doctors and access your
                      health records.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card bg-primary hover-shadow-lg">
              <div class="card-body py-5">
                <div class="d-flex align-items-start">
                  <div class="icon text-white rounded-circle">
                    <i data-feather="crop">2.</i>
                  </div>
                  <div class="icon-text pl-4">
                    <h5 class="ma-0 text-white">Perform Check Up</h5>
                    <p class="mb-0 text-white opacity-8">
                      Once your account is created, you can use our technology
                      to take symptom assessment tests and find out what's wrong
                      with you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card bg-primary hover-shadow-lg">
              <div class="card-body py-5">
                <div class="d-flex align-items-start">
                  <div class="icon text-white rounded-circle">
                    <i data-feather="crop">3.</i>
                  </div>
                  <div class="icon-text pl-4">
                    <h5 class="ma-0 text-white">
                      Access Health Records and Track History
                    </h5>
                    <p class="mb-0 text-white opacity-8">
                      You can access your health records and keep track of your
                      health history through our Healar platform. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card bg-dark hover-shadow-lg">
              <div class="card-body py-5">
                <div class="d-flex align-items-start">
                  <div class="icon text-white rounded-circle">
                    <i data-feather="crop">4.</i>
                  </div>
                  <div class="icon-text pl-4">
                    <h5 class="ma-0 text-white">Connect with Doctors</h5>
                    <p class="mb-0 text-white opacity-8">
                      Healar is not replacing doctors. Use our technology to
                      connect with the best medical professionals around you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
