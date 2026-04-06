import Footer8 from "@/components/footers/Footer8";
import Header9 from "@/components/headers/Header9";
import { slickMultipages } from "@/data/menu";
import Image from "next/image";

export const metadata = {
  title:
    "Refund And Cancellation Policy || Primo Techworks",
  description:
    "Building smarter digital futures with innovative software solutions. Explore our services and expertise in web development, mobile apps, and more.",
};
const onePage = false;
const dark = false;
export default function SlickRefundAndCancellationPage() {
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
                      Refund and Cancellation Policy
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
                  <div className="col-lg-12 d-flex align-items-center order-first order-lg-last mb-md-60 mb-sm-40">
                    <div className="w-100 wow fadeInUp">
                      <div className="text-gray mb-40">
                        <p>
                          These Terms and Conditions (“Terms”) constitute a binding agreement between
                          Primo Techworks (“we,” “us,” or “our”) and you (“you” or “your”), governing
                          your use of our website and/or purchase of goods/services from us
                          (collectively, “Services”). By using our website and/or making a purchase
                          from us, you expressly agree to the following Terms.
                        </p>

                        <h5>1. Use of Services</h5>
                        <p>
                          You shall not use our website and/or Services for any purpose that is
                          unlawful, illegal or prohibited under Indian laws, or any other local laws
                          that might apply to you. It is your responsibility to ensure that any goods,
                          services, or information available through our website meet your specific
                          requirements.
                        </p>

                        <h5>2. Orders & Availability</h5>
                        <p>
                          You agree to provide accurate and complete information for order fulfilment
                          and service delivery. We shall not be liable for issues resulting from
                          incorrect or incomplete information you provide to us. All purchases/orders
                          are subject to availability. We reserve the right to cancel orders at our
                          discretion, including but not limited to cases of non‑availability of goods
                          or suspected fraud.
                        </p>

                        <h5>3. Payments</h5>
                        <p>
                          Payments must be made in full at the time of purchase unless otherwise
                          agreed upon by us. You must ensure that the payment details provided are
                          valid and belong to you.
                        </p>

                        <h5>4. Liability</h5>
                        <p>
                          We shall not be liable for any loss or damage arising from the use of our
                          Services, whether direct, indirect, or consequential. We shall not be liable
                          for any loss or damage arising directly or indirectly from the decline of
                          authorization for any transaction due to the Cardholder exceeding the preset
                          limit mutually agreed upon with our acquiring bank.
                        </p>

                        <h5>5. Governing Law & Disputes</h5>
                        <p>
                          Any dispute arising out of the use of our website, purchase from us, or any
                          engagement with us shall be subject to the laws of India.
                        </p>

                        <h5>6. Contact Information</h5>
                        <p>
                          If you have any questions regarding these Terms, please contact us at
                          <b>support@primotechworks.in / +91 98490 21468</b>.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Section Text */}
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
