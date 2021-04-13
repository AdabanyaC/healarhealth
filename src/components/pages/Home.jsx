import React from "react";
import Navbar from "../layout/Navbar";
import Header from './../layout/Header';
import Process from './../layout/Process';
import SignupCTA from "../layout/SignupCTA";
import Footer from "../layout/Footer";
import ContactCTA from "../layout/ContactCTA";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Process />
      <SignupCTA />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Home;
