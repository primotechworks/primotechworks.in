import PageShell from "@/components/site/PageShell";
import Icon from "@/components/site/Icon";
import ContactForm from "@/components/site/ContactForm";
import { Breadcrumbs, FaqSection } from "@/components/site/Sections";
import { CONTACT } from "@/data/site";
import { faqDataMain } from "@/data/faqs";

export const metadata = {
  title: "Contact Us: Start Your Project",
  description:
    "Tell us about your project and get a free consultation. Email info@primotechworks.in or call +91 98490 21468. We reply within one business day.",
  alternates: { canonical: "/contact" },
};

const NEXT_STEPS = [
  { t: "We reply within one business day", d: "A real person reads every message and responds with questions or times to talk." },
  { t: "Free 30-minute discovery call", d: "We learn about your goals and constraints and share honest, no-obligation advice." },
  { t: "Clear proposal", d: "You get scope, approach, timeline and cost in writing, usually within a week." },
];

// Pick the most decision-relevant questions from the full FAQ list.
const CONTACT_FAQS = [1, 5, 13, 16, 12, 20]
  .map((i) => faqDataMain[i])
  .filter(Boolean)
  .map((f) => ({ q: f.question, a: f.answer }));

export default function ContactPage() {
  return (
    <PageShell>
      <section className="pt-hero pt-hero-sub" style={{ paddingBottom: 120 }} aria-labelledby="contact-hero">
        <div className="pt-grid-bg" aria-hidden="true" />
        <div className="pt-glow" style={{ top: -280, right: -160 }} aria-hidden="true" />
        <div className="pt-container">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Contact", href: "/contact" },
            ]}
          />
          <div className="pt-contact-grid">
            <div>
              <div className="pt-eyebrow" data-reveal>
                Contact
              </div>
              <h1 className="pt-h1" id="contact-hero" data-reveal style={{ "--d": "0.05s" }}>
                Let&apos;s build something <span className="pt-gradient-text">great together</span>
              </h1>
              <p className="pt-lead" data-reveal style={{ "--d": "0.1s" }}>
                Tell us a little about your project. You don&apos;t need a polished brief: an idea,
                a problem or a product you want to improve is plenty.
              </p>

              <div style={{ marginTop: 40 }}>
                <a className="pt-contact-line" href={`mailto:${CONTACT.email}`}>
                  <span className="pt-icon">
                    <Icon name="mail" size={20} />
                  </span>
                  <span>
                    <small>Email us</small>
                    <b>{CONTACT.email}</b>
                  </span>
                </a>
                <a className="pt-contact-line" href={CONTACT.phoneHref}>
                  <span className="pt-icon">
                    <Icon name="phone" size={20} />
                  </span>
                  <span>
                    <small>Call us</small>
                    <b>{CONTACT.phone}</b>
                  </span>
                </a>
                <a className="pt-contact-line" href={CONTACT.mapUrl} target="_blank" rel="noopener">
                  <span className="pt-icon">
                    <Icon name="pin" size={20} />
                  </span>
                  <span>
                    <small>Visit the studio</small>
                    <b>Satellite, Ahmedabad, Gujarat, India</b>
                  </span>
                </a>
              </div>

              <div className="pt-next" data-reveal>
                <h2 className="pt-h3" style={{ fontSize: 20, marginBottom: 20 }}>
                  What happens next
                </h2>
                <ol>
                  {NEXT_STEPS.map((s, i) => (
                    <li key={s.t}>
                      <span>{i + 1}</span>
                      <div>
                        <b>{s.t}</b>
                        <p>{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="pt-card pt-form-card" data-reveal="scale" style={{ "--d": "0.12s" }}>
              <h2 className="pt-h3">Start a conversation</h2>
              <p style={{ marginBottom: 28 }}>Takes about two minutes. We reply within one business day.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={CONTACT_FAQS} title="Before you reach out" soft />
    </PageShell>
  );
}
