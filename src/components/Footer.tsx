import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-purple-deep text-silver border-t border-purple-primary/30">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Church Info */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-3">
              Greater Mt. Olive
            </h3>
            <p className="text-silver/80 text-sm mb-1">AME Zion Church</p>
            <p className="text-silver/80 text-sm">{siteConfig.location.fullAddress}</p>
            <p className="text-silver/80 text-sm mt-1">{siteConfig.contact.phone}</p>
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

          {/* Service Times */}
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wide mb-3">
              Service Times
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.serviceTimes.map((service, i) => (
                <li key={i} className="text-silver/80">
                  <span className="text-white font-medium">{service.day}</span> — {service.time}
                  <br />
                  <span className="text-silver/60 text-xs">{service.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-purple-primary/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer"
              className="text-silver/70 hover:text-gold transition-colors text-sm">
              Facebook
            </a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer"
              className="text-silver/70 hover:text-gold transition-colors text-sm">
              YouTube
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"
              className="text-silver/70 hover:text-gold transition-colors text-sm">
              Instagram
            </a>
          </div>
          <p className="text-silver/50 text-xs text-center">
            © {new Date().getFullYear()} Greater Mt. Olive AME Zion Church · Hayneville, AL
          </p>
        </div>
      </div>
    </footer>
  );
}
