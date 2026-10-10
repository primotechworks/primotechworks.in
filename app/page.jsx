import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import Icon, { Arrow } from "@/components/site/Icon";
import HeroSlideshow from "@/components/site/HeroSlideshow";
import {
  CtaSection,
  FaqSection,
  ModelsSection,
  ProcessSection,
  SectionHead,
  ServiceCards,
  StackList,
  StatsSection,
  TestimonialsSection,
  WhySection,
  WorkStrip,
} from "@/components/site/Sections";
import { services } from "@/data/services";
import { INDUSTRIES } from "@/data/site";

export const metadata = {
  title: { absolute: "Primo Techworks | Web, Mobile & AI Product Engineering Studio" },
  description:
    "Primo Techworks is a senior product engineering studio. We design and build web apps, mobile apps and AI-powered software for startups, SMBs and enterprise teams worldwide, from Ahmedabad, India.",
};

const STACK = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Kotlin", "Swift",
  "Kotlin Multiplatform", "PostgreSQL", "MySQL", "Supabase", "AWS", "Google Cloud",
  "Cloudflare", "Terraform", "Anthropic Claude", "OpenAI", "WebRTC", "Stripe", "Auth0",
];

export default function HomePage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="pt-hero" aria-labelledby="hero-title">
        <div className="pt-grid-bg" aria-hidden="true" />
        <div className="pt-glow" style={{ top: -240, right: -120 }} aria-hidden="true" />
        <div className="pt-glow cyan" style={{ top: 160, left: -320 }} aria-hidden="true" />
        <div className="pt-container">
          <div className="pt-two pt-hero-grid">
            <div>
              <div className="pt-badge" data-reveal>
                <span className="pt-badge-dot">Taking on new projects</span>
                <span className="pt-badge-text">Senior product engineering studio</span>
              </div>
              <h1 className="pt-h1" id="hero-title" data-reveal style={{ "--d": "0.05s" }}>
                <span className="visually-hidden">Building smarter digital solutions, innovations &amp; futures.</span>
                <span aria-hidden="true">
                  Building smarter digital{" "}
                  <span className="pt-rotator">
                    <span className="pt-rotator-track">
                      <span>solutions</span>
                      <span>innovations</span>
                      <span>futures</span>
                      <span>solutions</span>
                    </span>
                  </span>
                </span>
              </h1>
              <p className="pt-lead" data-reveal style={{ "--d": "0.12s", maxWidth: 540 }}>
                Primo Techworks designs, engineers and scales web apps, mobile apps and AI-powered
                products for startups, growing businesses and enterprise teams, with senior people
                on every project.
              </p>
              <div className="pt-actions" style={{ marginTop: 36, "--d": "0.16s" }} data-reveal>
                <Link href="/contact" className="pt-btn pt-btn-brand">
                  Book a free consultation <Arrow size={16} />
                </Link>
                <Link href="/clients" className="pt-btn pt-btn-ghost">
                  See our clients
                </Link>
              </div>
              <div className="pt-trust" data-reveal style={{ "--d": "0.2s" }}>
                <span>
                  <Icon name="check" size={18} strokeWidth={2} /> 12+ years of engineering
                </span>
                <span>
                  <Icon name="check" size={18} strokeWidth={2} /> Products live across Canada
                </span>
                <span>
                  <Icon name="check" size={18} strokeWidth={2} /> Reply within 1 business day
                </span>
              </div>
            </div>

            <div data-reveal="fade" style={{ "--d": "0.15s" }}>
              <HeroSlideshow />
            </div>
          </div>
        </div>
      </section>

      <WorkStrip />

      {/* Services */}
      <section className="pt-section pt-soft" aria-labelledby="services-title">
        <div className="pt-container">
          <div className="pt-head-row">
            <div className="pt-head" data-reveal>
              <div className="pt-eyebrow">What we do</div>
              <h2 className="pt-h2" id="services-title">
                End-to-end product engineering, under one roof
              </h2>
              <p className="pt-lead">
                Strategy, design, engineering and AI, delivered by one senior team that owns the
                outcome with you.
              </p>
            </div>
            <Link href="/services" className="pt-btn pt-btn-ghost" data-reveal>
              All services <Arrow size={16} />
            </Link>
          </div>
          <ServiceCards items={services} />
        </div>
      </section>

      {/* Industries */}
      <section className="pt-section" aria-labelledby="industries-title">
        <div className="pt-container">
          <SectionHead
            eyebrow="Industries"
            title="Software for the industries we know best"
            lead="We bring domain knowledge, not just code: we understand the regulations, workflows and users behind your product."
          />
          <div className="pt-bento">
            {INDUSTRIES.map((it, i) => (
              <div key={it.t} className="pt-card hover" data-reveal style={{ "--d": `${(i % 3) * 0.08}s` }}>
                <span className="pt-icon">
                  <Icon name={it.icon} size={26} />
                </span>
                <h3 className="pt-h3" style={{ fontSize: 21 }}>
                  {it.t}
                </h3>
                <p>{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <WhySection />

      <StatsSection />

      <ModelsSection />

      <TestimonialsSection />

      {/* Tech */}
      <section className="pt-section" aria-labelledby="stack-title">
        <div className="pt-container">
          <div className="pt-two">
            <div data-reveal>
              <div className="pt-eyebrow">Technology</div>
              <h2 className="pt-h2" id="stack-title">
                Modern, proven tools, chosen for your product
              </h2>
              <p className="pt-lead">
                We pick technology for longevity, performance and the team that will maintain it,
                not for hype. Here&apos;s what we use most.
              </p>
            </div>
            <div data-reveal style={{ "--d": "0.1s" }}>
              <StackList items={STACK} />
            </div>
          </div>
        </div>
      </section>

      <FaqSection soft />

      <CtaSection />
    </PageShell>
  );
}
