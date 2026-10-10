"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/data/site";
import Icon, { Arrow } from "./Icon";
import Logo from "./Logo";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <header className={`pt-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <a href="#main" className="pt-skip">
        Skip to content
      </a>
      <div className="pt-container pt-header-inner">
        <Link href="/" className="pt-logo" aria-label="Primo Techworks home">
          <Logo height={44} priority />
        </Link>

        <nav className="pt-nav" aria-label="Main">
          <ul>
            {NAV.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={isActive(l.href) ? "active" : ""}
                  aria-current={isActive(l.href) ? "page" : undefined}
                >
                  {l.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pt-header-cta">
          <Link href="/contact" className="pt-btn pt-btn-brand pt-btn-sm">
            Book a free call <Arrow size={16} />
          </Link>
          <button
            type="button"
            className="pt-menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="pt-mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      <div id="pt-mobile-menu" className="pt-mobile" hidden={!open}>
        <ul>
          {NAV.map((l, i) => (
            <li key={l.href} style={{ "--i": i }}>
              <Link href={l.href} aria-current={isActive(l.href) ? "page" : undefined}>
                {l.text}
                <Arrow size={20} />
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="pt-btn pt-btn-brand" style={{ width: "100%" }}>
          Book a free call
        </Link>
      </div>
    </header>
  );
}
