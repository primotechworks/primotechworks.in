"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";

export default function Header9({ links }) {
  return (
    <div className="main-nav-sub full-wrapper">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap position-static local-scroll">
        <Link href="/" className="logo">
          <Image
            src="/assets/images/primo-techworks-banner-logo.png"
            alt="Primo Techworks"
            width={106}
            height={36}
            style={{ width: '100%', height: 'auto'}}
            className="light-mode-logo"
          />
          <Image
            src="/assets/images/primo-techworks-banner-logo.png"
            alt="Primo Techworks"
            width={106}
            height={36}
            style={{ width: '100%', height: 'auto', filter: 'brightness(0) invert(1)'}}
            className="dark-mode-logo"
          />
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
          <Nav links={links} />
          <li className="desktop-nav-display">
            <div className="vr mt-2" />
          </li>
          <li>
            <Link href="/contact" className="opacity-1 no-hover">
              <span
                className="btn btn-mod btn-color-light btn-border-white-light btn-small btn-circle"
                data-btn-animate="y"
              >
                Get in Touch
              </span>
            </Link>
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
