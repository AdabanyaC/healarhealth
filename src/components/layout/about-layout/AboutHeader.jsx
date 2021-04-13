import React from "react";

const AboutHeader = () => {
  return (
    <section class="slice py-5 py-lg-7">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-12 col-md-5 col-lg-6 order-md-2">
            <img
              alt="Placeholder"
              src="/assets/illustrations/2.svg"
              class="img-fluid"
            />
          </div>
          <div class="col-12 col-md-7 col-lg-6 order-md-1">
            <h2 class="h1 text-center text-md-left mb-4">
              Healar Health is using technology to make health care affordable
              and accessible to everyone.
              {/* <strong class="text-highlight-info">ever imagined</strong> */}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
