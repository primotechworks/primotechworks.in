import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/site/PageShell";
import Icon, { Arrow } from "@/components/site/Icon";
import {
  Breadcrumbs,
  CtaSection,
  FaqSection,
  JsonLd,
  ProcessSection,
  StackList,
} from "@/components/site/Sections";
import { serviceBySlug, services } from "@/data/services";
import { SITE_URL } from "@/data/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = serviceBySlug[slug];
  if (!s) return {};
  return {
    title: { absolute: `${s.metaTitle} | Primo Techworks` },
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = serviceBySlug[slug];
  if (!s) notFound();

  const others = services.filter((o) => o.slug !== s.slug);

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          serviceType: s.title,
          description: s.metaDescription,
          url: `${SITE_URL}/services/${s.slug}`,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: "Worldwide",
        }}
      />

      <section className="pt-hero pt-hero-sub" aria-labelledby="svc-hero">
        <div className="pt-grid-bg" aria-hidden="true" />
        <div className="pt-glow" style={{ top: -280, right: -160 }} aria-hidden="true" />
        <div className="pt-container">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: s.title, href: `/services/${s.slug}` },
            ]}
          />
          <div className="pt-two">
            <div>
              <div className="pt-eyebrow" data-reveal>
                {s.title}
              </div>
              <h1 className="pt-h1" id="svc-hero" data-reveal style={{ "--d": "0.05s" }}>
                {s.h1}
              </h1>
              <p className="pt-lead" data-reveal style={{ "--d": "0.1s" }}>
                {s.intro}
              </p>
              <div className="pt-actions" style={{ marginTop: 36 }} data-reveal>
                <Link href="/contact" className="pt-btn pt-btn-brand">
                  Get a free estimate <Arrow size={16} />
                </Link>
                <Link href="/services" className="pt-btn pt-btn-ghost">
                  All services
                </Link>
              </div>
            </div>
            <div className="pt-card pt-svc-problems" data-reveal="scale" style={{ "--d": "0.15s" }}>
              <span className="pt-icon">
                <Icon name={s.icon} size={26} />
              </span>
              <h2 className="pt-h3">We can help if…</h2>
              <ul className="pt-checks">
                {s.problems.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-section pt-soft" aria-labelledby="deliver-title">
        <div className="pt-container">
          <div className="pt-two top">
            <div className="pt-sticky" data-reveal>
              <div className="pt-eyebrow">What you get</div>
              <h2 className="pt-h2" id="deliver-title">
                Everything needed to ship with confidence
              </h2>
              <p className="pt-lead">
                Senior people across strategy, design and engineering, with clear deliverables at
                every stage and no surprises.
              </p>
            </div>
            <ol className="pt-deliverables">
              {s.deliverables.map((d, i) => (
                <li key={d} data-reveal style={{ "--d": `${i * 0.04}s` }}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {d}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="pt-section-sm" aria-labelledby="tech-title">
        <div className="pt-container">
          <div className="pt-two">
            <div data-reveal>
              <div className="pt-eyebrow">Technology</div>
              <h2 className="pt-h2" id="tech-title" style={{ fontSize: "clamp(28px,3.4vw,40px)" }}>
                Our {s.title} toolkit
              </h2>
            </div>
            <div data-reveal style={{ "--d": "0.1s" }}>
              <StackList items={s.stack} />
            </div>
          </div>
        </div>
      </section>

      <ProcessSection title={`How we deliver ${s.title}`} />

      <FaqSection faqs={s.faqs} title={`${s.title} FAQ`} />

      <section className="pt-section-sm pt-soft" aria-labelledby="more-title">
        <div className="pt-container">
          <h2 className="pt-h3" id="more-title" style={{ marginBottom: 24 }}>
            More services
          </h2>
          <div className="pt-more-svc">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="pt-tag-link">
                <Icon name={o.icon} size={18} /> {o.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title={`Let's talk about your ${s.title} project`} />
    </PageShell>
  );
}
