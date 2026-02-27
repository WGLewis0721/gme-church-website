"use client";

import Link from "next/link";
import { useState } from "react";
import ChurchIcon from "@/components/ChurchIcon";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/archives", label: "Archives" },
  { href: "/live", label: "Live Service" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-purple-deep border-b border-purple-primary/30 shadow-lg">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Church Name */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <ChurchIcon />
            <div>
              <span className="text-white font-serif font-bold text-lg md:text-xl leading-tight block">
                Greater Mt. Olive
              </span>
              <span className="hidden md:block text-silver text-xs">
                AME Zion Church
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-silver hover:text-white font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/give"
              className="bg-gold text-purple-deep font-semibold text-sm py-2 px-5 rounded-lg hover:bg-gold-dark transition-all duration-200"
            >
              Give
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-purple-primary/30 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-silver hover:text-white font-medium py-2 px-2 rounded transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/give"
              className="block bg-gold text-purple-deep font-semibold py-2 px-4 rounded-lg hover:bg-gold-dark transition-all duration-200 mt-2 text-center"
              onClick={() => setMobileOpen(false)}
            >
              Give
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
