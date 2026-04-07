import React from "react";

import Facts from "./Facts";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Image from "next/image";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Newsletter from "./Newsletter";
import Contact from "./Contact";
import Link from "next/link";
import TestimonialsDark from "./TestimonialsDark";
import ContactDark from "./ContactDark";
import { features4 } from "@/data/features";
import Features from "./Features";

export default function Home9({ onePage = false, dark = false }) {
  return (
    <>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      <section
        className={`page-section scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="container position-relative">
          <div className="row">
            {/* Section Text */}
            <div className="col-lg-6 d-flex align-items-center order-first order-lg-last mb-md-60 mb-sm-40">
              <div className="w-100 wow fadeInUp">
                <h2 className="section-caption-slick mb-30 mb-sm-20">
                  About Primo Techworks
                </h2>
                <h3 className="section-title mb-30">
                  A team driven by curiosity, creativity, and meaningful problem‑solving.
                </h3>
                <p className="text-gray mb-40">
                  We are a team of passionate developers, designers, and strategists dedicated to creating innovative solutions. 
                  We believe in the power of design to solve complex problems and cultivate business solutions. 
                  Our mission is to build smarter digital futures with innovative software solutions. 
                  Explore our services and expertise in web development, mobile apps, and more.
                </p>
                {/* Features List */}
                <div className="row features-list mt-n20 mb-50 mb-sm-30">
                  {/* Features List Item */}
                  {features4.map((feature, index) => (
                    <div
                      key={index}
                      className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20"
                    >
                      <div className="features-list-icon">
                        <i className="mi-check" />
                      </div>
                      <div className="features-list-text">{feature.text}</div>
                    </div>
                  ))}
                  {/* End Features List Item */}
                </div>
                {/* End Features List */}
                <div className="local-scroll wch-unset">
                  {onePage ? (
                    <>
                      <a
                        href="#contact"
                        className="btn btn-mod btn-color btn-large btn-circle btn-hover-anim mb-xs-10"
                      >
                        <span>Start a Project</span>
                      </a>
                    </>
                  ) : (
                    <>
                      <Link
                        href={`/contact${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-color btn-large btn-circle btn-hover-anim mb-xs-10"
                      >
                        <span>Start a Project</span>
                      </Link>
                    </>
                  )}
                  {onePage ? (
                    <>
                      {" "}
                      <a
                        href="#services"
                        className="link-hover-anim ms-2 ms-sm-5 me-2"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          Learn more{" "}
                          <i
                            className="mi-arrow-right size-24"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          Learn more{" "}
                          <i
                            className="mi-arrow-right size-24"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </a>
                    </>
                  ) : (
                    <>
                      {" "}
                      <Link
                        href={`/about${dark ? "-dark" : ""}`}
                        className="link-hover-anim ms-2 ms-sm-5 me-2"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          Learn more{" "}
                          <i
                            className="mi-arrow-right size-24"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          Learn more{" "}
                          <i
                            className="mi-arrow-right size-24"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* End Section Text */}
            {/* Image */}
            <div className="col-lg-6 d-flex align-items-center">
              <div className="w-100 pe-lg-5">
                <div className="composition-5">
                  <div className="composition-5-decoration opacity-065">
                    <Image
                      src="/assets/images/demo-slick/decoration-1.svg"
                      alt="resonance template image"
                      width={228}
                      height={228}
                    />
                  </div>
                  <div className="composition-5-image-1">
                    <div className="composition-5-image-1-inner">
                      <Image
                        src="/assets/images/primotechworks/hs-image-3.png"
                        alt="Image Description"
                        width={850}
                        height={914}
                        className="wow scaleOutIn"
                        data-wow-offset={200}
                      />
                    </div>
                  </div>
                  <div className="composition-5-image-2">
                    <div className="composition-5-image-2-inner">
                      <Image
                        src="/assets/images/primotechworks/hs-image-7.png"
                        alt="Image Description"
                        width={400}
                        height={400}
                        className="wow scaleOutIn"
                        data-wow-offset={0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Images */}
          </div>
        </div>
      </section>
      <section
        className={`page-section ${
          dark ? "bg-dark-1 bg-dark-alpha light-content" : "bg-light-alpha-90"
        }  bg-scroll`}
        style={{
          backgroundImage: "url(/assets/images/demo-slick/section-bg-1.jpg)",
        }}
      >
        <Facts />
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="services"
      >
        <div className="container position-relative">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-5 mb-md-60 mb-sm-40">
              <h2 className="section-caption-slick mb-30 mb-sm-20">
                Our Services
              </h2>
              <h3 className="section-title mb-30">
                We provide digital solutions shaped by thoughtful design and engineering excellence.
              </h3>
              <p className="section-descr mb-50 mb-sm-40">
                We offer development services that combine clarity, craftsmanship, and strategic design.
Our process turns intricate challenges into elegant, dependable solutions built for long‑term success.
              </p>
              <div className="local-scroll">
                {onePage ? (
                  <>
                    {" "}
                    <a
                      href="#contact"
                      className="btn btn-mod btn-color btn-large btn-circle btn-hover-anim mb-xs-10"
                    >
                      <span>Request a Quote</span>
                    </a>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link
                      href={`/contact${dark ? "-dark" : ""}`}
                      className="btn btn-mod btn-color btn-large btn-circle btn-hover-anim mb-xs-10"
                    >
                      <span>Request a Quote</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
            {/* End Left Column */}
            {/* Right Column */}
            <Service />
            {/* End Right Column */}
          </div>
          <div className="page-section">
            <hr className="mt-0 mb-0" />
          </div>
          <div className="row mb-50 mb-sm-50">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 text-center">
              <h2 className="section-title-small mb-20">
                Why choose Primo Techworks?
              </h2>
              <p className="text-gray mb-0">
                We are committed to delivering high-quality solutions that meet
                our clients' needs and exceed their expectations with a focus on
                quality, innovation and continuous improvement.
              </p>
            </div>
          </div>
          {/* Features Grid */}
          <Features />
          {/* End Features Grid */}
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        {dark ? <ContactDark /> : <Contact />}
      </section>
    </>
  );
}
