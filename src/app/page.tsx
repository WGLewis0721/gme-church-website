import Link from "next/link";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import VideoEmbed from "@/components/VideoEmbed";
import GalleryGrid from "@/components/GalleryGrid";
import { siteConfig } from "@/data/siteConfig";
import { sermons } from "@/data/archives";
import { galleryImages } from "@/data/gallery";

export default function HomePage() {
  const featuredSermon = sermons[0];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-purple-deep min-h-[85vh] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #2B0F3A 0%, #5B2C83 50%, #2B0F3A 100%)",
        }}
      >
        {/* Decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/5 rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-primary/20 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container-main relative z-10 py-20">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
              Welcome to
            </p>
            <h1 className="text-white font-serif font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Greater Mt. Olive
              <br />
              <span className="text-gold">AME Zion Church</span>
            </h1>
            <p className="text-silver/90 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/live" variant="primary">
                Watch Live
              </Button>
              <Button href={siteConfig.giving.online} external variant="secondary">
                Give Online
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Next Service Strip */}
      <section className="bg-gold py-5">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-purple-deep">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold text-sm">Next Service:</span>
            </div>
            {siteConfig.serviceTimes.slice(0, 2).map((s, i) => (
              <div key={i} className="text-sm font-medium">
                <span className="font-bold">{s.day}</span> at {s.time} — {s.label}
              </div>
            ))}
            <Link href="/live" className="font-semibold text-sm underline underline-offset-2 hover:text-purple-deep/70">
              Watch Online →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader
            eyebrow="Latest Sermon"
            title="Featured Message"
            subtitle="Catch up on the latest word from our pulpit."
          />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <VideoEmbed src={featuredSermon.youtubeUrl} title={featuredSermon.title} />
            <div>
              {featuredSermon.series && (
                <p className="text-gold font-semibold text-xs uppercase tracking-wide mb-2">
                  {featuredSermon.series}
                </p>
              )}
              <h3 className="text-purple-deep font-serif font-bold text-2xl md:text-3xl mb-3">
                {featuredSermon.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                {featuredSermon.date} · {featuredSermon.speaker}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">{featuredSermon.description}</p>
              <Button href="/archives" variant="secondary">
                View All Sermons
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section
        className="section-padding"
        style={{
          background: "linear-gradient(135deg, #2B0F3A 0%, #5B2C83 100%)",
        }}
      >
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Our Story"
                title="Who We Are"
                subtitle="Greater Mt. Olive AME Zion Church is a vibrant faith community committed to transforming lives through the gospel of Jesus Christ. Grounded in the rich heritage of the AME Zion tradition, we serve our community with love, hope, and purpose."
                light
              />
              <Button href="/about" variant="primary">
                Learn More About Us
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Years of Ministry", value: "50+" },
                { label: "Active Members", value: "200+" },
                { label: "Community Programs", value: "10+" },
                { label: "Weekly Services", value: "3" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 border border-white/20 rounded-xl p-6 text-center"
                >
                  <p className="text-gold font-serif font-bold text-3xl mb-1">{stat.value}</p>
                  <p className="text-silver/80 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <SectionHeader
            eyebrow="Life at Greater Mt. Olive"
            title="Our Church Family"
            subtitle="Moments of worship, fellowship, and service."
            centered
          />
          <GalleryGrid images={galleryImages.slice(0, 6)} columns={3} />
          <div className="text-center mt-8">
            <Button href="/about#gallery" variant="secondary">
              See More Photos
            </Button>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="bg-purple-deep py-12">
        <div className="container-main text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
            Stay Connected
          </p>
          <h2 className="text-white font-serif font-bold text-2xl md:text-3xl mb-6">
            Follow Us on Social Media
          </h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { label: "Facebook", href: siteConfig.social.facebook, icon: "f" },
              { label: "YouTube", href: siteConfig.social.youtube, icon: "▶" },
              { label: "Instagram", href: siteConfig.social.instagram, icon: "ig" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg py-3 px-6 transition-all duration-200"
              >
                <span className="text-gold font-bold text-sm">{social.icon}</span>
                <span className="font-medium text-sm">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
