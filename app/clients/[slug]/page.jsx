import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/site/PageShell";
import Icon, { Arrow } from "@/components/site/Icon";
import { BrowserFrame, PhoneFrame } from "@/components/site/Frames";
import { BrandLogo, Breadcrumbs, CtaSection, JsonLd, StackList, WorkCard } from "@/components/site/Sections";
import { work, workBySlug } from "@/data/work";
import { SITE_URL } from "@/data/site";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const w = workBySlug[slug];
  if (!w) return {};
  return {
    title: `${w.name} Case Study: ${w.tagline}`,
    description: `${w.summary} See how Primo Techworks designed and built ${w.name}.`,
    alternates: { canonical: `/clients/${w.slug}` },
    openGraph: {
      title: `${w.name}: ${w.tagline}`,
      description: w.summary,
      url: `/clients/${w.slug}`,
      images: [{ url: w.web, width: 1440, height: w.slug === "zaris" ? 750 : 900 }],
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const w = workBySlug[slug];
  if (!w) notFound();

  const idx = work.findIndex((x) => x.slug === w.slug);
  const next = work[(idx + 1) % work.length];
  const dark = w.accent.dark;

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: `${w.name}: ${w.tagline}`,
          description: w.summary,
          url: `${SITE_URL}/clients/${w.slug}`,
          image: `${SITE_URL}${w.web}`,
          creator: { "@id": `${SITE_URL}/#organization` },
          keywords: w.stack.join(", "),
        }}
      />

      <section className="pt-hero pt-hero-sub" style={{ paddingBottom: 56 }} aria-labelledby="cs-hero">
        <div className="pt-grid-bg" aria-hidden="true" />
        <div className="pt-container">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Clients", href: "/clients" },
              { name: w.name, href: `/clients/${w.slug}` },
            ]}
          />
          <div style={{ maxWidth: 900 }}>
            <div className="pt-cs-logo" data-reveal>
              <BrandLogo item={w} />
            </div>
            <div className="pt-tags" style={{ marginTop: 0, marginBottom: 24 }} data-reveal>
              <span className="pt-tag">{w.kind}</span>
              <span className="pt-tag">{w.region}</span>
            </div>
            <h1 className="pt-h1" id="cs-hero" data-reveal style={{ "--d": "0.05s", fontSize: "clamp(36px, 4.6vw, 58px)" }}>
              {w.name}: {w.tagline.charAt(0).toLowerCase() + w.tagline.slice(1)}
            </h1>
            <p className="pt-lead" data-reveal style={{ "--d": "0.1s", maxWidth: 700 }}>
              {w.summary}
            </p>
            {w.url && (
              <div className="pt-actions" style={{ marginTop: 32 }}>
                <a href={w.url} target="_blank" rel="noopener" className="pt-btn pt-btn-ghost">
                  Visit {w.url.replace(/^https?:\/\/(www\.)?/, "")}
                  <Icon name="arrowUpRight" size={16} strokeWidth={1.8} />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="pt-container" aria-label={`${w.name} screenshots`}>
        <div
          className={`pt-showcase ${dark ? "is-dark" : ""}`}
          style={{ "--accent-bg": w.accent.bg, "--accent-glow": w.accent.glow }}
          data-reveal="scale"
        >
          <div className="pt-showcase-browser">
            <BrowserFrame
              src={w.web}
              alt={`${w.name} ${w.url ? "website" : "app"} screenshot`}
              url={w.displayUrl || w.url.replace(/^https?:\/\/(www\.)?/, "")}
              dark={w.webDark}
              height={w.slug === "zaris" ? 750 : 900}
              priority
              sizes="(max-width: 991px) 100vw, 1000px"
            />
          </div>
          {w.phone && (
            <div className="pt-showcase-phone">
              <PhoneFrame
                src={w.phone}
                alt={`${w.name} mobile app screen`}
                width={620}
                height={w.slug === "ambimi" ? 1240 : 1227}
              />
            </div>
          )}
        </div>
      </section>

      {/* Facts */}
      <section className="pt-section-sm">
        <div className="pt-container">
          <dl className="pt-facts" data-reveal>
            <div>
              <dt>Industry</dt>
              <dd>{w.kind}</dd>
            </div>
            <div>
              <dt>Market</dt>
              <dd>{w.region}</dd>
            </div>
            <div>
              <dt>Platforms</dt>
              <dd>{w.platforms}</dd>
            </div>
            <div>
              <dt>What we did</dt>
              <dd>{w.services.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Metrics */}
      <section className="pt-section-sm pt-dark" aria-label="Key numbers">
        <div className="pt-grid-bg" aria-hidden="true" />
        <div className="pt-container">
          <div className="pt-stats three">
            {w.metrics.map((m, i) => (
              <div className="pt-stat" key={m.l} data-reveal style={{ "--d": `${i * 0.08}s` }}>
                <div className="n">{m.n}</div>
                <div className="l">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="pt-section">
        <div className="pt-container">
          <div className="pt-cs-grid">
            <aside className="pt-sticky pt-cs-aside" data-reveal>
              <div className="pt-eyebrow">The story</div>
              <nav aria-label="Case study sections">
                <a href="#challenge">The challenge</a>
                <a href="#approach">Our approach</a>
                <a href="#features">What we built</a>
                <a href="#outcome">The outcome</a>
              </nav>
            </aside>
            <div className="pt-prose">
              <h2 id="challenge" style={{ marginTop: 0 }} data-reveal>
                The challenge
              </h2>
              {w.challenge.map((p) => (
                <p key={p} data-reveal>
                  {p}
                </p>
              ))}
              <h2 id="approach" data-reveal>
                Our approach
              </h2>
              {w.approach.map((p) => (
                <p key={p} data-reveal>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-section pt-soft" id="features" aria-labelledby="features-title">
        <div className="pt-container">
          <div className="pt-head" data-reveal>
            <div className="pt-eyebrow">What we built</div>
            <h2 className="pt-h2" id="features-title">
              Key capabilities
            </h2>
          </div>
          <div className="pt-highlights">
            {w.highlights.map((h, i) => (
              <div className="pt-card hover" key={h.t} data-reveal style={{ "--d": `${(i % 3) * 0.08}s` }}>
                <span className="pt-icon" style={{ width: 44, height: 44, marginBottom: 20 }}>
                  <Icon name="check" size={20} strokeWidth={2} />
                </span>
                <h3 className="pt-h3" style={{ fontSize: 19 }}>
                  {h.t}
                </h3>
                <p>{h.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-section" aria-labelledby="stack-title">
        <div className="pt-container">
          <div className="pt-two top">
            <div data-reveal id="outcome">
              <div className="pt-eyebrow">The outcome</div>
              <p className="pt-cs-outcome">{w.outcome}</p>
            </div>
            <div data-reveal style={{ "--d": "0.1s" }}>
              <h2 className="pt-h3" id="stack-title" style={{ marginBottom: 20 }}>
                Technology
              </h2>
              <StackList items={w.stack} />
            </div>
          </div>
        </div>
      </section>

      {/* Next */}
      <section className="pt-section-sm pt-soft" aria-labelledby="next-title">
        <div className="pt-container">
          <div className="pt-head-row" style={{ marginBottom: 32 }}>
            <h2 className="pt-h2" id="next-title" style={{ margin: 0 }}>
              Next case study
            </h2>
            <Link href="/clients" className="pt-btn pt-btn-ghost">
              All clients <Arrow size={16} />
            </Link>
          </div>
          <div className="pt-work">
            <WorkCard item={next} feature />
          </div>
        </div>
      </section>

      <CtaSection title={`Want results like ${w.name}?`} />
    </PageShell>
  );
}
