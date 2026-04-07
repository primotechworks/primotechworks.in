import Footer8 from "@/components/footers/Footer8";
import Header9 from "@/components/headers/Header9";
import { slickMultipages } from "@/data/menu";
import Image from "next/image";

export const metadata = {
  title:
    "Privacy Policy || Primo Techworks",
  description:
    "Building smarter digital futures with innovative software solutions. Explore our services and expertise in web development, mobile apps, and more.",
};
const onePage = false;
const dark = false;
export default function SlickPrivacyPolicyPage() {
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
                      Privacy Policy
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
                        <h5>1. Information We Collect</h5>
                        <p>
                          We collect information to help us communicate with you, improve our services,
                          and deliver a seamless experience. This may include:
                        </p>

                        <ul>
                          <li>Information you provide directly</li>
                          <li>Name, email address, phone number</li>
                          <li>Project details or inquiries submitted through our forms</li>
                          <li>Files or documents you choose to share with us</li>
                          <li>Information collected automatically</li>
                          <li>Basic analytics such as page views, browser type, device type</li>
                          <li>IP address and general location (city-level)</li>
                          <li>Cookies that help us understand how visitors use our website</li>
                        </ul>

                        <p>
                          We do not collect sensitive personal information unless you explicitly provide it.
                        </p>

                        <h5>2. How We Use Your Information</h5>
                        <p>We use your information to:</p>

                        <ul>
                          <li>Respond to inquiries and start project conversations</li>
                          <li>Provide services, proposals, and project updates</li>
                          <li>Improve our website and user experience</li>
                          <li>Maintain security and prevent misuse</li>
                          <li>Send occasional updates or announcements (only if you opt in)</li>
                        </ul>

                        <p>We do not sell your information to third parties.</p>

                        <h5>3. How We Share Information</h5>
                        <p>We may share information only when necessary:</p>

                        <ul>
                          <li>With trusted service providers (e.g., hosting, analytics)</li>
                          <li>When required by law or to protect our rights</li>
                          <li>With your permission, when collaborating on a project</li>
                        </ul>

                        <p>
                          All third‑party partners follow strict confidentiality and data‑protection standards.
                        </p>

                        <h5>4. Cookies & Tracking</h5>
                        <p>We use cookies and similar technologies to:</p>

                        <ul>
                          <li>Understand website performance</li>
                          <li>Improve navigation and content</li>
                          <li>Personalize your experience</li>
                        </ul>

                        <p>You can disable cookies in your browser settings at any time.</p>

                        <h5>5. Data Security</h5>
                        <p>
                          We take data protection seriously. We use industry‑standard security measures
                          to safeguard your information from unauthorized access, loss, or misuse.
                        </p>
                        <p>
                          While no system is 100% secure, we continuously review and improve our practices.
                        </p>

                        <h5>6. Your Rights</h5>
                        <p>Depending on your location, you may have the right to:</p>

                        <ul>
                          <li>Access the personal information we hold</li>
                          <li>Request corrections or updates</li>
                          <li>Request deletion of your data</li>
                          <li>Opt out of marketing communications</li>
                          <li>Ask how your data is being used</li>
                        </ul>

                        <p>To make a request, simply contact us at <b>info@primotechworks.in</b>.</p>

                        <h5>7. Data Retention</h5>
                        <p>We retain personal information only as long as necessary to:</p>

                        <ul>
                          <li>Provide services</li>
                          <li>Meet legal obligations</li>
                          <li>Resolve disputes</li>
                          <li>Maintain business records</li>
                        </ul>

                        <p>When data is no longer needed, we securely delete it.</p>

                        <h5>8. Third‑Party Links</h5>
                        <p>
                          Our website may contain links to external sites. We are not responsible for
                          the privacy practices or content of those websites.
                        </p>

                        <h5>9. Updates to This Policy</h5>
                        <p>
                          We may update this Privacy Policy from time to time. Any changes will be
                          posted on this page with an updated revision date.
                        </p>

                        <h5>10. Contact Us</h5>
                        <p>
                          If you have questions about this Privacy Policy or how we handle your data,
                          reach out anytime:
                        </p>
                        <p>
                          <b>Email: info@primotechworks.in<br />Phone: +91 98490 21468</b>
                        </p>
                      </div>
                      <div className="local-scroll wch-unset">
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
