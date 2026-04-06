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
                        <h5>1. General Policy</h5>
                        <p>
                          At Primo Techworks, we aim to deliver high‑quality services with clarity and
                          transparency. This Refund & Cancellation Policy outlines how cancellations,
                          refunds, and project changes are handled for all engagements with us.
                        </p>

                        <h5>2. Service‑Based Work (Design, Development, Consulting)</h5>
                        <p>Because our work involves time, expertise, and custom deliverables, refunds are handled as follows:</p>

                        <p><strong>Before Work Begins</strong></p>
                        <ul>
                          <li>If you cancel before any work has started, you may be eligible for a partial refund, minus administrative or onboarding costs.</li>
                        </ul>

                        <p><strong>After Work Has Begun</strong></p>
                        <ul>
                          <li>Once work has started, payments are non‑refundable.</li>
                          <li>Refunds are not issued for time already spent on research, design, development, or consultation.</li>
                          <li>Refunds are not issued for completed deliverables or work in progress.</li>
                          <li>Refunds are not issued for delays caused by incomplete information or lack of client response.</li>
                        </ul>

                        <p><strong>Milestone‑Based Projects</strong></p>
                        <ul>
                          <li>Payments for completed milestones are non‑refundable.</li>
                          <li>If a project is paused or cancelled by the client, all completed work up to that point must be paid in full.</li>
                        </ul>

                        <h5>3. Digital Deliverables</h5>
                        <p>
                          All digital deliverables—including designs, documents, prototypes, or code—are
                          non‑refundable once shared with the client. This includes drafts, partial work,
                          and final files.
                        </p>

                        <h5>4. Cancellations by Primo Techworks</h5>
                        <p>We reserve the right to cancel a project under rare circumstances, such as:</p>

                        <ul>
                          <li>Non‑payment</li>
                          <li>Repeated failure to provide required information</li>
                          <li>Misuse of services</li>
                          <li>Violation of our Terms & Conditions</li>
                        </ul>

                        <p>
                          In such cases, you will receive a refund only for work not yet completed, if applicable.
                        </p>

                        <h5>5. Project Changes & Scope Adjustments</h5>
                        <p>
                          If you request changes that alter the original scope, additional costs may apply.
                          Timelines may also be adjusted. Refunds are not provided for previously approved
                          or completed work.
                        </p>

                        <h5>6. No‑Show or Non‑Responsive Clients</h5>
                        <p>
                          If a client becomes unresponsive for 14 days or more, the project may be paused
                          or closed. Payments made to date remain non‑refundable. Resuming work may require
                          a restart fee.
                        </p>

                        <h5>7. How to Request a Cancellation</h5>
                        <p>
                          To request a cancellation or discuss concerns, contact us at:
                          <br />
                          <strong>Email:</strong> support@primotechworks.in
                          <br />
                          <strong>Phone:</strong> +91 98490 21468
                        </p>

                        <h5>8. Policy Updates</h5>
                        <p>
                          We may update this Refund & Cancellation Policy from time to time. Any changes
                          will be posted on this page with an updated revision date.
                        </p>
                        <p><strong>Last Revised: 6th April 2026</strong></p>
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
