import PageShell from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Sections";

export const metadata = {
  title: "Terms and Conditions",
  description:
    "The terms and conditions that apply to using the Primo Techworks website and services.",
  alternates: { canonical: "/termsandconditions" },
};

export default function TermsPage() {
  return (
    <PageShell>
      <section className="pt-hero pt-hero-sub" style={{ paddingBottom: 48 }} aria-labelledby="legal-title">
        <div className="pt-grid-bg" aria-hidden="true" />
        <div className="pt-container" style={{ maxWidth: 880 }}>
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Terms and Conditions", href: "/termsandconditions" },
            ]}
          />
          <div className="pt-eyebrow">Legal</div>
          <h1 className="pt-h1" id="legal-title" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            Terms and Conditions
          </h1>
        </div>
      </section>
      <section className="pt-section" style={{ paddingTop: 0 }}>
        <div className="pt-container" style={{ maxWidth: 880 }}>
          <div className="pt-prose pt-legal">
            <p>
            These Terms and Conditions (“Terms”) constitute a binding agreement between
            Primo Techworks (“we,” “us,” or “our”) and you (“you” or “your”), governing
            your use of our website and/or purchase of goods/services from us
            (collectively, “Services”). By using our website and/or making a purchase
            from us, you expressly agree to the following Terms.
            </p>

            <h2>1. Use of Services</h2>
            <p>
            You shall not use our website and/or Services for any purpose that is
            unlawful, illegal or prohibited under Indian laws, or any other local laws
            that might apply to you. It is your responsibility to ensure that any goods,
            services, or information available through our website meet your specific
            requirements.
            </p>

            <h2>2. Orders & Availability</h2>
            <p>
            You agree to provide accurate and complete information for order fulfilment
            and service delivery. We shall not be liable for issues resulting from
            incorrect or incomplete information you provide to us. All purchases/orders
            are subject to availability. We reserve the right to cancel orders at our
            discretion, including but not limited to cases of non‑availability of goods
            or suspected fraud.
            </p>

            <h2>3. Payments</h2>
            <p>
            Payments must be made in full at the time of purchase unless otherwise
            agreed upon by us. You must ensure that the payment details provided are
            valid and belong to you.
            </p>

            <h2>4. Liability</h2>
            <p>
            We shall not be liable for any loss or damage arising from the use of our
            Services, whether direct, indirect, or consequential. We shall not be liable
            for any loss or damage arising directly or indirectly from the decline of
            authorization for any transaction due to the Cardholder exceeding the preset
            limit mutually agreed upon with our acquiring bank.
            </p>

            <h2>5. Governing Law & Disputes</h2>
            <p>
            Any dispute arising out of the use of our website, purchase from us, or any
            engagement with us shall be subject to the laws of India.
            </p>

            <h2>6. Contact Information</h2>
            <p>
            If you have any questions regarding these Terms, please contact us at
            <b> support@primotechworks.in / +91 98490 21468</b>.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
