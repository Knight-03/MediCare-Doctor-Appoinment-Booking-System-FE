import React from "react";
import Features from "./Features";
import Hero from "./Hero";
import Workflow from "./WorkflowSection";
import Services from "./Services";
import About from "../components/About/About";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
import faqImg from "../assets/images/faq-img.png";
function Home() {
  return (
    <>
      <Hero />
      <Workflow />
      <About />
      <Services />
      <Features />
      {/* ======= our Grete Doctors ========== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* ======= our Grete Doctors ========== */}

      {/*=========== faq section ============= */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="faq" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most asked questions by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/*=========== faq section end============= */}

      {/*====== testimonial section ============== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What Our Patient Say</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/*====== testimonial section end============== */}
    </>
  );
}

export default Home;
