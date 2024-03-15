import React from "react";
import Features from "./Features";
import Hero from "./Hero";
import Workflow from "./WorkflowSection";
import About from "../components/About/About";
import Doctor from "../components/Doctors/Doctor";
import Services from "../components/Services/Services";
import Faq from "../components/Faq/Faq";
import Testimonial from "../components/Testimonial/Testimonial";
function Home() {
  return (
    <>
      <Hero />
      <Workflow />
      <About />
      <Services />
      <Features />
      <Doctor />
      <Faq />
      <Testimonial />
    </>
  );
}

export default Home;
