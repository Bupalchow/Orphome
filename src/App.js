import React from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import Nav from "./component/Nav";
import Gallery from "./sections/Gallery";
import ContactForm from "./sections/Contact";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
function App() {
  return (
    <>
      <Home/>
      <Nav bg="white"/>
      <About/>
      <Testimonials/>
      <Gallery/>
      <FAQ/>
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default App;
