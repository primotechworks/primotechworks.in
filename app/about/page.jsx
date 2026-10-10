import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import Icon, { Arrow } from "@/components/site/Icon";
import {
  Breadcrumbs,
  CtaSection,
  StatsSection,
  TestimonialsSection,
  WhySection,
} from "@/components/site/Sections";
import { TEAM, VALUES } from "@/data/site";

export const metadata = {
  title: "About Us: A Senior Product Engineering Studio",
  description:
    "Primo Techworks is a senior product engineering studio in Ahmedabad, India, building web, mobile and AI products for clients worldwide, and building our own products in Primo Labs.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="pt-hero pt-hero-sub" aria-labelledby="about-hero">
        <div className="pt-grid-bg" aria-hidden="true" />
        <div className="pt-glow" style={{ top: -280, right: -160 }} aria-hidden="true" />
        <div className="pt-container">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
            ]}
          />
          <div style={{ maxWidth: 880 }}>
            <div className="pt-eyebrow" data-reveal>
              About Primo Techworks
            </div>
            <h1 className="pt-h1" id="about-hero" data-reveal style={{ "--d": "0.05s" }}>
              Engineers who build products <span className="pt-gradient-text">like we own them</span>
            </h1>
            <p className="pt-lead" data-reveal style={{ "--d": "0.1s", maxWidth: 680 }}>
              We&apos;re a senior product engineering studio based in Ahmedabad, India. We partner
              with founders, growing businesses and enterprise teams to turn ambitious ideas into
              software people love to use.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="pt-section" style={{ paddingTop: 24 }} aria-labelledby="story-title">
        <div className="pt-container">
          <div className="pt-two">
            <div data-reveal>
              <div className="pt-eyebrow">Our story</div>
              <h2 className="pt-h2" id="story-title">
                Built on a simple idea: do it right, the first time
              </h2>
              <div className="pt-prose">
                <p>
                  Primo Techworks exists because too many software projects run late, cost more
                  than promised and leave behind code nobody wants to touch. It doesn&apos;t have
                  to be that way.
                </p>
                <p>
                  So we built a studio around senior people and honest process. The engineers and
                  designers you meet on the first call are the ones who build your product. We
                  show working software every week, and we design for the team that will maintain
                  it long after launch.
                </p>
                <p>
                  Over 12+ years of engineering and leadership experience, that approach has
                  shipped telehealth platforms, workforce marketplaces, fintech tools and
                  everything in between, for clients across Canada and beyond.
                </p>
              </div>
            </div>
            <div className="pt-studio" data-reveal="scale" style={{ "--d": "0.1s" }}>
              <div className="pt-grid-bg" aria-hidden="true" />
              <div className="pt-glow" style={{ top: -260, right: -220, width: 520, height: 520 }} aria-hidden="true" />
              <div className="pt-studio-head">
                <span className="pt-studio-dot" aria-hidden="true" />
                Primo Techworks · Ahmedabad, India
              </div>
              <p className="pt-studio-quote">
                &ldquo;Building smarter digital solutions, innovations &amp; futures.&rdquo;
              </p>
              <ul className="pt-studio-list">
                {[
                  ["senior", "Senior engineers on every project"],
                  ["eye", "Working software every week"],
                  ["key", "You own 100% of the code and IP"],
                  ["globe", "Collaborating across timezones"],
                ].map(([icon, text]) => (
                  <li key={text}>
                    <Icon name={icon} size={20} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <StatsSection dark />

      {/* Mission & values */}
      <section className="pt-section" aria-labelledby="values-title">
        <div className="pt-container">
          <div className="pt-head" data-reveal>
            <div className="pt-eyebrow">What we believe</div>
            <h2 className="pt-h2" id="values-title">
              Our mission is to make great software accessible to every ambitious team
            </h2>
            <p className="pt-lead">
              World-class engineering shouldn&apos;t be reserved for companies with Silicon Valley
              budgets. These principles guide every project we take on.
            </p>
          </div>
          <div className="pt-values">
            {VALUES.map((v, i) => (
              <div key={v.t} data-reveal style={{ "--d": `${i * 0.06}s` }}>
                <span>0{i + 1}</span>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team (renders when profiles are added) */}
      {TEAM.length > 0 && (
        <section className="pt-section pt-soft" aria-labelledby="team-title">
          <div className="pt-container">
            <div className="pt-head" data-reveal>
              <div className="pt-eyebrow">Leadership</div>
              <h2 className="pt-h2" id="team-title">
                The people behind Primo
              </h2>
              <p className="pt-lead">
                A leadership team that brings together business experience, hands-on engineering
                and a people-first culture.
              </p>
            </div>
            <div className="pt-grid-3">
              {TEAM.map((p) => (
                <figure className="pt-card pt-person" key={p.name} data-reveal>
                  {p.photo ? (
                    <Image src={p.photo} alt={`${p.name}, ${p.role}`} width={640} height={640} sizes="(max-width: 991px) 100vw, 380px" />
                  ) : (
                    <div className="pt-avatar" aria-hidden="true">
                      {p.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </div>
                  )}
                  <figcaption>
                    <h3 className="pt-h3">{p.name}</h3>
                    <div className="role">{p.role}</div>
                    {p.bio && <p>{p.bio}</p>}
                    {p.linkedin && (
                      <a href={p.linkedin} target="_blank" rel="noopener" className="pt-link" style={{ marginTop: 16 }}>
                        LinkedIn <Icon name="arrowUpRight" size={16} />
                      </a>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Primo Labs */}
      <section className="pt-section pt-dark" aria-labelledby="labs-title">
        <div className="pt-grid-bg" aria-hidden="true" />
        <div className="pt-glow" style={{ bottom: -320, left: -200 }} aria-hidden="true" />
        <div className="pt-container">
          <div className="pt-two">
            <div data-reveal>
              <div className="pt-eyebrow">Primo Labs</div>
              <h2 className="pt-h2" id="labs-title">
                We build our own products, too
              </h2>
              <p className="pt-lead" style={{ marginBottom: 32 }}>
                Primo Labs is where we experiment with new technology on our own time and budget,
                from zero-cost cloud architectures to WebAssembly in the browser. What we learn
                there makes every client project better.
              </p>
              <Link href="/clients" className="pt-btn pt-btn-light">
                Meet our clients <Arrow size={16} />
              </Link>
            </div>
            <ul className="pt-labs-list">
              {[
                ["ai", "On-device AI", "Speech and language models that run privately on the user's device."],
                ["web", "WebAssembly apps", "Desktop-grade tools that run entirely in the browser."],
                ["architecture", "Zero-cost cloud", "Production systems engineered around free-tier infrastructure."],
                ["shield", "AI guardrails", "Patterns that keep LLM features accurate, safe and cost-controlled."],
              ].map(([icon, t, d], i) => (
                <li key={t} data-reveal style={{ "--d": `${i * 0.08}s` }}>
                  <span className="pt-icon">
                    <Icon name={icon} size={22} />
                  </span>
                  <div>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <WhySection />

      {/* Location */}
      <section className="pt-section-sm pt-soft" aria-labelledby="where-title">
        <div className="pt-container">
          <div className="pt-two">
            <div data-reveal>
              <div className="pt-eyebrow">Where we work</div>
              <h2 className="pt-h2" id="where-title">
                Based in Ahmedabad. Working worldwide.
              </h2>
              <p className="pt-lead">
                Our studio is in Satellite, Ahmedabad, and the products we build serve users in
                Canada and around the world. We schedule overlap hours with every client, so your team gets
                real-time collaboration when it matters and steady progress while you sleep.
              </p>
            </div>
            <div className="pt-zones" data-reveal style={{ "--d": "0.1s" }}>
              {[
                ["Vancouver", "PT"],
                ["Toronto · New York", "ET"],
                ["London", "GMT"],
                ["Dubai", "GST"],
                ["Ahmedabad", "IST"],
              ].map(([c, z]) => (
                <div key={c} className={c === "Ahmedabad" ? "home" : ""}>
                  <Icon name={c === "Ahmedabad" ? "pin" : "clock"} size={18} />
                  <b>{c}</b>
                  <span>{z}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <CtaSection title="Let's build something great together." />
    </PageShell>
  );
}
