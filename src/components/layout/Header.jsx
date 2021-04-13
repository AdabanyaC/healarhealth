import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <section className="slice py-7">
        <div className="container">
            <div className="row row-grid align-items-center">
                <div className="col-12 col-md-5 col-lg-6 order-md-2 text-center">
                    {/* <!-- Image --> */}
                    <figure className="w-100">
                        <img alt="Illustration placeholder" src="/assets/illustrations/1.svg" className="img-fluid mw-md-120" />
                    </figure>
                </div>
                <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
                    {/* <!-- Heading --> */}
                    <h1 className="display-4 text-center text-md-left mb-3">
                        Healar Health <br /> <strong className="text-primary">Hale and Hearty</strong>
                    </h1>
                    {/* <!-- Text --> */}
                    <p className="lead text-center text-md-left text-muted">
                        We are using technology to povide affordable and accessible health wherever you go.
                    </p>
                    {/* <!-- Buttons --> */}
                    <div className="text-center text-md-left mt-5">
                        <NavLink to="/about" className="btn btn-primary btn-icon" target="_blank">
                            <span className="btn-inner--text">Learn more</span>
                            <span className="btn-inner--icon"><i data-feather="chevron-right"></i></span>
                        </NavLink>
                        <NavLink to="/sign-up" className="btn btn-neutral btn-icon d-none d-lg-inline-block" target="_blank">Sign Up</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Header
