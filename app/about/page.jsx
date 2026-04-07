import Footer8 from "@/components/footers/Footer8";
import Header9 from "@/components/headers/Header9";
import Facts from "@/components/homes/home-9/Facts";
import Testimonials from "@/components/homes/home-9/Testimonials";
import TestimonialsDark from "@/components/homes/home-9/TestimonialsDark";
import { features4 } from "@/data/features";
import { slickMultipages } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "About || Primo Techworks",
  description:
    "Building smarter digital futures with innovative software solutions. Explore our services and expertise in web development, mobile apps, and more.",
};
const onePage = false;
const dark = false;
export default function SlickAboutPage() {
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
                      About Us
                    </h1>
                  </div>
                </div>
              </div>
            </section>
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
                        Our Story
                      </h2>

                      <h3 className="section-title mb-30">
                        We believe in thoughtful craftsmanship and design with purpose.
                      </h3>

                      <p className="text-gray mb-40">
                        Primo Techworks was built on a simple idea: great products come from clarity,
                        curiosity, and a commitment to doing things the right way. Over the years,
                        we’ve partnered with teams of all sizes to solve complex problems through
                        intentional design and senior‑level engineering.  
                        <br /><br />
                        Our work is shaped by a deep respect for the craft, balancing creativity with
                        technical rigor to create solutions that are intuitive, scalable, and built
                        to last. Every project is an opportunity to bring ideas to life with care,
                        precision, and a genuine dedication to meaningful outcomes.
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
                            <div className="features-list-text">
                              {feature.text}
                            </div>
                          </div>
                        ))}
                        {/* End Features List Item */}
                      </div>
                      {/* End Features List */}
                      <div className="local-scroll wch-unset">
                        <Link
                          href={`/contact${dark ? "-dark" : ""}`}
                          className="btn btn-mod btn-color btn-large btn-circle btn-hover-anim mb-xs-10"
                        >
                          <span>Start a Project</span>
                        </Link>
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
                            alt=""
                            width={228}
                            height={228}
                          />
                        </div>
                        <div className="composition-5-image-1">
                          <div className="composition-5-image-1-inner">
                            <Image
                              src="/assets/images/primotechworks/hs-image-5.png"
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
                              src="/assets/images/primotechworks/hs-image-1.png"
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
                dark
                  ? "bg-dark-1 bg-dark-alpha light-content"
                  : "bg-light-alpha-90"
              }  bg-scroll`}
              style={{
                backgroundImage:
                  "url(/assets/images/demo-slick/section-bg-1.jpg)",
              }}
            >
              <Facts />
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
