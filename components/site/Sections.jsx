import Image from "next/image";
import Link from "next/link";
import { SITE_URL, HOME_FAQS, MODELS, PROCESS, STATS, TESTIMONIALS, WHY } from "@/data/site";
import { work as allWork } from "@/data/work";
import Icon, { Arrow } from "./Icon";
import { BrowserFrame } from "./Frames";

export function SectionHead({ eyebrow, title, lead, center = false, children, as: H = "h2" }) {
  return (
    <div className={`pt-head ${center ? "center" : ""}`} data-reveal>
      {eyebrow && <div className="pt-eyebrow">{eyebrow}</div>}
      <H className="pt-h2">{title}</H>
      {lead && <p className="pt-lead">{lead}</p>}
      {children}
    </div>
  );
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* Work ------------------------------------------------------------------ */
export function WorkCard({ item, feature = false, i = 0, headingLevel = "h3" }) {
  const H = headingLevel;
  return (
    <Link
      href={`/clients/${item.slug}`}
      className={`pt-work-card ${feature ? "feature" : ""}`}
      data-reveal
      style={{ "--d": `${(i % 2) * 0.1}s` }}
    >
      <div
        className="pt-work-media"
        style={{ "--accent-bg": item.accent.bg, "--accent-glow": item.accent.glow }}
      >
        <BrowserFrame
          src={item.web}
          alt={`${item.name}: ${item.tagline}`}
          url={item.displayUrl || item.url.replace(/^https?:\/\/(www\.)?/, "")}
          dark={item.webDark}
          height={item.slug === "zaris" ? 750 : 900}
          sizes={feature ? "(max-width: 768px) 100vw, 1100px" : "(max-width: 768px) 100vw, 600px"}
        />
      </div>
      <div className="pt-work-meta">
        <div>
          <H>{item.name}</H>
          <p>{item.tagline}</p>
          <div className="pt-tags" style={{ marginTop: 14 }}>
            <span className="pt-tag">{item.kind}</span>
            <span className="pt-tag">{item.region}</span>
          </div>
        </div>
        <span className="pt-round-arrow" aria-hidden="true">
          <Icon name="arrow" size={18} />
        </span>
      </div>
    </Link>
  );
}

export function WorkGrid({ items, firstFeatured = true }) {
  return (
    <div className="pt-work">
      {items.map((w, i) => (
        <WorkCard key={w.slug} item={w} feature={firstFeatured && i === 0} i={i} />
      ))}
    </div>
  );
}

// Each company's own logo / wordmark, written the way they write it.
export function BrandLogo({ item }) {
  const l = item.logo;
  if (l?.src) {
    return (
      <Image src={l.src} alt={item.name} width={l.w} height={l.h} sizes={`${Math.round((l.height * l.w) / l.h) * 2}px`} style={{ height: l.height, width: "auto" }} />
    );
  }
  if (l?.wordmark === "kwoon") {
    return (
      <span className="pt-brand-kwoon">
        <Image src={l.mark} alt="" width={64} height={64} style={{ height: 38, width: "auto" }} />
        <span aria-label="Kwoon">
          Kw<span className="oo">oo</span>n
        </span>
      </span>
    );
  }
  if (l?.wordmark === "zaris") {
    return (
      <span className="pt-brand-zaris">
        <Image src={l.mark} alt="" width={160} height={160} style={{ height: 40, width: "auto" }} />
        <span>ZARIS</span>
      </span>
    );
  }
  return <span>{item.name}</span>;
}

export function WorkStrip() {
  const logos = (dup) =>
    allWork.map((w) => (
      <Link
        href={`/clients/${w.slug}`}
        className="pt-brand"
        key={`${dup ? "d-" : ""}${w.slug}`}
        aria-hidden={dup || undefined}
        tabIndex={dup ? -1 : undefined}
        title={w.name}
      >
        <BrandLogo item={w} />
      </Link>
    ));
  return (
    <section className="pt-section-sm" aria-label="Clients and products we've built" style={{ paddingTop: 24 }}>
      <div className="pt-container">
        <p className="pt-strip-label">
          Products we&apos;ve designed, engineered and launched ·{" "}
          <Link href="/clients" className="pt-strip-link">
            See our clients
          </Link>
        </p>
        <div className="pt-marquee">
          <div className="pt-marquee-track">
            {logos(false)}
            {logos(true)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Services ---------------------------------------------------------------- */
export function ServiceCards({ items, linkText = "Explore" }) {
  return (
    <div className="pt-bento">
      {items.map((s, i) => (
        <Link
          key={s.slug}
          href={`/services/${s.slug}`}
          className="pt-card"
          data-reveal
          style={{ "--d": `${(i % 3) * 0.08}s` }}
        >
          <span className="pt-icon">
            <Icon name={s.icon} size={26} />
          </span>
          <h3 className="pt-h3">{s.title}</h3>
          <p>{s.short}</p>
          <span className="pt-link">
            {linkText} <span className="visually-hidden">{s.title}</span>
            <Arrow size={16} />
          </span>
        </Link>
      ))}
    </div>
  );
}

/* Process --------------------------------------------------------------- */
export function ProcessSection({ title = "A clear process, from first call to launch and beyond" }) {
  return (
    <section className="pt-section pt-dark" aria-labelledby="process-title">
      <div className="pt-grid-bg" aria-hidden="true" />
      <div className="pt-glow" style={{ top: -260, right: -200 }} aria-hidden="true" />
      <div className="pt-container">
        <div className="pt-head" data-reveal>
          <div className="pt-eyebrow">How we work</div>
          <h2 className="pt-h2" id="process-title">
            {title}
          </h2>
          <p className="pt-lead">
            No black boxes. You see working software every week, and you always know what&apos;s
            done, what&apos;s next and what it costs.
          </p>
        </div>
        <ol className="pt-steps" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {PROCESS.map((s, i) => (
            <li className="pt-step" key={s.t} data-reveal style={{ "--d": `${i * 0.1}s` }}>
              <div className="pt-step-num">0{i + 1}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <ul>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* Why ------------------------------------------------------------------- */
export function WhySection() {
  return (
    <section className="pt-section" aria-labelledby="why-title">
      <div className="pt-container">
        <div className="pt-head" data-reveal>
          <div className="pt-eyebrow">Why Primo Techworks</div>
          <h2 className="pt-h2" id="why-title">
            The senior team you&apos;d hire, if you could
          </h2>
          <p className="pt-lead">
            We combine the craft of a product company with the flexibility of a dedicated partner, and we
            treat your product like it&apos;s our own.
          </p>
        </div>
        <div className="pt-why">
          {WHY.map((w, i) => (
            <div key={w.t} data-reveal style={{ "--d": `${(i % 3) * 0.08}s` }}>
              <Icon name={w.icon} size={28} />
              <h3>{w.t}</h3>
              <p>{w.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Engagement models ------------------------------------------------------- */
export function ModelsSection() {
  return (
    <section className="pt-section pt-soft" aria-labelledby="models-title">
      <div className="pt-container">
        <div className="pt-head center" data-reveal>
          <div className="pt-eyebrow">Ways to work together</div>
          <h2 className="pt-h2" id="models-title">
            Flexible engagement, built around your stage
          </h2>
          <p className="pt-lead">
            Start small with advisory, ship a defined product, or bring on a dedicated team. Move
            between models as you grow.
          </p>
        </div>
        <div className="pt-grid-3">
          {MODELS.map((m, i) => (
            <div
              key={m.t}
              className={`pt-card pt-model ${m.featured ? "featured" : ""}`}
              data-reveal
              style={{ "--d": `${i * 0.08}s` }}
            >
              <div className="best">{m.best}</div>
              <h3 className="pt-h3">{m.t}</h3>
              <p>{m.d}</p>
              <ul className="pt-checks">
                {m.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Stats ------------------------------------------------------------------- */
export function StatsSection({ dark = false }) {
  return (
    <section className={`pt-section-sm ${dark ? "pt-dark" : ""}`} aria-label="Primo Techworks in numbers">
      <div className="pt-container">
        <div className="pt-stats">
          {STATS.map((s, i) => (
            <div className="pt-stat" key={s.l} data-reveal style={{ "--d": `${i * 0.08}s` }}>
              <div className="n">
                <span data-count={s.n}>{s.n}</span>
                {s.suffix}
              </div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Testimonials (renders only when real quotes exist) --------------------- */
export function TestimonialsSection() {
  if (!TESTIMONIALS.length) return null;
  return (
    <section className="pt-section" aria-labelledby="testimonials-title">
      <div className="pt-container">
        <SectionHead eyebrow="Client voices" title="What it's like to work with us" />
        <div className="pt-grid-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={t.name} className="pt-card pt-quote" data-reveal style={{ "--d": `${i * 0.08}s` }}>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <b>{t.name}</b>
                {t.role}, {t.company}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* FAQ ------------------------------------------------------------------- */
export function FaqList({ faqs }) {
  return (
    <div className="pt-faq">
      {faqs.map((f, i) => (
        <details key={f.q} open={i === 0}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function FaqSection({ faqs = HOME_FAQS, title = "Questions we hear often", soft = false }) {
  return (
    <section className={`pt-section ${soft ? "pt-soft" : ""}`} aria-labelledby="faq-title">
      <JsonLd data={faqSchema(faqs)} />
      <div className="pt-container">
        <div className="pt-two top">
          <div className="pt-sticky" data-reveal>
            <div className="pt-eyebrow">FAQ</div>
            <h2 className="pt-h2" id="faq-title">
              {title}
            </h2>
            <p className="pt-lead" style={{ marginBottom: 28 }}>
              Can&apos;t find what you&apos;re looking for? Ask us directly. We reply within one
              business day.
            </p>
            <Link href="/contact" className="pt-btn pt-btn-ghost">
              Ask a question <Arrow size={16} />
            </Link>
          </div>
          <div data-reveal style={{ "--d": "0.1s" }}>
            <FaqList faqs={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* CTA --------------------------------------------------------------------- */
export function CtaSection({
  title = "Have a product in mind? Let's make it real.",
  lead = "Tell us what you're building. In a free 30-minute call, we'll share honest advice on scope, approach and cost, with no obligation.",
}) {
  return (
    <section className="pt-section-sm" style={{ paddingBottom: 120 }}>
      <div className="pt-container">
        <div className="pt-cta" data-reveal="scale">
          <div className="pt-grid-bg" style={{ opacity: 1 }} aria-hidden="true" />
          <div className="pt-glow" style={{ top: -300, left: "50%", marginLeft: -320 }} aria-hidden="true" />
          <div className="pt-eyebrow" style={{ color: "var(--pt-brand-400)" }}>
            Start a project
          </div>
          <h2 className="pt-h2">{title}</h2>
          <p className="pt-lead">{lead}</p>
          <div className="pt-actions">
            <Link href="/contact" className="pt-btn pt-btn-brand">
              Book a free consultation <Arrow size={16} />
            </Link>
            <a href="mailto:info@primotechworks.in" className="pt-btn pt-btn-ghost" style={{ "--b-fg": "#fff", borderColor: "rgba(255,255,255,.22)" }}>
              info@primotechworks.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Tech stack chips --------------------------------------------------------- */
export function StackList({ items }) {
  return (
    <div className="pt-stack">
      {items.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}

/* Breadcrumbs with schema --------------------------------------------------- */
export function Breadcrumbs({ items }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((it, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: it.name,
            item: `${SITE_URL}${it.href}`,
          })),
        }}
      />
      <nav aria-label="Breadcrumb">
        <ol className="pt-crumbs">
          {items.map((it, i) => (
            <li key={it.href}>
              {i < items.length - 1 ? <Link href={it.href}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
