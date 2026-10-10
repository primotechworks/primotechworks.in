import Image from "next/image";
import Link from "next/link";
import { CONTACT, SOCIALS } from "@/data/site";
import Icon from "./Icon";
import Logo from "./Logo";

const COMPANY = [
  { href: "/about", text: "About" },
  { href: "/services", text: "Services" },
  { href: "/contact", text: "Contact" },
];

const LEGAL = [
  { href: "/privacypolicy", text: "Privacy Policy" },
  { href: "/termsandconditions", text: "Terms & Conditions" },
  { href: "/refundandcancellationpolicy", text: "Refund & Cancellation Policy" },
];

export default function SiteFooter() {
  return (
    <footer className="pt-footer">
      <Image
        src="/assets/images/brand/footer-wave.svg"
        alt=""
        width={1600}
        height={268}
        className="pt-footer-wave"
        aria-hidden="true"
      />
      <div className="pt-container">
        <div className="pt-footer-grid">
          <div>
            <Link href="/" aria-label="Primo Techworks home" className="pt-footer-logo">
              <Logo height={64} />
            </Link>
            <p className="pt-footer-tag">Building smarter digital solutions, innovations &amp; futures.</p>
            <ul className="pt-footer-contact">
              <li>
                <Icon name="phone" size={16} />
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </li>
              <li>
                <Icon name="mail" size={16} />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              {COMPANY.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Social Media</h3>
            <ul>
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a href={s.url} target="_blank" rel="noopener">
                    <i className={s.icon} aria-hidden="true" /> {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Legal &amp; Press</h3>
            <ul>
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-footer-bottom">
          <b>© Primo Techworks {new Date().getFullYear()}.</b>
          <b>Based in Ahmedabad, India.</b>
          <a href="#top" className="pt-to-top" aria-label="Back to top">
            <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
