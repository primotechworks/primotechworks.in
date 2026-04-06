import Faq from "@/components/common/Faq";
import React from "react";

export default function Faqs() {
  return (
    <div className="row position-relative">
      <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
        <h3 className="section-title mb-30">Frequently Asked Questions</h3>
        <p className="text-gray mb-0">
          We’ve gathered answers to the questions clients ask most, so you can
          understand our process, how we work, and what to expect when partnering
          with us. Clear, transparent, and designed to help you make confident
          decisions.
        </p>
      </div>
      <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
        {/* Accordion */}
        <Faq />
        {/* End Accordion */}
      </div>
    </div>
  );
}
