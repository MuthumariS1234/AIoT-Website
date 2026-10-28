"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Capabilities", href: "/#capabilities" },
  { label: "How We Build", href: "/engineering-expertise#engineering-expertise" },
  { label: "Our Work", href: "/#our-work" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand-link" href="/" aria-label="SupplyChainz home">
          <Image
            className="brand-logo"
            src="/images/SupplyChainz%20Efficiency%20Logo.png"
            alt="SupplyChainz — Delivering Efficiency"
            width={2089}
            height={753}
            priority
          />
          <span className="brand-specialty">AIoT ENGINEERING</span>
        </Link>

        <nav className="desktop-navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-navigation${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
