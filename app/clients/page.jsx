import PageShell from "@/components/site/PageShell";
import { Breadcrumbs, CtaSection, StatsSection, WorkGrid } from "@/components/site/Sections";
import { work } from "@/data/work";

export const metadata = {
  title: "Our Clients: Case Studies in Web, Mobile & AI",
  description:
    "Case studies from Primo Techworks: HJachi (telehealth with on-device AI), AmbiMi (workforce marketplace), Zaris (fintech terminal), Kwoon (private PDF editor) and Savile Services.",
  alternates: { canonical: "/clients" },
};

export default function WorkPage() {
  return (
    <PageShell>
      <section className="pt-hero pt-hero-sub" aria-labelledby="work-hero">
        <div className="pt-grid-bg" aria-hidden="true" />
        <div className="pt-glow" style={{ top: -280, right: -160 }} aria-hidden="true" />
        <div className="pt-container">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Clients", href: "/clients" },
            ]}
          />
          <div style={{ maxWidth: 820 }}>
            <div className="pt-eyebrow" data-reveal>
              Our clients
            </div>
            <h1 className="pt-h1" id="work-hero" data-reveal style={{ "--d": "0.05s" }}>
              Our clients &amp; <span className="pt-gradient-text">the products we&apos;ve built</span>
            </h1>
            <p className="pt-lead" data-reveal style={{ "--d": "0.1s", maxWidth: 640 }}>
              Healthcare, workforce, fintech, productivity and local business: real products,
              live in production, each with its own engineering story.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-section" style={{ paddingTop: 16 }}>
        <div className="pt-container">
          <WorkGrid items={work} />
        </div>
      </section>

      <StatsSection dark />

      <CtaSection title="Your product could be next." />
    </PageShell>
  );
}
