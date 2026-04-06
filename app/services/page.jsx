import Footer8 from "@/components/footers/Footer8";
import Header9 from "@/components/headers/Header9";
import Features from "@/components/homes/home-9/Features";
import Service from "@/components/homes/home-9/Service";

import { slickMultipages } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Services || Primo Techworks",
  description:
    "Building smarter digital futures with innovative software solutions. Explore our services and expertise in web development, mobile apps, and more.",
};
const onePage = false;
const dark = false;
export default function SlickServicesPage() {
  return (
    <>
      <div className="theme-slick">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header9 links={slickMultipages} />
          </nav>
          <main id="main">
            <section
              className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden"
              id="home"
            >
              {/* <!-- Background Shape --> */}
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  src="/assets/images/demo-fancy/bg-shape-1.svg"
                  width={1443}
                  height={844}
                  alt=""
                />
              </div>
              {/* <!-- End Background Shape --> */}

              <div className="container position-relative pt-sm-40 text-center">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <h1 className="hs-title-10 mb-10 wow fadeInUp">
                      Our Services
                    </h1>

                    <p
                      className="section-descr mb-0 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      We provide digital solutions shaped by thoughtful design and engineering excellence.
                    </p>
                  </div>
                </div>
              </div>
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
                      WHAT WE DO
                    </h2>
                    <h3 className="section-title mb-30">
                      Crafted Digital Solutions  
                    </h3>
                    <p className="section-descr mb-50 mb-sm-40">
                      We offer development services that combine clarity, craftsmanship, and strategic design. Our process turns intricate challenges into elegant, dependable solutions built for long‑term success.
                    </p>
                    <div className="local-scroll">
                      <Link
                        href={`/slick-contact${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-color btn-large btn-circle btn-hover-anim mb-xs-10"
                      >
                        <span>Request a Quote</span>
                      </Link>
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
                      We are committed to delivering high-quality solutions that meet our clients' needs and exceed their expectations with a focus on quality, innovation and continuous improvement.
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
              className={`page-section  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
            >
              <div className="container position-relative">
                <div className="row">
                  {/* Images */}
                  <div className="col-lg-7 d-flex align-items-start mb-md-60 mb-xs-30">
                    <div className="call-action-2-images">
                      <div
                        className="call-action-2-image-1"
                        data-rellax-y=""
                        data-rellax-speed="0.5"
                        data-rellax-percentage="0.7"
                      >
                        <Image
                          width={386}
                          height={400}
                          src="/assets/images/promo-3.jpg"
                          alt="Image Description"
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                          data-wow-offset={255}
                        />
                      </div>
                      <div className="call-action-2-image-2">
                        <Image
                          width={810}
                          height={512}
                          src="/assets/images/promo-4.jpg"
                          alt="Image Description"
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                          data-wow-offset={134}
                        />
                      </div>
                      <div
                        className="call-action-2-image-3"
                        data-rellax-y=""
                        data-rellax-speed="-0.5"
                        data-rellax-percentage="0.5"
                      >
                        <Image
                          width={386}
                          height={500}
                          src="/assets/images/promo-5.jpg"
                          alt="Image Description"
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                          data-wow-offset={0}
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Images */}
                  {/* Text */}
                  <div className="col-lg-5 d-flex align-items-center">
                    <div
                      className="wow fadeInUp"
                      data-wow-duration="1.2s"
                      data-wow-offset="255"
                    >
                      <h2 className="section-caption-slick mb-30 mb-sm-20">
                        How we work
                      </h2>

                      <h2 className="section-title mb-30">
                        A thoughtful & experience-driven approach to building exceptional products
                      </h2>

                      <p className="text-gray">
                        Our process is grounded in clarity, collaboration, and craftsmanship.
                        We take the time to understand your goals, explore the problem from
                        every angle, and design solutions that balance usability, performance,
                        and long‑term scalability.
                      </p>

                      <p className="text-gray mb-0">
                        From early discovery to final delivery, we work closely with your team
                        to ensure every decision is intentional and every outcome is meaningful.
                        The result is software that feels refined, reliable, and built to stand
                        the test of time.
                      </p>
                    </div>
                  </div>
                  {/* End Text */}
                </div>
              </div>
            </section>
          </main>
          <footer className="page-section footer position-relative overflow-hidden pb-30">
            <div className="bg-shape-4">
              <Image
                src="/assets/images/demo-slick/bg-shape-4.svg"
                width={1600}
                height={268}
                alt=""
              />
            </div>
            <Footer8 />
          </footer>
        </div>
      </div>
    </>
  );
}
