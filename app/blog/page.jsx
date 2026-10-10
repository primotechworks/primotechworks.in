import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import { Arrow } from "@/components/site/Icon";
import { Breadcrumbs, CtaSection } from "@/components/site/Sections";

export const metadata = {
  title: "Insights",
  description: "Engineering, product and AI insights from the Primo Techworks team. Coming soon.",
  // Hidden from search until real articles are published.
  robots: { index: false, follow: true },
};

// Planned articles. Each targets a question our buyers search for.
const UPCOMING = [
  { tag: "AI", t: "On-device AI: keeping sensitive audio off the cloud", d: "What we learned running speech-to-text privately in the browser and on Android." },
  { tag: "Cost", t: "How much does it cost to build an MVP in 2026?", d: "Real ranges, what drives cost, and how to spend less without cutting corners." },
  { tag: "Architecture", t: "Running a production system on a $0 cloud budget", d: "A free-tier architecture that works, and when it stops making sense." },
  { tag: "AI", t: "Guardrails for LLM features that touch real money", d: "Letting AI suggest, while the system stays in charge of pay rates and dates." },
  { tag: "Outsourcing", t: "Hiring an offshore development team: a buyer's checklist", d: "The questions to ask before you sign, from IP ownership to timezones." },
  { tag: "Web", t: "WebAssembly in the browser: building a private PDF editor", d: "Editing, redacting and OCR-ing PDFs without a server." },
];

export default function InsightsPage() {
  return (
    <PageShell>
      <section className="pt-hero pt-hero-sub" aria-labelledby="blog-hero">
        <div className="pt-grid-bg" aria-hidden="true" />
        <div className="pt-glow" style={{ top: -280, right: -160 }} aria-hidden="true" />
        <div className="pt-container">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Insights", href: "/blog" },
            ]}
          />
          <div style={{ maxWidth: 820 }}>
            <div className="pt-badge" data-reveal>
              <span className="pt-badge-dot">Coming soon</span>
              <span className="pt-badge-text">Insights from the studio</span>
            </div>
            <h1 className="pt-h1" id="blog-hero" data-reveal style={{ "--d": "0.05s" }}>
              Lessons from building <span className="pt-gradient-text">real products</span>
            </h1>
            <p className="pt-lead" data-reveal style={{ "--d": "0.1s", maxWidth: 640 }}>
              Practical writing on engineering, product and AI, drawn from the products we build.
              Here&apos;s what we&apos;re working on.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-section" style={{ paddingTop: 8 }}>
        <div className="pt-container">
          <div className="pt-grid-3">
            {UPCOMING.map((p, i) => (
              <article key={p.t} className="pt-card" data-reveal style={{ "--d": `${(i % 3) * 0.08}s` }}>
                <div className="pt-tags" style={{ marginTop: 0, marginBottom: 20 }}>
                  <span className="pt-tag">{p.tag}</span>
                  <span className="pt-tag">Coming soon</span>
                </div>
                <h2 className="pt-h3" style={{ fontSize: 21 }}>
                  {p.t}
                </h2>
                <p>{p.d}</p>
              </article>
            ))}
          </div>
          <p className="pt-center" style={{ marginTop: 48 }}>
            <Link href="/clients" className="pt-btn pt-btn-ghost">
              See our clients meanwhile <Arrow size={16} />
            </Link>
          </p>
        </div>
      </section>

      <CtaSection />
    </PageShell>
  );
}
