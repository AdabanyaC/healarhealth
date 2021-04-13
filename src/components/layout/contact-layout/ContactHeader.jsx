import React from "react";

const ContactHeader = () => {
  return (
    <section class="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover-contact">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8 text-center">
            {/* Heading */}
            <h1 class="display-2 font-weight-bold text-white">
              We're one email away.
            </h1>

            {/* Text */}
            <p class="lead text-white-75 mb-0">
              We always want to hear from you! Let us know how we can best help
              you and we'll do our very best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
