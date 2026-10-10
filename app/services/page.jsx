import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import Icon, { Arrow } from "@/components/site/Icon";
import {
  Breadcrumbs,
  CtaSection,
  FaqSection,
  ModelsSection,
  ProcessSection,
} from "@/components/site/Sections";
import { services } from "@/data/services";

export const metadata = {
  title: "Software Development Services: Web, Mobile, AI & Consulting",
  description:
    "Web app development, iOS and Android apps, AI and automation, software architecture consulting, UX/UI design and engineering leadership: innovative software solutions from one passionate team.",
  alternates: { canonical: "/services" },
};

const FAQS = [
  {
    q: "Can you handle a project end to end?",
    a: "Yes. Most clients work with us from discovery through design, engineering, launch and ongoing improvement, so one team owns the whole product and nothing gets lost between agencies.",
  },
  {
    q: "Can we hire you for just one part, like design or architecture?",
    a: "Absolutely. You can engage us for a single service (a UX redesign, an architecture review, an AI feature) and expand later if it makes sense.",
  },
  {
    q: "What does a typical engagement cost?",
    a: "It depends on scope and team size. We share a clear estimate after a free discovery call, and offer fixed-price projects, monthly dedicated teams and advisory retainers.",
  },
  {
    q: "Which industries do you work with?",
    a: "We've built products for healthcare, workforce and staffing, fintech, productivity and local services, and our process works across industries because it starts with your users and goals.",
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="pt-hero pt-hero-sub" aria-labelledby="services-hero">
        <div className="pt-grid-bg" aria-hidden="true" />
        <div className="pt-glow" style={{ top: -280, right: -160 }} aria-hidden="true" />
        <div className="pt-container">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
            ]}
          />
          <div style={{ maxWidth: 820 }}>
            <div className="pt-eyebrow" data-reveal>
              Services
            </div>
            <h1 className="pt-h1" id="services-hero" data-reveal style={{ "--d": "0.05s" }}>
              Everything you need to design, build and scale <span className="pt-gradient-text">great software</span>
            </h1>
            <p className="pt-lead" data-reveal style={{ "--d": "0.1s", maxWidth: 640 }}>
              Six disciplines, one passionate team. Engage us for a single service or the whole
              product lifecycle, from first idea to millions of users.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-section" style={{ paddingTop: 0 }}>
        <div className="pt-container" style={{ display: "grid", gap: 20 }}>
          {services.map((s, i) => (
            <Link
              href={`/services/${s.slug}`}
              key={s.slug}
              className="pt-card pt-service-row"
              data-reveal
              style={{ "--d": `${(i % 2) * 0.06}s` }}
            >
              <div className="pt-service-row-main">
                <span className="pt-icon" style={{ marginBottom: 0 }}>
                  <Icon name={s.icon} size={26} />
                </span>
                <div>
                  <h2 className="pt-h3" style={{ fontSize: 26 }}>
                    {s.title}
                  </h2>
                  <p>{s.intro}</p>
                </div>
              </div>
              <ul className="pt-service-row-list">
                {s.deliverables.slice(0, 4).map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <span className="pt-round-arrow" aria-hidden="true">
                <Icon name="arrow" size={18} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <ProcessSection />
      <ModelsSection />
      <FaqSection faqs={FAQS} title="Services FAQ" />
      <CtaSection title="Not sure which service you need?" lead="Tell us about the problem you're solving. We'll recommend the right approach, even if it's not us." />
    </PageShell>
  );
}
