import React from "react";
import FaqList from "./FaqList";
import faqImg from "../../assets/images/faq-img.png"
function Faq() {
  return (
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
  );
}

export default Faq;
