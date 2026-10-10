import PageShell from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Sections";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Primo Techworks collects, uses and protects your personal information.",
  alternates: { canonical: "/privacypolicy" },
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <section className="pt-hero pt-hero-sub" style={{ paddingBottom: 48 }} aria-labelledby="legal-title">
        <div className="pt-grid-bg" aria-hidden="true" />
        <div className="pt-container" style={{ maxWidth: 880 }}>
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Privacy Policy", href: "/privacypolicy" },
            ]}
          />
          <div className="pt-eyebrow">Legal</div>
          <h1 className="pt-h1" id="legal-title" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            Privacy Policy
          </h1>
        </div>
      </section>
      <section className="pt-section" style={{ paddingTop: 0 }}>
        <div className="pt-container" style={{ maxWidth: 880 }}>
          <div className="pt-prose pt-legal">
            <h2>1. Information We Collect</h2>
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

            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>

            <ul>
            <li>Respond to inquiries and start project conversations</li>
            <li>Provide services, proposals, and project updates</li>
            <li>Improve our website and user experience</li>
            <li>Maintain security and prevent misuse</li>
            <li>Send occasional updates or announcements (only if you opt in)</li>
            </ul>

            <p>We do not sell your information to third parties.</p>

            <h2>3. How We Share Information</h2>
            <p>We may share information only when necessary:</p>

            <ul>
            <li>With trusted service providers (e.g., hosting, analytics)</li>
            <li>When required by law or to protect our rights</li>
            <li>With your permission, when collaborating on a project</li>
            </ul>

            <p>
            All third‑party partners follow strict confidentiality and data‑protection standards.
            </p>

            <h2>4. Cookies & Tracking</h2>
            <p>We use cookies and similar technologies to:</p>

            <ul>
            <li>Understand website performance</li>
            <li>Improve navigation and content</li>
            <li>Personalize your experience</li>
            </ul>

            <p>You can disable cookies in your browser settings at any time.</p>

            <h2>5. Data Security</h2>
            <p>
            We take data protection seriously. We use industry‑standard security measures
            to safeguard your information from unauthorized access, loss, or misuse.
            </p>
            <p>
            While no system is 100% secure, we continuously review and improve our practices.
            </p>

            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>

            <ul>
            <li>Access the personal information we hold</li>
            <li>Request corrections or updates</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Ask how your data is being used</li>
            </ul>

            <p>To make a request, simply contact us at <b>info@primotechworks.in</b>.</p>

            <h2>7. Data Retention</h2>
            <p>We retain personal information only as long as necessary to:</p>

            <ul>
            <li>Provide services</li>
            <li>Meet legal obligations</li>
            <li>Resolve disputes</li>
            <li>Maintain business records</li>
            </ul>

            <p>When data is no longer needed, we securely delete it.</p>

            <h2>8. Third‑Party Links</h2>
            <p>
            Our website may contain links to external sites. We are not responsible for
            the privacy practices or content of those websites.
            </p>

            <h2>9. Updates to This Policy</h2>
            <p>
            We may update this Privacy Policy from time to time. Any changes will be
            posted on this page with an updated revision date.
            </p>

            <h2>10. Contact Us</h2>
            <p>
            If you have questions about this Privacy Policy or how we handle your data,
            reach out anytime:
            </p>
            <p>
            <b>Email: info@primotechworks.in<br />Phone: +91 98490 21468</b>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
