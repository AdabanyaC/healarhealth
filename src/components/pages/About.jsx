import React from 'react'
import Navbar from './../layout/Navbar';
import AboutHeader from '../layout/about-layout/AboutHeader';
import AboutProcess from '../layout/about-layout/AboutProcess';
import AboutInfo from '../layout/about-layout/AboutInfo';
import Footer from './../layout/Footer';


const About = () => {
    return (
        <React.Fragment>
            <Navbar />
            <AboutHeader />
            <AboutInfo />
            <AboutProcess />
            <Footer />
        </React.Fragment>
    )
}

export default About
