import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import VideoEmbed from "@/components/VideoEmbed";
import GalleryGrid from "@/components/GalleryGrid";
import ChurchIcon from "@/components/ChurchIcon";
import { siteConfig } from "@/data/siteConfig";
import { sermons } from "@/data/archives";
import { galleryImages } from "@/data/gallery";

export default function HomePage() {
  const featuredSermon = sermons[0];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Church Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1600&h=900&fit=crop&fm=webp"
            alt="Church congregation worshipping"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-deep/95 via-purple-deep/80 to-purple-deep/40" />
        </div>

        {/* Decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/5 rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-primary/20 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container-main relative z-20 py-20">
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
      <section className="bg-white border-b border-silver/40 py-5 shadow-sm">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <ChurchIcon />
              <div>
                <p className="text-purple-deep font-bold text-sm">Sunday Worship Service</p>
                <p className="text-gray-500 text-xs">
                  Next Service: {siteConfig.serviceTimes[0].day} at {siteConfig.serviceTimes[0].time}
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-sm hidden sm:block">
              Join us in praise and worship. We look forward to seeing you!
            </p>
            <Link href="/live" className="text-purple-primary font-semibold text-sm underline underline-offset-2 hover:text-purple-light">
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
          background: "var(--gradient-purple-deep)",
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

      {/* Upcoming Events */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader
            eyebrow="What's Happening"
            title="Upcoming Events"
            subtitle="Stay connected with our church calendar."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-silver/40 rounded-xl p-6 card-shadow flex flex-col"
              >
                <span className="text-gold font-semibold text-xs uppercase tracking-wide mb-2">
                  {event.category}
                </span>
                <h3 className="text-purple-deep font-serif font-bold text-lg mb-1 leading-snug">
                  {event.title}
                </h3>
                <p className="text-purple-primary font-medium text-sm mb-1">
                  {event.date}
                </p>
                <p className="text-gray-500 text-sm mb-3">{event.time}</p>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section
        className="section-padding"
        style={{ background: "var(--gradient-purple-deep)" }}
      >
        <div className="container-main">
          <SectionHeader
            eyebrow="Get Involved"
            title="Our Ministries"
            subtitle="There is a place for everyone at Greater Mt. Olive. Find where you belong."
            centered
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.ministries.map((ministry) => (
              <div
                key={ministry.name}
                className="bg-white/10 border border-white/20 rounded-xl p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-serif font-bold text-base mb-1">
                    {ministry.name}
                  </h3>
                  <p className="text-silver/70 text-sm leading-relaxed">
                    {ministry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Request CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeader
              eyebrow="We Care About You"
              title="Submit a Prayer Request"
              subtitle="Share what's on your heart. Our prayer team is committed to interceding on your behalf."
              centered
            />
            <div className="bg-white border border-silver/40 rounded-xl p-8 card-shadow">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Prayer Request`}
                  className="flex items-center justify-center gap-2 bg-purple-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-primary focus-visible:ring-offset-2"
                  aria-label="Email us your prayer request"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Prayer Request
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center justify-center gap-2 border-2 border-purple-primary text-purple-primary font-semibold py-3 px-6 rounded-lg hover:bg-purple-primary hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-primary focus-visible:ring-offset-2"
                  aria-label={`Call us at ${siteConfig.contact.phone}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                  </svg>
                  Call Us
                </a>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                You can also reach us at{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-purple-primary underline hover:text-purple-light">
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
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
