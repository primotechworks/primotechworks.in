import PageShell from "@/components/site/PageShell";
import { Breadcrumbs } from "@/components/site/Sections";

export const metadata = {
  title: "Refund and Cancellation Policy",
  description:
    "Primo Techworks' policy on refunds and cancellations for our services.",
  alternates: { canonical: "/refundandcancellationpolicy" },
};

export default function RefundPage() {
  return (
    <PageShell>
      <section className="pt-hero pt-hero-sub" style={{ paddingBottom: 48 }} aria-labelledby="legal-title">
        <div className="pt-grid-bg" aria-hidden="true" />
        <div className="pt-container" style={{ maxWidth: 880 }}>
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Refund and Cancellation Policy", href: "/refundandcancellationpolicy" },
            ]}
          />
          <div className="pt-eyebrow">Legal</div>
          <h1 className="pt-h1" id="legal-title" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            Refund and Cancellation Policy
          </h1>
        </div>
      </section>
      <section className="pt-section" style={{ paddingTop: 0 }}>
        <div className="pt-container" style={{ maxWidth: 880 }}>
          <div className="pt-prose pt-legal">
            <h2>1. General Policy</h2>
            <p>
            At Primo Techworks, we aim to deliver high‑quality services with clarity and
            transparency. This Refund & Cancellation Policy outlines how cancellations,
            refunds, and project changes are handled for all engagements with us.
            </p>

            <h2>2. Service‑Based Work (Design, Development, Consulting)</h2>
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

            <h2>3. Digital Deliverables</h2>
            <p>
            All digital deliverables, including designs, documents, prototypes or code, are
            non‑refundable once shared with the client. This includes drafts, partial work,
            and final files.
            </p>

            <h2>4. Cancellations by Primo Techworks</h2>
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

            <h2>5. Project Changes & Scope Adjustments</h2>
            <p>
            If you request changes that alter the original scope, additional costs may apply.
            Timelines may also be adjusted. Refunds are not provided for previously approved
            or completed work.
            </p>

            <h2>6. No‑Show or Non‑Responsive Clients</h2>
            <p>
            If a client becomes unresponsive for 14 days or more, the project may be paused
            or closed. Payments made to date remain non‑refundable. Resuming work may require
            a restart fee.
            </p>

            <h2>7. How to Request a Cancellation</h2>
            <p>
            To request a cancellation or discuss concerns, contact us at:
            <br />
            <strong>Email:</strong> support@primotechworks.in
            <br />
            <strong>Phone:</strong> +91 98490 21468
            </p>

            <h2>8. Policy Updates</h2>
            <p>
            We may update this Refund & Cancellation Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
            </p>
            <p><strong>Last Revised: 6th April 2026</strong></p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
