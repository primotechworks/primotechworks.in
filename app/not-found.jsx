import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import { Arrow } from "@/components/site/Icon";
import { services } from "@/data/services";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for doesn't exist or has been moved.",
  robots: { index: false },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <PageShell>
      <section className="pt-hero" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }} aria-labelledby="nf-title">
        <div className="pt-grid-bg" aria-hidden="true" />
        <div className="pt-glow" style={{ top: -200, left: "50%", marginLeft: -320 }} aria-hidden="true" />
        <div className="pt-container pt-center">
          <div className="pt-404" aria-hidden="true">
            404
          </div>
          <h1 className="pt-h2" id="nf-title">
            This page took a wrong turn
          </h1>
          <p className="pt-lead" style={{ maxWidth: 520, margin: "0 auto 36px" }}>
            The page you&apos;re looking for doesn&apos;t exist or has moved. Here are a few good
            places to continue.
          </p>
          <div className="pt-actions" style={{ justifyContent: "center", marginBottom: 48 }}>
            <Link href="/" className="pt-btn pt-btn-brand">
              Back to home <Arrow size={16} />
            </Link>
            <Link href="/contact" className="pt-btn pt-btn-ghost">
              Contact us
            </Link>
          </div>
          <div className="pt-more-svc" style={{ justifyContent: "center" }}>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="pt-tag-link">
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
