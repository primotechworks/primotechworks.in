"use client";
import { contactItems } from "@/data/contact";
import React from "react";

export default function Contact() {
  return (
    <div className="container position-relative">
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-4 mb-md-50 mb-sm-30 position-relative z-index-1">
          <h2 className="section-caption-slick mb-30 mb-sm-20">Contact Us</h2>
          <h3 className="section-title mb-50 mb-sm-30">
            Ready for your next Project? Let's Talk
          </h3>
          {/* Contact Information */}
          <div className="row">
            <div className="col-md-11">
              {/* Address */}
              {contactItems.map((item, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`contact-item ${
                      index !== 3 ? "mb-40 mb-sm-20" : ""
                    }`}
                  >
                    <div className="ci-icon">
                      <i className={item.iconClass} />
                    </div>
                    <h4 className="ci-title  visually-hidden">{item.title}</h4>
                    <div className="ci-text">{item.text}</div>
                    <div>
                      <a
                        href={item.link.url}
                        target={item.link.target}
                        rel={item.link.rel}
                        className="link-hover-anim"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          {item.link.text}{" "}
                          <i
                            className="mi-arrow-right size-18"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          {item.link.text}{" "}
                          <i
                            className="mi-arrow-right size-18"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </React.Fragment>
              ))}
              {/* End Phone */}
            </div>
          </div>
          {/* End Contact Information */}
        </div>
        {/* End Left Column */}
        {/* Right Column */}
        <div className="col-lg-8 col-xl-7 offset-xl-1 wow fadeInUp">
          <div className="row g-0">
            {/* Google Map Column */}
            <div className="col-md-5 d-flex align-items-stretch pt-40 pt-sm-0 pb-40 pb-sm-0 mb-sm-30">
              <div className="map-boxed-1 d-flex align-items-stretch">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8576429901987!2d72.50819691247453!3d23.028998579082494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b370fdf7101%3A0x168e6d8d1195ecf8!2sPanchgini%20Apartment%2C%20Ramdevnagar%20Rd%2C%20Satellite%2C%20Ahmedabad%2C%20Gujarat%20380015%2C%20India!5e0!3m2!1sen!2sus!4v1775460391263!5m2!1sen!2sus" 
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            {/* End Google Map Column */}
            {/* Contact Form Column */}
            <div className="col-md-7">
              <div className="box-shadow bg-white round p-4 p-sm-5 position-relative z-index-1">
                <h4 className="h3 mb-40 mb-sm-30">Start a Conversation</h4>
                {/* Contact Form */}
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="form contact-form"
                  id="contact_form"
                >
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="name" className="visually-hidden">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="input-lg input-circle form-control"
                      placeholder="Name"
                      pattern=".{3,100}"
                      required
                      aria-required="true"
                    />
                  </div>
                  {/* End Name */}
                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email" className="visually-hidden">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="input-lg input-circle form-control"
                      placeholder="Email"
                      pattern=".{5,100}"
                      required
                      aria-required="true"
                    />
                  </div>
                  {/* End Email */}
                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="message" className="visually-hidden">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      className="input-lg input-circle form-control"
                      style={{ height: 130 }}
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  {/* Send Button */}
                  <button
                    className="submit_btn btn btn-mod btn-color btn-large btn-full btn-circle btn-hover-anim"
                    id="submit_btn"
                    aria-controls="result"
                  >
                    <span>Send Message</span>
                  </button>
                  {/* End Send Button */}
                  {/* Inform Tip */}
                  <div className="form-tip w-100 pt-30 mt-sm-20">
                    <i className="icon-info size-16" />
                    All the fields are required. By sending the form you agree
                    to the <a href="#">Terms &amp; Conditions</a> and{" "}
                    <a href="#">Privacy Policy</a>.
                  </div>
                  {/* End Inform Tip */}
                  <div
                    id="result"
                    role="region"
                    aria-live="polite"
                    aria-atomic="true"
                  />
                </form>
                {/* End Contact Form */}
              </div>
            </div>
            {/* End Contact Form Column */}
          </div>
        </div>
        {/* End Right Column */}
      </div>
    </div>
  );
}
