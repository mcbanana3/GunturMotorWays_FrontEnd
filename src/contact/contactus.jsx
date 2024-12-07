import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/contact";

function aboutus() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default aboutus;
