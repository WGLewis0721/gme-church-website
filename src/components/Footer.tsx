import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import ChurchIcon from "@/components/ChurchIcon";

export default function Footer() {
  return (
    <footer className="bg-purple-deep text-silver border-t border-purple-primary/30">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Church Info */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <ChurchIcon />
              <div>
                <h3 className="text-white font-serif font-bold text-lg leading-tight">
                  Greater Mt. Olive
                </h3>
                <p className="text-silver/80 text-xs">AME Zion Church</p>
              </div>
            </div>
            <p className="text-silver/80 text-sm">{siteConfig.location.fullAddress}</p>
            <p className="text-silver/80 text-sm mt-1">{siteConfig.contact.phone}</p>
            <p className="text-silver/80 text-sm mt-1">{siteConfig.contact.email}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wide mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/archives", label: "Sermon Archives" },
                { href: "/live", label: "Live Service" },
                { href: "/give", label: "Give Online" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-silver/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times + Social */}
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wide mb-3">
              Service Times
            </h4>
            <ul className="space-y-2 text-sm mb-6">
              {siteConfig.serviceTimes.map((service, i) => (
                <li key={i} className="text-silver/80">
                  <span className="text-white font-medium">{service.day}</span> — {service.time}
                  <br />
                  <span className="text-silver/60 text-xs">{service.label}</span>
                </li>
              ))}
            </ul>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wide mb-3">
              Join Us Online
            </h4>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-primary/30 pt-6 text-center">
          <p className="text-silver/50 text-xs">
            © {new Date().getFullYear()} Greater Mt. Olive AME Zion Church · Hayneville, AL · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
